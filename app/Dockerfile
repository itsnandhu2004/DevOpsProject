# Use the official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Expose port 3000 (this is where the app will run)
EXPOSE 3003

# Command to run the app
CMD ["node", "index.js"]

