document.addEventListener("DOMContentLoaded", function () {
  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#subject");
  const inputMessage = document.querySelector("#message");
  const form = document.querySelector("#form");

  inputEmail.addEventListener("blur", validate);
  inputSubject.addEventListener("blur", validate);
  inputMessage.addEventListener("blur", validate);

  function validate(event) {
    if (event.target.value.trim() === "") {
      showError(`The ${event.target.id} field cannot be empty`, event.target.parentElement);
    } else {
      console.log("Not empty");
    }
  }

  function showError(msg, ref) {
    const error = document.createElement("P");
    error.textContent = msg;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    ref.appendChild(error);
  }
});
