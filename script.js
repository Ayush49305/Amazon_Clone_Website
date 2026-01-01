// Back to top
  document.querySelector(".foot-panel1").onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

// Dropdown in ALL icon

  const allMenu = document.querySelector(".panel-all");
  const dropdown = document.querySelector(".dropdown");

  allMenu.addEventListener("mouseenter", () => {
    dropdown.style.display = "block";
  });

  allMenu.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
  });

//For search in search bar
  document.getElementsByClassName("search-icon").onclick = function () {
    const value = document.getElementsByClassName("search-input").value;
    alert("You searched for: " + value);
  };

//change Hero image in every 3 sec.
  const heroImages = [
  "hero_image1.jpg",
  "hero_image2.jpg",
  "hero_image3.jpg",
  "hero_image4.jpg",
  "hero_image5.jpg"
];

let currentIndex = 0;
const heroSection = document.querySelector(".hero-section");

setInterval(() => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  heroSection.style.backgroundImage = `url("${heroImages[currentIndex]}")`;
}, 3000);

//Clickable discover more icon

document.querySelector(".explore-btn1").addEventListener("click", () => {
  alert("Redirecting to Holiday Gifts");
});

document.querySelector(".explore-btn2").addEventListener("click", () => {
  alert("Redirecting to Electronics devices");
});

document.querySelector(".explore-btn3").addEventListener("click", () => {
  alert("Redirecting to Shop for your Home");
});

document.querySelector(".explore-btn4").addEventListener("click", () => {
  alert("Redirecting to Refresh your space");
});





