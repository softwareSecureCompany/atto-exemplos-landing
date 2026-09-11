(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  burger?.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  menu?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => menu.classList.remove("open"))
  );

  const nav = document.querySelector("[data-nav]");
  const onScrollNav = () => nav?.classList.toggle("scrolled", window.scrollY > 12);
  addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

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

  const reveals = [...document.querySelectorAll("[data-reveal]")];
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("on");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );
  reveals.forEach((el) => io.observe(el));

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
        const t = Math.min(1, (now - start) / 1100);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    once.observe(el);
  });

  if (reduce) return;

  const heroMedia = document.querySelector("[data-hero-media]");
  const heroCopy = document.querySelector("[data-hero-copy]");
  let sy = 0;
  const loop = () => {
    sy += (scrollY - sy) * 0.08;
    if (heroMedia) heroMedia.style.transform = `translate3d(0, ${sy * 0.22}px, 0) scale(1.12)`;
    if (heroCopy) heroCopy.style.transform = `translate3d(0, ${sy * 0.12}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();
})();
