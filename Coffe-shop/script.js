/////////////////////////////////////////
// Current Year
const currentYear = new Date().getFullYear();
const year = document.querySelector(".year");
year.textContent = currentYear;

/////////////////////////////////////////
// Mobile Navigation
const headerEl = document.querySelector(".main-header");
const navMobileBtn = document.querySelector(".btn-mobile-nav");
navMobileBtn.addEventListener("click", () =>
  headerEl.classList.toggle("nav-open")
);

///////////////////////////////////////
// Smoothing Scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    if (href === "#")
      scrollTo({
        top: 20,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //  Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});
///////////////////////////////////////
// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) document.body.classList.add("sticky");
    if (entry.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
