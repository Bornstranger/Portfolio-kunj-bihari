window.addEventListener("load", () => {
  const card = document.getElementById("card");

  setTimeout(() => {
    card.classList.add("flipped");
  }, 1500);
});
