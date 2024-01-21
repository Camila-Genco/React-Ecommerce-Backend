# E-Commerce Backend 🛒🛍️💳
> An app build with Node.js

This repository contains the backend of a fullstack E-commerce application built using React, Tailwind CSS, PostgreSQL, Express.js, Sequelize and Node.js. The complete project follows a decoupled architecture and includes both the frontend and backend components, creating a responsive and fully-functional food E-commerce website.

For the frontend code and documentation, please refer to the [E-Commerce Frontend Repository](https://github.com/Camila-Genco/React-Ecommerce-Frontend.git). The frontend is responsible for the user interface and user experience.

### Features
- Robust API endpoints for frontend communication.
- Data schema validation using Joi for robust input validation and structure definition.
- Error handling with Boom for consistent and informative error responses.
- Secure user authentication and authorization using 
  - Password hashing with bcrypt.
  - Tokens with JWT (JSON Web Tokens).
  - Passport.js strategies.
- Efficient data processing and storage using PostgreSQL with Sequelize as the ORM.
- Database containerization using Docker for easy deployment and scalability.
- Seamless integration with the frontend for a cohesive user experience.

## Endpoints
///

  ### Project Overview
- **Backend (Node.js & Express):** Handles data retrieval from PostgreSQL and serves API endpoints.
- **Frontend (React):** Provides a dynamic and responsive user interface styled with Tailwind CSS for a smooth browsing experience.
- **Database (PosgreSQL)**: Stores product information, user data, and orders details.
- **Containerization (Docker):** The application can be run in Docker containers for consistency across different environments.

### Project Structure
///
  
### Dependencies
- [Express](https://www.npmjs.com/package/express)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [node-postgres](https://node-postgres.com/)
- [JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken)
- [Passport](https://www.npmjs.com/package/passport)
- [passport-jwt](https://www.npmjs.com/package/passport-jwt)
- [passport-local](https://www.npmjs.com/package/passport-local)
- [Joi](https://www.npmjs.com/package/joi)
- [Boom](https://www.npmjs.com/package/@hapi/boom)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [docker-compose](https://www.npmjs.com/package/docker-compose)

## Getting Started

### Prerequisites
- Node.js installed
- npm (Node Package Manager) installed
- Docker installed (if you prefer to run the application in a container)

1. Clone the repository:

   ```bash
   git clone https://github.com/Camila-Genco/React-Ecommerce-Backend.git your-project-name
   
2. Navigate to the project directory:

   ```bash
   cd your-project-name

3. Install dependencies:

   ```bash
   npm install

4. Set up the required environment variables.
   - Locate the `.env.example` file in the root directory of the project.
   - Create a copy of this file and name it `.env`.

6. Start the application:

   ```bash
   npm start
