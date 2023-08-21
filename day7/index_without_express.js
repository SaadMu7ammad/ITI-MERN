const http = require('http'); //import http
const fs = require('fs');
let server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == '/home' || req.url == '/') {
    // res.write('<h1>hi from home</h1>');
    let html = fs.readFileSync('index.html', 'utf-8');
    res.write(html); //send html page
    // res.write('<h1>hi from home</h1>');
    res.end();
  } else if (req.url == '/about') {
    res.write('<h1>hi from about</h1>');
    res.end();
  } else if (req.url == '/style.css') {
    let css = fs.readFileSync('style.css', 'utf-8');
    res.write(css);
    res.end();
  } else if (req.url == '/ITI.png') {
    let pic = fs.readFileSync('ITI.png', 'base64');
    res.write(Buffer.from(pic, 'base64'));
    // res.write(pic);
    res.end();
  } else {
    res.write('<h1>Not Found</h1>');
    res.end();
  }
});

server.listen(8080, function () {
  console.log('web service is on');
});
