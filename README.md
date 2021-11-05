## md-wiki
Simple website that allows the reading, writing, and storing of articles.

### Running

`npm i`  
`npm run start` to run both the backend server and frontend.  

Website will be viewable on [http://localhost:3000](http://localhost:3000).  

### Tests

`npm run client:test` to test react frontend.  
`npm run backend:test` to test the backend.  

### CircleCI

Uses the CircleCI Local CLI. For instructions on installing, [read here.](https://circleci.com/docs/2.0/local-cli/)  

`circleci local execute` to execute the test / build job.  

### Docker

`docker build -t md-wiki:2019 .` to build the image.  
`docker run -ti -p 8080:8080 md-wiki:2019` to run the image.
