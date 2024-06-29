# Full Stack JWT Authentication Example

This project demonstrates a full-stack application implementing JWT (JSON Web Token) authentication using React for the frontend and Express for the backend.

## Project Structure

The project is divided into two main directories:

- `frontend/`: Contains the React application.
- `backend/`: Contains the Express server and API.

### Frontend

The frontend is built with React and configured with Vite for an optimized development experience. It includes a simple UI for user sign-in and sign-up.

- **Technologies**: React, Axios, Vite
- **Key Components**:
  - `SignIn`: Handles user sign-in.
  - `SignUp`: Handles user registration.

### Backend

The backend is an Express server with routes for authentication and user management. It uses MongoDB (via Mongoose) for data storage and bcrypt for password hashing.

- **Technologies**: Node.js, Express, MongoDB, Mongoose, bcrypt, JWT
- **Key Features**:
  - JWT Authentication
  - Password Hashing
  - User Registration and Login

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Setup

1. Clone the repository:

```sh
git clone <repository-url>
```

2. Install dependencies for both frontend and backend:

# Frontend

```sh
cd frontend
npm install
```

# Backend

```sh
cd ../backend
npm install
```

3. Set up environment variables:

Navigate to backend/ and create a .env file with the following content:
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>

### Running the Application

1. Start the backend server:

```sh
   cd backend
   npm start
```

2. In a new terminal, start the frontend application:

```sh
   cd frontend
   npm run dev
```

The frontend should now be running on http://localhost:3000, and the backend on http://localhost:5000.

### Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or feature requests.

### License

This project is open source and available under the ISC License.

This README provides a basic overview of the project, including its structure, technologies used, setup instructions, and contribution guidelines. Adjust the <repository-url>, <your_mongodb_uri>, and <your_jwt_secret> placeholders with your specific details.
