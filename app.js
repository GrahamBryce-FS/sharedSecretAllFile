require("dotenv").config("./.env");


console.log(process.env.NODE_ENV)



const http = require("http")
const hostname = "127.0.0.1"
const port = 3000;


const secretKey = "myHardcodedSecretKey";
// Hardcoded 'SECRET' Key

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

// simple operation if else statement
function performSecretOperation(condition) {
  if (condition) {
      // Use the secret key for some operation
      console.log("Authenticated with secret key:", secretKey);
  } else {
      console.log("Operation failed.");
  }
}

// Call the function with a condition
performSecretOperation(true);

server.listen(port,hostname,()=>{})