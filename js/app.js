document.addEventListener("DOMContentLoaded", function () {
  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#subject");
  const inputMessage = document.querySelector("#message");

  inputEmail.addEventListener("blur", validate);
  inputSubject.addEventListener("blur", validate);
  inputMessage.addEventListener("blur", validate);

  function validate(event) {
    if (event.target.value.trim() === "") {
      showError(`The ${event.target.id} field cannot be empty`, event.target.parentElement);
      return;
    }

    if (event.target.id === "email" && !emailValidate(event.target.value)) {
      showError("The email is invalid", event.target.parentElement);
      return;
    }

    cleanAlert(event.target.parentElement);
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
});
