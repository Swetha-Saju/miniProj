# User Authentication with Node.js, Express, and MongoDB

This is a Node.js backend application that handles user authentication using JSON Web Tokens (JWT) and MongoDB as the database. It provides APIs for user registration, login, user data retrieval, and logout.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. Clone this repository:

    ```
    https://github.com/g7vind/nodejs-login-register-authentication.git
    ```

2. Navigate to the project directory:

    ```
    cd nodejs-login-register-authentication
    ```

3. Install the dependencies:

    ```
    npm install
    ```

4. Create a `.env` file in the project root directory and add the following environment variables:

    ```
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret_key>
    PORT=<your_desired_port>
    ```

   Replace the placeholders with your actual values.

5. Start the server:

    ```
    npm run dev
    ```

   The server will start running on the specified port (or default to 3000 if not set).

## API Endpoints

### User Registration

- **URL:** `/v1/api/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "your-username",
    "email": "your-email@example.com",
    "password": "your-password",
    "firstName": "Your First Name",
    "lastName": "Your Last Name"
  }

### User Login

- **URL:** `/v1/api/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "your-email@example.com",
    "password": "your-password"
  }

### All User Retrival

- **URL:** `/v1/api/allusers`
- **Method:** `GET`

---

### User Logout

- **URL:** `/v1/api/logout`
- **Method:** `GET`
- **Authentication:** JWT token required (sent as a cookie named authToken)

---

### Dependencies

This project uses the following dependencies:

- **express:** Web application framework for Node.js
- **mongoose:** MongoDB object data modeling (ODM) library
- **bcrypt:** Library for hashing passwords
- **jsonwebtoken:** Library for generating and verifying JSON Web Tokens
- **cookie-parser:** Middleware for parsing cookies
- **cors:** Middleware for configuring Cross-Origin Resource Sharing (CORS)
- **dotenv:** Library for loading environment variables from a .env file

---

### Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

