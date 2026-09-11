(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.body.classList.add("booted");

  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  burger?.addEventListener("click", () => menu.classList.toggle("open"));
  menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));

  const nav = document.querySelector("[data-nav]");
  const bar = document.querySelector("[data-progress]");
  addEventListener("scroll", () => nav?.classList.toggle("scrolled", scrollY > 8), { passive: true });

  document.querySelectorAll("[data-faq] button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const open = item.classList.contains("open");
      item.parentElement.querySelectorAll("[data-faq-item]").forEach((el) => el.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
  });

  document.querySelectorAll("form[data-demo]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = form.querySelector(".ok");
      if (ok) ok.style.display = "block";
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("on");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll("[data-reveal], [data-clip]").forEach((el) => io.observe(el));

  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    const once = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      once.disconnect();
      if (reduce) {
        el.textContent = prefix + target + suffix;
        return;
      }
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / 1200);
        el.textContent = prefix + Math.round(target * (1 - Math.pow(1 - t, 3))) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    once.observe(el);
  });

  if (reduce) return;

  const shots = [...document.querySelectorAll("[data-p]")];
  const quote = document.querySelector("[data-quote]");
  let mx = 0, my = 0, tx = 0, ty = 0, sy = 0;
  addEventListener("mousemove", (e) => {
    mx = e.clientX / innerWidth - 0.5;
    my = e.clientY / innerHeight - 0.5;
  });
  const loop = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    if (bar) bar.style.transform = `scaleX(${scrollY / max})`;
    sy += (scrollY - sy) * 0.08;
    tx += (mx - tx) * 0.08;
    ty += (my - ty) * 0.08;
    shots.forEach((el) => {
      const p = Number(el.dataset.p) || 0.12;
      el.style.transform = `translate3d(${tx * p * 36}px, ${sy * p * 0.18}px, 0)`;
    });
    if (quote) quote.style.transform = `translate3d(0, ${sy * 0.08}px, 0) scale(1.08)`;
    requestAnimationFrame(loop);
  };
  loop();
})();
