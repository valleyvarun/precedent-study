document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".label, .value, h1 a");
  elements.forEach((el) => {
    const hue = Math.floor(Math.random() * 360);
    el.style.color = `hsl(${hue}, 100%, 70%)`;
  });
});
