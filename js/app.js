document.addEventListener("DOMContentLoaded", function () {
  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#subject");
  const inputMessage = document.querySelector("#message");

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

    console.log(error);
  }
});
