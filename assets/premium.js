(() => {
  const fine = window.matchMedia("(pointer: fine)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("form[data-demo]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = form.querySelector(".ok");
      if (ok) ok.style.display = "block";
    });
  });

  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  burger?.addEventListener("click", () => menu?.classList.toggle("open"));
  menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));

  document.querySelectorAll("[data-faq-item]").forEach((item) => {
    item.querySelector("button")?.addEventListener("click", () => item.classList.toggle("open"));
  });

  const bar = document.querySelector("[data-progress]");
  const layers = [...document.querySelectorAll("[data-speed]")];
  const reveals = [...document.querySelectorAll("[data-reveal], [data-clip]")];

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("on");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  reveals.forEach((el) => io.observe(el));

  document.querySelectorAll(".line").forEach((line) => {
    const text = line.textContent;
    line.innerHTML = `<span>${text}</span>`;
  });
  requestAnimationFrame(() => document.body.classList.add("booted"));

  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const countIo = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / 1200);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${Math.round(target * eased)}${suffix}`;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        countIo.unobserve(el);
      });
    }, { threshold: 0.4 });
    countIo.observe(el);
  });

  if (fine && !reduce) {
    const cur = document.querySelector("[data-cursor]");
    const ring = document.querySelector("[data-ring]");
    if (cur && ring) {
      document.body.classList.add("has-cursor");
      let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
      addEventListener("mousemove", (e) => {
        tx = e.clientX;
        ty = e.clientY;
        cur.style.transform = `translate(${tx}px, ${ty}px)`;
      });
      const spin = () => {
        x += (tx - x) * 0.16;
        y += (ty - y) * 0.16;
        ring.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(spin);
      };
      spin();
      document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hot"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hot"));
      });
    }

    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });

    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 7}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  const canvas = document.querySelector("[data-ambient]");
  if (canvas && !reduce) {
    const ctx = canvas.getContext("2d");
    const css = getComputedStyle(document.documentElement);
    const accent = css.getPropertyValue("--accent").trim() || "#d4b483";
    const rgb = accent.startsWith("#")
      ? [
          parseInt(accent.slice(1, 3), 16),
          parseInt(accent.slice(3, 5), 16),
          parseInt(accent.slice(5, 7), 16),
        ]
      : [212, 180, 131];
    const motes = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: 0.25 + Math.random() * 0.75,
      vx: (Math.random() - 0.5) * 0.00018,
      vy: -0.00012 - Math.random() * 0.0002,
    }));
    const fit = () => {
      canvas.width = innerWidth * devicePixelRatio;
      canvas.height = innerHeight * devicePixelRatio;
    };
    fit();
    addEventListener("resize", fit);
    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      motes.forEach((a) => {
        a.x += a.vx;
        a.y += a.vy;
        if (a.y < -0.02) a.y = 1.02;
        if (a.x < 0 || a.x > 1) a.vx *= -1;
        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${0.18 * a.z})`;
        ctx.beginPath();
        ctx.arc(a.x * w, a.y * h, 1.6 * a.z * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
  }

  if (reduce) {
    document.body.classList.add("booted");
    return;
  }

  let mx = 0, my = 0, tx = 0, ty = 0;
  addEventListener("mousemove", (e) => {
    mx = e.clientX / innerWidth - 0.5;
    my = e.clientY / innerHeight - 0.5;
  });

  const heroMedia = document.querySelector("[data-hero-media]");
  const heroCopy = document.querySelector(".stage-copy");
  const tick = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    if (bar) bar.style.transform = `scaleX(${scrollY / max})`;
    tx += (mx - tx) * 0.06;
    ty += (my - ty) * 0.06;
    if (heroMedia) {
      const y = Math.min(scrollY, innerHeight);
      heroMedia.style.transform = `translate3d(${tx * 18}px, ${y * 0.22}px, 0) scale(1.08)`;
    }
    if (heroCopy) {
      const fade = Math.max(0, 1 - scrollY / (innerHeight * 0.7));
      heroCopy.style.opacity = String(fade);
      heroCopy.style.transform = `translateY(${scrollY * -0.12}px)`;
    }
    layers.forEach((el) => {
      const speed = Number(el.dataset.speed) || 0.2;
      el.style.transform = `translate3d(${tx * speed * 40}px, ${scrollY * speed * 0.28}px, 0)`;
    });
    requestAnimationFrame(tick);
  };
  tick();
})();
