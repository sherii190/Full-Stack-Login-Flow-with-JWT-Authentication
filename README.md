## Full Stack Login Flow With JWT Authentication

This project is a complete authentication system implemented using Node.js, Next.js, JWT, Tailwind CSS, and MongoDB. It includes user registration, login, token generation, and secure route protection using JWT. The project is organized into two main directories: client for the Next.js frontend and server for the Node.js backend.

## Features

- User registration with password hashing and salting.
- User login with JWT token generation.
- Secure route protection on the client.
- A complete Next.js frontend with Tailwind CSS.
- A Node.js backend that communicates with a MongoDB database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- MongoDB (Make sure it's up and running)
- npm or yarn

Getting Started

1. Clone the repository:

   git clone https://github.com/sherii190/Full-Stack-Login-Flow-with-JWT-Authentication.git

2. Change into the project directory:

   cd Full-Stack-Login-Flow-with-JWT-Authentication

3. Install dependencies for both the client and server:

   cd client
   npm install
   cd ../server
   npm install

## Project Structure

The project is organized into two main directories:

- client: Contains the Next.js frontend.
- server: Contains the Node.js backend.


## Configuration

Before running the application, you need to configure it. Create a .env file in both the client and server directories to specify environment variables. Sample environment variables are provided in .env.example files in both directories.

## Usage

To start the development servers for the client and server:

1. In the client directory:

   cd client
   npm run dev

2. In the server directory:

   cd server
   npm start

Visit http://localhost:3000 in your browser to access the application.

## Testing

To run tests, use the following commands in the respective directories:

- Client tests: Run npm test in the client directory.
- Server tests: Run npm test in the server directory.

## Deployment

Follow best practices for deploying Next.js and Node.js applications to a production environment. Make sure to configure the necessary environment variables.
