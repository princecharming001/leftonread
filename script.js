// ============================================================
//  Orchid clone — interactions
// ============================================================

/* ---- Hero rotating word ---- */
(function rotateHeroWord() {
  const el = document.getElementById("rotator");
  if (!el) return;
  const words = [
    "closest friend",
    "biggest client",
    "next investor",
    "group chat",
    "oldest friend",
    "toughest contact",
  ];
  let i = 0;
  el.style.transition = "opacity .35s ease, transform .35s ease";
  setInterval(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
    setTimeout(() => {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.style.opacity = "1";
      el.style.transform = "none";
    }, 350);
  }, 2600);
})();

/* ---- Testimonial rotation ---- */
(function rotateTestimonials() {
  const quoteEl = document.getElementById("t-quote");
  const authorEl = document.getElementById("t-author");
  const avatarEl = document.getElementById("t-avatar");
  if (!quoteEl) return;
  const items = [
    {
      q: "“Osmo remembers what I promised everyone. I walk into every conversation knowing exactly where we left off.”",
      a: "– Maya",
    },
    {
      q: "“It tells me the tone to strike with each person, and why. I stopped second-guessing every message.”",
      a: "– Devin",
    },
    {
      q: "“The morning queue is the whole thing for me. Five minutes and I know who to reply to and what to say.”",
      a: "– Priya",
    },
  ];
  let i = 0;
  const els = [quoteEl, authorEl, avatarEl].filter(Boolean);
  setInterval(() => {
    els.forEach((e) => (e.style.opacity = "0"));
    setTimeout(() => {
      i = (i + 1) % items.length;
      quoteEl.textContent = items[i].q;
      authorEl.textContent = items[i].a;
      els.forEach((e) => (e.style.opacity = "1"));
    }, 500);
  }, 5000);
})();

/* ---- Scroll reveal ---- */
(function scrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  targets.forEach((t) => io.observe(t));
})();
