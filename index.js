const joinButtonEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");
const containerEl = document.querySelector(".container");
const closeIconEl = document.querySelector(".close-icon");

joinButtonEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  popupContainerEl.classList.add("active");
  containerEl.classList.remove("active");
});
