const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});

//nav fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
};
const images = document.querySelectorAll(".group img");

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    image.parentNode.classList.add("hover");
  });

  image.addEventListener("mouseleave", () => {
    image.parentNode.classList.remove("hover");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const typingText = document.getElementById("typing-text");
  const texts = ["semoga anda senang.", "dan tertarik pada saya."];
  let textIndex = 0;
  let charIndex = 0;
  let isAdding = true;

  function type() {
    const currentText = texts[textIndex];

    if (isAdding) {
      if (charIndex < currentText.length) {
        typingText.innerHTML += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 150); // kecepatan mengetik
      } else {
        isAdding = false;
        setTimeout(type, 1000); // jeda sebelum menghapus
      }
    } else {
      if (charIndex > 0) {
        typingText.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 150); // kecepatan menghapus
      } else {
        isAdding = true;
        textIndex = (textIndex + 1) % texts.length; // ganti teks
        setTimeout(type, 500); // jeda sebelum mengetik lagi
      }
    }
  }

  type();
});

//klik luar
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navmenu) {
    hamburger.classList.remove("hamburger-active");
    navmenu.classList.add("hidden");
  }
});

//dark toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
///sjdhvsvsvshsj=======================
