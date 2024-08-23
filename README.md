# Custom Onboarding Flow

This project is a full-stack application designed as a custom onboarding flow for users. It includes a frontend built with React and a backend API powered by Node.js and Express, with PostgreSQL as the database.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed on your machine.
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed if you want to run the project without Docker.


### Installation

1. **Clone the Repository:**

   ```bash
  - git clone https://github.com/nitimk/custom-onboarding-flow.git
  - cd custom-onboarding-flow

2. **Running with Docker**
  - Backend: docker run -d -p 5000:5000 nitimk/custom-onboarding-backend:latest
  - Frontend: docker run -d -p 8000:8000 nitimk/custom-onboarding-frontend:latest
  - Access Application : Frontend - http://localhost:8000, Backend - http://localhost:5000/api

3. **Running locally without Docker**
  - Setup PostgesSQL database
  - update your `server/config/database.js` files with your PostgresSQL connection details

4. **Running Backend**
  - Backend
    *cd server
    *npm install
    *npm run dev

5. **Running Frontend**
   - Frontend
    *cd client
    *npm install
    *npm run dev

5. **Testing**
   - Backend
     *cd server
     *npm test

   - Frontend
     *cd client
     *npm test

   

   

