FROM node:4.4
ENV DOCKER_ENV true
ENV NODE_ENV production
RUN npm install -g bower
VOLUME /app
WORKDIR /app
EXPOSE 8100
