# Use Node.js LTS base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Nuxt.js app
RUN npm run build

# Expose port Nuxt uses
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
