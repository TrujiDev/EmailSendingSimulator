## Email Sending Simulator

This is a simple web application for simulating the process of sending emails. Users can input email details, including the recipient's email address, subject, and message, and simulate the email sending process. The application provides feedback on the form validation and the email sending simulation.

### Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Getting Started](#getting-started)
- [Form Validation](#form-validation)
- [Email Sending Simulation](#email-sending-simulation)
- [License](#license)

### Features

- User-friendly interface for email input and simulation.
- Real-time validation of email addresses and required fields.
- Visual feedback with error messages and a success message.
- Simulated email sending with a loading spinner.

### Usage

To use this Email Sending Simulator:

1. Fill out the recipient's email address, CC (carbon copy) if desired, subject, and message in the provided form.

2. The application will provide real-time feedback on the form's validation, enabling or disabling the "Send" button based on the completeness and correctness of the input.

3. When you click the "Send" button, the application will simulate the email sending process, displaying a loading spinner for 3 seconds.

4. After the simulation, a success message will appear, indicating that the email was sent successfully. The success message will disappear after 3 seconds.

5. You can reset the form by clicking the "Reset" button.

### Getting Started

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/TrujiDev/EmailSendingSimulator.git
   ```

2. Open the `index.html` file in your web browser.

3. Fill out the form and interact with the Email Sending Simulator.

### Form Validation

The application performs form validation as follows:

- Email Address:
  - Must be a valid email address.
  - Cannot be empty.
- CC (Carbon Copy) Field:
  - Optional but must be a valid email address if provided.
- Subject:
  - Cannot be empty.
- Message:
  - Cannot be empty.

Error messages will be displayed for invalid or empty fields.

### Email Sending Simulation

When you click the "Send" button:

- A loading spinner will be displayed for 3 seconds to simulate the email sending process.

- After the simulation, a success message will appear, indicating that the email was sent successfully. The message will disappear after 3 seconds.
