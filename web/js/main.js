(function () {
  "use strict";

  // Mobile navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Portfolio filter
  const filterBar = document.querySelector(".filter-bar");
  if (filterBar) {
    const filterButtons = filterBar.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const filter = btn.getAttribute("data-filter");

        filterButtons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");

        portfolioItems.forEach(function (item) {
          if (filter === "all") {
            item.classList.remove("hidden");
          } else if (item.classList.contains(filter)) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      });
    });

    if (filterButtons.length) {
      filterButtons[0].classList.add("active");
    }
  }

  // Contact form handling
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const successMsg = contactForm.querySelector(".form-success");
      if (successMsg) {
        successMsg.classList.add("show");
        contactForm.reset();
        setTimeout(function () {
          successMsg.classList.remove("show");
        }, 5000);
      }
    });
  }

  // Header shadow on scroll
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }
})();
