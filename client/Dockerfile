# Use an official Node.js image as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight web server to serve the build files
RUN npm install -g serve

# Expose the port the frontend server runs on
EXPOSE 3000

# Start the frontend server
CMD ["serve", "-s", "build"]
