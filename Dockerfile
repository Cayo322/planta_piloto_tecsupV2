# Use an official Node runtime as a parent image
FROM node:20.9.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

RUN npm install -g npm@10.8.1

# Install dependencies
RUN npm install --force

# Copy all other source code to the working directory
COPY . .

# Build your app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
