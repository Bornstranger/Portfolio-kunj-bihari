window.addEventListener("load", () => {
  const card = document.getElementById("card");

  setTimeout(() => {
    card.classList.add("flipped");
  }, 1500);
});

const profileImg = document.querySelector(".pic");
const tiltContainer = document.querySelector(".pic-contain");
const tiltInner = document.querySelector(".tilt");

profileImg.addEventListener("mousemove", (e) => {
  const rect = profileImg.getBoundingClientRect();
  const x = e.clientX - rect.left; // mouse X within image
  const y = e.clientY - rect.top; // mouse Y within image

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 10;
  const rotateY = (x - centerX) / 10;

  tiltInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  profileImg.style.transform = `scale(1.05)`;
});

tiltContainer.addEventListener("mouseleave", () => {
  tiltInner.style.transform = `rotateX(0) rotateY(0)`;
  profileImg.style.transform = `scale(1)`; // reset zoom
});
