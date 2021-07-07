const hamberger = document.querySelector(".hamberger");

const navlist = document.querySelector(".navlist");
hamberger.addEventListener("click", () => {
  navlist.classList.toggle("show");
});
console.log(navlist);
