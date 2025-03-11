# use node js version 20 as base image
FROM node:20

# set the working directory of this container
WORKDIR /app

# copy all files into the container at the working directoy
COPY . .

# install all npm packages specified in package.json
RUN npm install

# expose the port 3000 for sending requests to the API
EXPOSE 3000

# run the API in development mode
CMD [ "npm", "run", "start:dev" ]