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
      showError();
    } else {
      console.log("Not empty");
    }
  }

  function showError() {
    const error = document.createElement("P");
    error.textContent = "There was an error";
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    form.appendChild(error);
  }
});
