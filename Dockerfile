#start with building our frontend in a node image
FROM node:16-alpine3.12

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run client:build

RUN apk update \
&& apk add --no-cache openrc nginx \
&& mkdir -p /run/openrc \
&& touch /run/openrc/softlevel 

#copy over our nginx config and built website
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN cp -r ./build/. /var/www/html/

ENTRYPOINT ["sh", "-c", "rc-status; rc-service nginx start; npm run backend:start"]

