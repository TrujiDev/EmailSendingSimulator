document.addEventListener("DOMContentLoaded", function () {
  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#subject");
  const inputMessage = document.querySelector("#message");
  const form = document.querySelector("#form");
  const btnSubmit = document.querySelector('#form button[type="submit"]');
  const btnReset = document.querySelector('#form button[type="Reset"]');
  const spinner = document.querySelector("#spinner");

  const email = {
    email: '',
    subject: '',
    message: ''
  }

  inputEmail.addEventListener("input", validate);
  inputSubject.addEventListener("input", validate);
  inputMessage.addEventListener("input", validate);
  spinner.addEventListener("submit", sendEmail);

  btnReset.addEventListener("click", function (event) {
    event.preventDefault();

    email.email = '';
    email.subject = '';
    email.message = '';

    form.reset();
    checkEmail();
  });

  function sendEmail(event) {
    event.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");
  }

  function validate(event) {
    if (event.target.value.trim() === "") {
      showError(`The ${event.target.id} field cannot be empty`, event.target.parentElement);
      email[event.target.name] = '';
      checkEmail();
      return;
    }

    if (event.target.id === "email" && !emailValidate(event.target.value)) {
      showError("The email is invalid", event.target.parentElement);
      email[event.target.name] = '';
      checkEmail();
      return;
    }

    cleanAlert(event.target.parentElement);

    email[event.target.name] = event.target.value.trim().toLowerCase();

    checkEmail();
  }

  function showError(msg, ref) {
    cleanAlert(ref);

    const error = document.createElement("P");
    error.textContent = msg;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center", "alert");

    ref.appendChild(error);
  }

  function cleanAlert(ref) {
    const alert = ref.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }

  function emailValidate(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const result = regex.test(email);
    return result;
  }

  function checkEmail() {
    if (Object.values(email).includes('')) {
      btnSubmit.classList.add('opacity-50');
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove('opacity-50');
    btnSubmit.disabled = false;
  }
});
