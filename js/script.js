// Mengambil value input dari DOM
const usernameIn = document.getElementById("username");
const passwordIn = document.getElementById("password");

// Mengambil element button, untuk ditambahkan action click
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (usernameIn.value === "admin") {
    if (passwordIn.value === "admin1234") {
      alert("Berhasil login!");
      window.location.href = "/dashboard.html";
    } else {
      alert("Password salah! Silahkan cek lagi");
    }
  } else {
    alert("User tidak ditemukan! Silahkan regis");
  }
  console.log(usernameIn.value);
  console.log(passwordIn.value);
});
