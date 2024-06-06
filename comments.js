// Create web server 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Create a variable called comments that is an array of objects
let comments = [
    {name: "John", comment: "Hello!"},
    {name: "Jane", comment: "Hi!"}
];

// Create a variable called comments that is an array of objects
let users = [
    {name: "John", email: "