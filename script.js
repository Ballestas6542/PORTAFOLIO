const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const colorBtn = document.getElementById("colorBtn");

menuBtn.addEventListener("click", () => {
  navbar.querySelector("ul").classList.toggle("active");
});

colorBtn.addEventListener("click", () => {
  const bgColor = getRandomColor();
  const textColor = getContrastColor(bgColor);
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getContrastColor(hexcolor) {
  hexcolor = hexcolor.replace("#", "");
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#FFFFFF";
}
