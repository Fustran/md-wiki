#start with building our frontend in a node image
FROM node:14-alpine

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run client:build

RUN apk update
RUN apk add nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY /app/build /usr/share/nginx/html
#copy over our nginx config and built website

# RUN npm run backend:start 

# CMD ["nginx", "-g", "daemon off;"]
# CMD [ "npm", "run", "backend:start"]

