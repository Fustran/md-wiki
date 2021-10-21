FROM node:alpine as build
WORKDIR /app
COPY . /app
#tests here?
RUN npm install
RUN npm run client:build

FROM nginx:latest 

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]