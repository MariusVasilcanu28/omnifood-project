// set current year
const yearElm = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElm.textContent = currentYear;

// make mobile nav work
const headerElm = document.querySelector(".header");
const btnNavElm = document.querySelector(".btn-mobile-nav");

btnNavElm.addEventListener("click", function () {
  headerElm.classList.toggle("nav-open");
});

// smooth scrolling animation for safari (just in case)
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");

    // scroll to TOP
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to "page links"
    if (href !== "#" && href.startsWith("#")) {
      const sectionElm = document.querySelector(href);
      sectionElm.scrollIntoView({ behavior: "smooth" });
    }

    // auto close nav after nav link
    if (link.classList.contains("main-nav-link")) {
      headerElm.classList.toggle("nav-open");
    }
  });
});

// sticky navigation
const sectionHeroElm = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, // where El should be appearing
    threshold: 0, // as soon as
    rootMargin: "-80px", // fixing root margin
  }
);
obs.observe(sectionHeroElm);