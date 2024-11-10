FROM ubuntu:24.04
LABEL maintainer="Peter Rogendo"

FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built app with a lightweight server
FROM nginx:alpine

# Copy built React app from the previous stage to NGINX's default public folder
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80
EXPOSE 80

# Start NGINX when the container is started
CMD ["nginx", "-g", "daemon off;"]
