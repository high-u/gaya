# FROM node:lts-slim
FROM node:lts-alpine3.12
COPY server/ /server/
WORKDIR /server
RUN pwd
RUN ls -la
RUN npm i
CMD ["npm", "run", "start"]
# CMD ["tail", "-f", "/dev/null"]
