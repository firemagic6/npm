'use strict';   // enable strict mode is to ensure the code written is more secure and less prone to errors and "unsafe" actions.

const express = require("express");

// Constants
const PORT = 8989;
const HOST = "127.0.0.1";
const OS = require("os");                                           // console.log(OS.platform()); // e.g., 'darwin'
const ENV = "DEV";                                                  // determines the mode of development - e.g. below

// Application where we have enpoints that users can look for
const app = express();  // invoke the express library through instantiating it as a variable called app

app.get("/", (req, res)=>{                                           // listens for http://localhost:8989/ to be called
    res.statusCode = 200;                                            // return a response.ok
    const msg = "Hello FSD Learner! Running Node.js";                // create a message to be returned
    res.send(msg);                                                   // send the message to the user
});

app.get("/test", (req, res)=>{                                      // listens for http://localhost:8989/test to be called
    res.statusCode = 200                                            // returns a response.ok                                            
    const msg = "Hello from /test Node.js!";                        // create a message to be returned
    res.send(msg);                                                  // send the message to the user
});              

app.listen(PORT, HOST);
// console.log("Running on PORT:" + PORT + " and HOST:" + HOST);    // conventional way to concatenate strings
console.log(`Runs on http://${HOST}:${PORT}`);                      // using template strings to concatenate strings
console.log(OS.platform());
