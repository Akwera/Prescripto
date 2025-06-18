FROM node:18-alpine AS build
#Create the /app directory in the image (if it doesn’t already exist),

#Change the current directory to /app,

#And then copy everything from your build context (usually your project folder) into that /app directory.

#Think of it as telling Docker: “From here on out, pretend you're working inside /app.”

#If your app structure changes or you prefer a different folder name (like /usr/src/app), you can totally adjust that — just make sure the paths match in all related commands.
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
