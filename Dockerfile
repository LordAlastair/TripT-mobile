FROM node:4.4
ENV DOCKER_ENV true
ENV NODE_ENV production
RUN npm install -g ionic cordova gulp bower http-server
VOLUME /app
WORKDIR /app
EXPOSE 8100
