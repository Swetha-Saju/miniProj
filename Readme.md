# Dyslexia Accessibility Tool

## Project Overview

This web application is designed to improve the online reading experience for users with dyslexia. It offers a personalized interface that adapts to individual needs based on a diagnostic quiz and user preferences. The application features customizable text display options, readability tools, and an integrated AI assistant powered by Gemini.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/repository_name.git
   ```

2. Navigate to the project directory:
   ```
   cd repository_name
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the project root directory and add the following environment variables:
   ```
   MONGO_URI=<your_mongodb_connection_string>
   PORT=<your_desired_port>
   API_BASE_URL=<your_base_url>
   GEMINI_API_KEY=<your_gemini_api_key>
   ```
   Replace the placeholders with your actual values.

5. Start the server:
   ```
   npm run dev
   ```
   The server will start running on the specified port (or default to 3000 if not set).


# API Documentation

## Authentication API

### User Registration

- **URL:** `/v1/api/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "your-username",
    "email": "your-email@example.com",
    "password": "your-password",
    "phone": "your-phone-number",
    "fullname": "Your Full Name",
    "gender": "your-gender",
    "dob": "your-date-of-birth",
    "city": "your-city",
    "state": "your-state",
    "country": "your-country",
    "terms": true
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User created successfully",
    "isQuizCompleted": false
  }
  ```

### User Login

- **URL:** `/v1/api/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "your-username",
    "password": "your-password"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Sign-in successful",
    "isQuizCompleted": false
  }
  ```

### User Logout

- **URL:** `/v1/api/logout`
- **Method:** `GET`
- **Authentication:** Session-based authentication required

## User Data API

### Save User Quiz Score

- **URL:** `/v1/api/score`
- **Method:** `POST`
- **Authentication:** Session-based authentication required
- **Request Body:**
  ```json
  {
    "normalScore": 80,
    "dyslexicIndicatorScore": 60
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Score saved successfully"
  }
  ```

## Preferences API

### Get User Preferences

- **URL:** `/v1/api/preference/load`
- **Method:** `GET`
- **Authentication:** Session-based authentication required
- **Response:**
  ```json
  {
    "success": true,
    "preferences": {
      "font": "preferred-font",
      "ruler": true,
      "spacing": "preferred-spacing",
      "lineHeight": "preferred-line-height",
      "readAloud": true
    }
  }
  ```

### Save User Preferences

- **URL:** `/v1/api/preference/save`
- **Method:** `POST`
- **Authentication:** Session-based authentication required
- **Request Body:**
  ```json
  {
    "font": "preferred-font",
    "ruler": true,
    "spacing": "preferred-spacing",
    "lineHeight": "preferred-line-height",
    "readAloud": true
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Preference saved successfully"
  }
  ```

## Admin API

### Get All Users (Admin)

- **URL:** `/v1/api/admin/details`
- **Method:** `GET`
- **Authentication:** Session-based authentication required with admin role
- **Response:**
  ```json
  {
    "success": true,
    "users": [
      {
        "username": "user1",
        "email": "user1@example.com",
        "fullname": "User One",
        "role": "user"
      }
    ]
  }
  ```

## Page Routes

These routes render EJS templates rather than returning JSON:

### Login Page
- **URL:** `/`
- **Method:** `GET`

### Registration Page
- **URL:** `/register`
- **Method:** `GET`

### Dashboard Page
- **URL:** `/dashboard`
- **Method:** `GET`
- **Authentication:** Session-based authentication required

### Quiz Page
- **URL:** `/quiz`
- **Method:** `GET`
- **Authentication:** Session-based authentication required

### Admin Dashboard Page
- **URL:** `/admin`
- **Method:** `GET`
- **Authentication:** Session-based authentication required with admin role

### Dependencies

This project uses the following dependencies:

- **express:** Web application framework for Node.js
- **mongoose:** MongoDB object data modeling (ODM) library
- **bcryptjs:** Library for hashing passwords
- **cookie-parser:** Middleware for parsing cookies
- **cors:** Middleware for configuring Cross-Origin Resource Sharing (CORS)
- **dotenv:** Library for loading environment variables from a .env file
- **ejs:** Embedded JavaScript templating engine
- **express-session:** Session middleware for Express
- **morgan:** HTTP request logger middleware

---

### Development Dependencies

- **nodemon:** Tool that helps develop Node.js applications by automatically restarting the application when file changes are detected

### Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

