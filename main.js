const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});
// <!--------------------------- Show Scroll Up ---------------->

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);
// <!--------------------------- Change Background Header ---------------->

const scrollHeader = () => {
  const header = document.getElementById("navbar");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-yellow-500");
  } else {
    header.classList.remove("border-b", "border-yellow-500");
  }
};
window.addEventListener("scroll", scrollHeader);

// <!--------------------------- Show Sections Link ---------------->

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((item) => {
    item.classList.remove("active");

    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};
window.addEventListener("scroll", activeLink);

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const successMsg = document.getElementById("successMsg");

mySubmit.addEventListener("click", () => {
  const email = myText.value.trim();

  if (email === '') {
 showMessage("❌ Email enter required", "error");
    return;
  }

  if (!isValidEmail(email)){
     showMessage("❌ Please enter email", "error");
    return;
  }
  console.log('Email Sent:', email)

  myText.value = '';
  showMessage("✅Subscribed successFully!", "success")})

  function showMessage(text, type){
    successMsg.textContent = text;
    successMsg.classList.remove('hidden');
    successMsg.className = type === "error" ? "mt-2 text-red-400 text-sm":"mt-2 text-green-300 text-sm";
    
    // ✅ Auto hide after 3 sec
    setTimeout(() => {
      successMsg.classList.add("hidden");
    }, 3000);
  }

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// <!--------------------------- Scroll Reveal Animation ---------------->
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});
sr.reveal(
  `.home_data, .about_top, .popular_top, .review_top,.review_swiper,.footer_icon,.footer_content,.copy_right`,
);
sr.reveal(`.home_image`, { delay: 500, scale: 0.5 });

sr.reveal(`.service_card, .popular_card `, { interval: 100 });
sr.reveal(`.about_left`, { delay: 1000, origin: "right" });
sr.reveal(`.about_item_i-content, .about_item_i_2-img`, { origin: "right" });
sr.reveal(`.about_item_2-content, .about_item_i-img`, { origin: "left" });
sr.reveal(`.review_left, .footer_floral`, { delay: 1000, origin: "left" });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const toggleBtn = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const html = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
  icon.className = 'ri-sun-line text-xl';
}

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');

  if (html.classList.contains('dark')) {
    icon.className = 'ri-sun-line text-xl';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.className = 'ri-moon-line text-xl';
    localStorage.setItem('theme', 'light');
  }
});

// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById('msg');
