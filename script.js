const rating = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");
const ratingButtons = document.querySelectorAll(".rate-score");
const submitButton = document.querySelector(".submit");
const err = document.querySelector(".err");
const score = document.querySelector(".final-score");

let selectedRating = 0;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    err.classList.remove("active");
    ratingButtons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");
    selectedRating = parseInt(button.value);
    // console.log(selectedRating);
  });
});

submitButton.addEventListener("click", () => {
  if (!selectedRating) {
    err.classList.add("active");
    return;
  }
  thankYou.classList.add("active");
  score.textContent = `You selected ${selectedRating} out of 5`;
  rating.classList.remove("active");
  rating.classList.add("hidden");
  selectedRating = 0;
});
