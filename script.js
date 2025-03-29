document.addEventListener("DOMContentLoaded", () => {
  const ratingBtns = document.querySelectorAll(".rating-btn");
  const sumbitBtn = document.querySelector(".submit-btn");
  const ratingBox = document.querySelector(".selected-rating");
  const ratingSection = document.querySelector(".card");
  const thankyouCard = document.querySelector(".thank-you-state");

  let selectedRating = null;

  ratingBtns.forEach((button) => {
    button.addEventListener("click", () => {
      ratingBtns.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");

      selectedRating = button.textContent;
    });
  });

  sumbitBtn.addEventListener("click", () => {
    if (selectedRating) {
      ratingBox.textContent = `You selected ${selectedRating} out of 5`;

      ratingSection.style.display = "none";
      thankyouCard.style.display = "flex";

      setTimeout(() => {
        location.reload(); // reloads the page after 3s
      }, 3000);
    } else {
      alert("Please select a rating before submitting");
    }
  });
});
