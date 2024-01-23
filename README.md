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
### Products
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/products | To retrieve all products |
| GET | /api/v1/products/:id | To retrieve details of a single product |
| POST | /api/v1/products | To create a new product |
| PATCH | /api/v1/products/:id | To edit the details of a single product |
| DELETE | /api/v1/products/:id | To delete a single product |

### Categories
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/categories | To retrieve all categories |
| GET | /api/v1/categories/:id | To retrieve details of a single category |
| POST | /api/v1/categories | To create a new category |
| PATCH | /api/v1/categories/:id | To edit the details of a single category |
| DELETE | /api/v1/categories/:id | To delete a single category |

### Users
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/users | To retrieve all users |
| GET | /api/v1/users/:id | To retrieve details of a single user |
| POST | /api/v1/users | To sign up a new user account |
| PATCH | /api/v1/users/:id | To edit the details of a single user |
| DELETE | /api/v1/users/:id | To delete a single user |

### Orders
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/orders | To retrieve all orders |
| GET | /api/v1/orders/:id | To retrieve details of a single order |
| POST | /api/v1/orders | To create a new order and add items to it |
| PATCH | /api/v1/orders/:id | To edit the details of a single order |
| DELETE | /api/v1/orders/:id | To delete a single order |

### Auth
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /api/v1/auth/login | To login an existing user account |

### Profile
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/profile/my-orders | Get orders by logged user |

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
