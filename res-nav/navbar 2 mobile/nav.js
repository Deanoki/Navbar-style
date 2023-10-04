var buttons = document.querySelectorAll("li");
buttons.forEach((element) => {
  element.addEventListener("click", chng);
});
function chng() {
  buttons.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
