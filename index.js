let week = 0;

const plus = document.querySelector("#for-the-future");
const minus = document.querySelector("#for-the-past");
const tree = document.querySelector("#tree-img");

plus.addEventListener("click", function () {
  week++;
  document.querySelector("#current").textContent = week;

  if (week === 0) {
    tree.setAttribute("src", "./image/stage1.png");
  }

  if (week === 1) {
    tree.setAttribute("src", "./image/stage2.png");
  }
  if (week === 3) {
    tree.setAttribute("src", "./image/stage3.png");
  }
  if (week === 8) {
    tree.setAttribute("src", "./image/stage4.png");
  }
  if (week === 15) {
    tree.setAttribute("src", "./image/stage5.png");
  }
  if (week === 20) {
    tree.setAttribute("src", "./image/stage6.png");
  }
});
minus.addEventListener("click", function () {
  week--;
  document.querySelector("#current").textContent = week;

  if (week === 0) {
    tree.setAttribute("src", "./image/stage1.png");
  }

  if (week === 1) {
    tree.setAttribute("src", "./image/stage2.png");
  }
  if (week === 3) {
    tree.setAttribute("src", "./image/stage3.png");
  }
  if (week === 8) {
    tree.setAttribute("src", "./image/stage4.png");
  }
  if (week === 15) {
    tree.setAttribute("src", "./image/stage5.png");
  }
  if (week === 20) {
    tree.setAttribute("src", "./image/stage6.png");
  }
});
