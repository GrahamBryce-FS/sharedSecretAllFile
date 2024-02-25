require("dotenv").config("./.env");


console.log(process.env.NODE_ENV_HOST)


const http = require("http")
const hostname = process.env.HOST_NAME
const port = process.env.NODE_ENV_HOST;
const secret = process.env.SECRET_KEY;
// grabbed from .env file



const fs = require("fs");
let directory_name = "./"
let filenames = fs.readdirSync(directory_name)
const server = http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader("Content-Type", "text/plain");
  f = "";
  filenames.forEach((file)=>{
    f = f +file+" \n";
  })
  res.end(f)
});


function performSecretOperation(condition) {
  if (condition) {
      console.log("Authenticated with secret key:", secret);
  } else {
      console.log("Operation failed.");
  }
}

// Call the function with a condition
performSecretOperation(true);

server.listen(port,hostname,()=>{})