# Use an official Node runtime as a parent image
FROM node:16.3.0-alpine
# Set the working directory to /app
WORKDIR /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm install --legacy-peer-deps
# Copy the rest of the application code to the container
COPY . .
# Build the production version of the application
RUN npm run build
# Expose port 80 to the outside world
EXPOSE 3000
# Run the command to start the server
CMD ["npm", "start"]
