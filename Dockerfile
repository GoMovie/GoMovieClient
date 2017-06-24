FROM node:6.11
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm config set registry http://registry.cnpmjs.org \
  && npm install

# Bundle app source
COPY . /usr/src/app

# expose port
EXPOSE 8080

# usage: `docker run -it -p 8080:8080 -d {{imageid}}`
CMD [ "npm", "start" ]
