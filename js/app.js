// This event is triggered when the HTML document is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const inputEmail = document.querySelector("#email");
  const inputCc = document.querySelector("#cc");
  const inputSubject = document.querySelector("#subject");
  const inputMessage = document.querySelector("#message");
  const form = document.querySelector("#form");
  const btnSubmit = document.querySelector('#form button[type="submit"]');
  const btnReset = document.querySelector('#form button[type="reset"]');
  const spinner = document.querySelector("#spinner");

  // Object to store form values
  const email = {
    email: "",
    subject: "",
    message: "",
  };

  // Event listeners
  inputEmail.addEventListener("input", validate);
  inputCc.addEventListener("input", validateCC);
  inputSubject.addEventListener("input", validate);
  inputMessage.addEventListener("input", validate);
  form.addEventListener("submit", sendEmail);
  btnReset.addEventListener("click", function (event) {
    event.preventDefault();
    formReset();
  });

  // Function to validate the CC field
  function validateCC(event) {
    // Check if the entered value is not empty and not a valid email address.
    if (
      event.target.value.trim() !== "" &&
      !emailValidate(event.target.value.trim())
    ) {
      showError("The CC email is invalid", event.target.parentElement);
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
    cleanAlert(event.target.parentElement);
  }

  // Function to simulate sending an email
  function sendEmail(event) {
    event.preventDefault();

    // Show a spinner for 3 seconds.
    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      // After 3 seconds, hide the spinner and show a success message.
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");

      formReset();

      // Create a success message and display it in the form.
      const successAlert = document.createElement("P");
      successAlert.classList.add(
        "bg-green-500",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase"
      );
      successAlert.textContent = "Message sent successfully";

      form.appendChild(successAlert);

      setTimeout(() => {
        // After 3 seconds, remove the success message.
        successAlert.remove();
      }, 3000);
    }, 3000);
  }

  // Function to validate form fields
  function validate(event) {
    // Check if the field value is empty and display an error message.
    if (event.target.value.trim() === "") {
      showError(
        `The ${event.target.id} field cannot be empty`,
        event.target.parentElement
      );
      email[event.target.name] = "";
      checkEmail();
      return;
    }

    // Check if the email field is not valid and display an error message.
    if (event.target.id === "email" && !emailValidate(event.target.value)) {
      showError("The email is invalid", event.target.parentElement);
      email[event.target.name] = "";
      checkEmail();
      return;
    }

    cleanAlert(event.target.parentElement);

    // Store the field value in the 'email' object.
    email[event.target.name] = event.target.value.trim().toLowerCase();

    // Check if submit buttons can be enabled.
    checkEmail();
  }

  // Function to display an error message
  function showError(msg, ref) {
    cleanAlert(ref);

    const error = document.createElement("P");
    error.textContent = msg;
    error.classList.add(
      "bg-red-600",
      "text-white",
      "p-2",
      "text-center",
      "alert"
    );

    ref.appendChild(error);
  }

  // Function to remove error messages
  function cleanAlert(ref) {
    const alert = ref.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }

  // Function to validate an email address
  function emailValidate(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+/;
    const result = regex.test(email);
    return result;
  }

  // Function to check if all required fields are filled
  function checkEmail() {
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  // Function to reset the form
  function formReset() {
    email.email = "";
    email.subject = "";
    email.message = "";

    form.reset();
    checkEmail();
  }
});
