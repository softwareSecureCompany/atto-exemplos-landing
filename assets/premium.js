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

  const bar = document.querySelector("[data-progress]");
  const layers = [...document.querySelectorAll("[data-speed]")];
  const reveals = [...document.querySelectorAll("[data-reveal]")];
  const route = document.querySelector("[data-route]");
  const traveler = document.querySelector("[data-traveler]");
  let routeLen = 0;
  if (route && traveler && route.getTotalLength) {
    routeLen = route.getTotalLength();
    traveler.setAttribute("transform", `translate(${route.getPointAtLength(0).x}, ${route.getPointAtLength(0).y})`);
  }

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
        card.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 10}deg) translateZ(18px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  const canvas = document.querySelector("[data-ambient]");
  if (canvas && !reduce) {
    const ctx = canvas.getContext("2d");
    const dots = Array.from({ length: 46 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: 0.3 + Math.random() * 0.7,
      vx: (Math.random() - 0.5) * 0.00025,
      vy: (Math.random() - 0.5) * 0.00025,
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
      ctx.lineWidth = 1 * devicePixelRatio;
      dots.forEach((a, i) => {
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > 1) a.vx *= -1;
        if (a.y < 0 || a.y > 1) a.vy *= -1;
        const ax = a.x * w, ay = a.y * h;
        ctx.fillStyle = `rgba(255,255,255,${0.12 * a.z})`;
        ctx.beginPath();
        ctx.arc(ax, ay, 1.4 * a.z * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 0.16) {
            ctx.strokeStyle = `rgba(255,255,255,${(0.16 - d) * 0.7})`;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    };
    draw();
  }

  const track = document.querySelector("[data-cover]");
  if (track) {
    const shots = JSON.parse(track.dataset.shots || "[]");
    let active = Math.min(2, shots.length - 1);
    const render = () => {
      track.innerHTML = "";
      shots.forEach((src, i) => {
        const d = i - active;
        const el = document.createElement("button");
        el.type = "button";
        el.className = "cover-card";
        el.innerHTML = `<img src="${src}" alt="" />`;
        el.style.transform = `translateX(${d * 210}px) translateZ(${-Math.abs(d) * 170}px) rotateY(${d * -26}deg)`;
        el.style.filter = `brightness(${1 - Math.abs(d) * 0.22})`;
        el.style.zIndex = String(20 - Math.abs(d));
        el.onclick = () => {
          active = i;
          render();
        };
        track.appendChild(el);
      });
    };
    render();
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

  const world = document.querySelector("[data-world]");
  const tick = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const p = scrollY / max;
    if (bar) bar.style.transform = `scaleX(${p})`;
    tx += (mx - tx) * 0.06;
    ty += (my - ty) * 0.06;
    if (world) world.style.transform = `rotateY(${tx * 14}deg) rotateX(${-ty * 7}deg)`;
    layers.forEach((el) => {
      const speed = Number(el.dataset.speed) || 0.2;
      el.style.transform = `translate3d(${tx * speed * 40}px, ${scrollY * speed * 0.35}px, 0)`;
    });
    if (route && traveler && routeLen) {
      const r = document.querySelector("[data-hero]")?.getBoundingClientRect();
      const hp = r ? Math.min(1, Math.max(0, -r.top / (r.height || 1))) : p;
      const pt = route.getPointAtLength(routeLen * hp);
      traveler.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);
    }
    requestAnimationFrame(tick);
  };
  tick();
})();
