AOS.init({
  once: true,
});

const scriptURL = "https://script.google.com/macros/s/AKfycbzhtnEBW5gbDyllOn_uZMCo3XVI_N5cDMMIqhGPeCI8kLBaz8HyDmBw0gBYnqPIcXUb/exec";
const form = document.forms["hanif-contact-form"];
const btnSubmit = document.querySelector(".btn-sbmt");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".myAlert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnSubmit.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnSubmit.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
