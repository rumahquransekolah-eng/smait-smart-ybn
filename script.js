// Navbar: beri latar saat halaman di-scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menu mobile
const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

function setMenu(open) {
  menu.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}
toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Panel SMART: klik / tekan Enter untuk membuka (berguna di HP)
const items = document.querySelectorAll(".smart__item");
function activate(target) {
  items.forEach((i) => i.classList.toggle("active", i === target));
}
items.forEach((item) => {
  item.addEventListener("click", () => activate(item));
  item.addEventListener("mouseenter", () => {
    if (window.matchMedia("(min-width: 821px)").matches) activate(item);
  });
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate(item);
    }
  });
});

// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();