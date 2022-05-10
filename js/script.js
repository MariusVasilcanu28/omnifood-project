console.log("Hello World!");

const text = "abcd";
const h1 = document.querySelector(".heading-primary");
console.log(text);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = text;
//   h1.style.backgroundColor = "green";
//   h1.style.padding = "5rem";
//   h1.style.cursor = "pointer";
// });

// set current year
const yearElm = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
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
    // console.log(href);

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
    // !!!! observe in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroElm);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
