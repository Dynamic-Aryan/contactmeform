# Contact Me Backend By Aryan Pachchigar
-[Deployed](https://contactmeform.onrender.com/)
This is a simple backend application for a "Contact Me" form. It accepts user input such as first name, last name, email address, phone number, and a message, and sends the information to a specified email address using Nodemailer.

---

## Features
- Accepts form data (firstname, lastname, email, phone, message) via a POST request.
- Validates email addresses to ensure correctness.
- Sends the message to a specified recipient's email address.
- Includes basic error handling for missing or invalid fields.

---

## Project Structure
```plaintext
contact-me-backend/
├── package.json         # Project metadata and dependencies
├── server.js            # Entry point of the application
├── .env                 # Environment variables for sensitive data
└── routes/
    └── contact.js       # Logic for handling contact form submissions
```

---

## Prerequisites

Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd contact-me-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```plaintext
   EMAIL=your-email@gmail.com
   EMAIL_PASSWORD=your-email-password
   
   ```
   Replace `your-email@gmail.com` and `your-email-password` with your Gmail credentials. 

   > **Note:** For Gmail accounts, ensure you enable "App Passwords" in your account settings if two-factor authentication is enabled.

---

## Usage

1. Start the server:
   ```bash
   node server.js
   ```

2. The server will run on `http://localhost:5000` by default. You can test the API using tools like [Postman](https://www.postman.com/) or `curl`.

3. Send a POST request to the following endpoint:
   ```
   POST /api/contact
   ```
   
   ### Request Body Example:
   ```json
   {
       "firstname": "John",
       "lastname": "Doe",
       "email": "john.doe@example.com",
       "phone": "1234567890",
       "message": "Hello, this is a test message!"
   }
   ```

4. If successful, you will receive a JSON response:
   ```json
   {
       "success": "Message sent successfully!"
   }
   ```

---

## Project Details

### Dependencies
- **Express**: Web framework for Node.js.
- **Body-Parser**: Parses incoming request bodies in a middleware.
- **Nodemailer**: Sends emails easily from Node.js applications.
- **dotenv**: Loads environment variables from a `.env` file.

### Scripts
- `start`: Starts the application using Node.js.

---

## Security Considerations

1. **Environment Variables**:
   - Use the `.env` file to store sensitive information like email credentials.
   - Avoid hardcoding sensitive data in the source code.

2. **Validation**:
   - Validates email addresses to ensure they are correctly formatted.
   - Checks that all required fields are present in the request body.

3. **Rate Limiting**:
   - Consider implementing rate-limiting middleware (e.g., `express-rate-limit`) to prevent abuse.

4. **CAPTCHA**:
   - Add CAPTCHA (e.g., Google reCAPTCHA) to protect against bot attacks.

---

## Future Enhancements

- Add CORS middleware to allow integration with frontend applications.
- Implement a database to store contact messages for future reference.
- Add unit and integration tests for better reliability.
- Deploy the application on platforms like Heroku, Render, or AWS.

---


## Contributing
If you would like to contribute to this project, feel free to open an issue or submit a pull request.

---



