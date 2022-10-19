// Mengambil element yg mau dihide
const titleDashboard = document.getElementById("title-dashboard");
// const titleDashboard = document.getElementsByClassName("dashboard")[0];
// const titleDashboard = document.getElementsByTagName("h1")[0];
// const titleDashboard = document.querySelector("h1"); //by tag name
// const titleDashboard = document.querySelector(".dashboard"); //by class name
// const titleDashboard = document.querySelector("#title-dashboard"); //by id name

const btnShow = document.getElementById("show");

btnShow.addEventListener("click", function (e) {
  e.preventDefault();
  if (titleDashboard.classList.contains("hidden")) {
    titleDashboard.classList.remove("hidden");
    btnShow.innerHTML = "Hide";
  } else {
    titleDashboard.classList.add("hidden");
    btnShow.innerHTML = "Show";
  }

  console.log(titleDashboard);
});
