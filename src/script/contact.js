document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero .con");
  let currentIndex = 0;
  let isFirstSlideDisplayed = false; // Flag to track if the initial slide has been displayed

  // Select the logo-box element

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
        if (isFirstSlideDisplayed || i !== 0) {
          slide.classList.add("slide-in"); // Add class to trigger animation for slides other than the first one or if the initial slide has been displayed
          slide.classList.remove("slide-out"); // Remove class to reset animation
        }
      } else if (i === currentIndex) {
        slide.classList.add("slide-out"); // Add class to trigger slide-out animation for the current slide
        slide.classList.remove("slide-in"); // Remove class to reset slide-in animation
      } else {
        slide.style.display = "none";
        slide.classList.remove("slide-out"); // Remove class to reset slide-out animation
        slide.classList.remove("slide-in"); // Remove class to reset slide-in animation
      }
    });
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0; // Reset index to loop back to the second slide
      isFirstSlideDisplayed = true; // Set the flag to true after the initial slide has been displayed
    }
    showSlide(currentIndex);
  }

  // Initial slide display after a delay
  setTimeout(function () {
    showSlide(0); // Display the first slide without animation
    // Start automatic sliding after the initial display
    setInterval(nextSlide, 7000); // Change slide every 7 seconds
  }, 1000); // Wait for 1 second (1000 milliseconds) before displaying the first slide
});