import { createServer } from "node:http";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const site = path.join(root, "..");
const require = createRequire(path.join(root, "package.json"));
const puppeteer = require("puppeteer-core");
const { PDFDocument } = require("pdf-lib");

const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 8768;
const out = path.join(root, "ATTO-Exemplos-Landing.pdf");
const shotsDir = path.join(root, "shots");

const landings = [
  "basico-hidraulica",
  "basico-manicure",
  "basico-personal",
  "essencial-barbearia",
  "essencial-odonto",
  "essencial-imobiliaria",
  "premium-restaurante",
  "premium-arquitetura",
  "premium-spa",
];

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};

const server = createServer(async (req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  const rel = url === "/" ? "/index.html" : url;
  const file = path.join(site, rel.replace(/^\//, ""));
  try {
    const data = await readFile(file);
    res.writeHead(200, { "Content-Type": mime[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("no");
  }
});

await new Promise((r) => server.listen(PORT, r));
await mkdir(shotsDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  args: ["--hide-scrollbars", "--font-render-hinting=none", "--disable-gpu"],
});

const waitReady = async (page) => {
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    await Promise.all(
      [...document.images].map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      })
    );
  });
};

const shotPage = await browser.newPage();
await shotPage.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

for (const name of landings) {
  await shotPage.goto(`http://127.0.0.1:${PORT}/${name}.html`, {
    waitUntil: "networkidle0",
    timeout: 120000,
  });
  await shotPage.addStyleTag({ content: ".demo { display: none !important; }" });
  await waitReady(shotPage);
  await new Promise((r) => setTimeout(r, name.startsWith("premium") ? 900 : 350));
  await shotPage.screenshot({
    path: path.join(shotsDir, `${name}.jpg`),
    type: "jpeg",
    quality: 90,
  });
  console.log("shot", name);
}

const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
await page.goto(`http://127.0.0.1:${PORT}/apresentacao/index.html`, {
  waitUntil: "networkidle0",
  timeout: 120000,
});
await waitReady(page);
await page.evaluate(() => {
  document.body.classList.add("printing");
  const viewport = document.getElementById("viewport");
  const scaler = document.getElementById("scaler");
  const stage = document.getElementById("stage");
  viewport.style.width = "1920px";
  viewport.style.height = "1080px";
  scaler.style.width = "1920px";
  scaler.style.height = "1080px";
  stage.style.transform = "none";
});

const total = await page.evaluate(() => document.querySelectorAll(".slide").length);
const frames = [];
for (let i = 0; i < total; i++) {
  await page.evaluate((index) => {
    const slides = [...document.querySelectorAll(".slide")];
    const stage = document.getElementById("stage");
    slides.forEach((s, n) => s.classList.toggle("active", n === index));
    stage.style.transform = "none";
  }, i);
  await new Promise((r) => setTimeout(r, 500));
  frames.push(
    await page.screenshot({
      type: "jpeg",
      quality: 92,
      clip: { x: 0, y: 0, width: 1920, height: 1080 },
    })
  );
  console.log("captured slide", i + 1, "/", total);
}

await browser.close();
server.close();

const pdf = await PDFDocument.create();
const pageW = 20 * 72;
const pageH = 11.25 * 72;
for (const bytes of frames) {
  const img = await pdf.embedJpg(bytes);
  const p = pdf.addPage([pageW, pageH]);
  p.drawImage(img, { x: 0, y: 0, width: pageW, height: pageH });
}
await writeFile(out, await pdf.save());
console.log("wrote", out, "pages", total);
