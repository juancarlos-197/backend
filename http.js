const http = require("node:http"); //protocolo http
const fs = require("node:fs"); //protocolo http

const desiredPort = process.env.PORT ?? 3100;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8"); //html

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>Bienvenido a la página de inicio </h1>");
    //res.setHeader('Content-Type','text/plain') //texto plano
    //res.end("Bienvenido a la página de inicio ");
  } else if (req.url === "/imagen-super-bonita.jpg") {
    fs.readFile("./juan.jpg", (err, data) => {
      if (err) {
        req.statusCode = 500;
        req.end("<h1>500 Internal Server Error  </h1>");
      } else {
        req.setHeader("Content-Type", "juan.jpg");
        req.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.end("<h1>Contacto </h1>");
  } else {
    res.statusCode = 400;
    res.end("<h1>404 </h1>");
  }
};
const server = http.createServer(processRequest);
/** 
server.listen(3000,()=>{
console.log('Server is listening on port 3000')
})*/

/** 
server.listen(0,()=>{
console.log(`Server is listening on port http://localhost:${server.address().port}`)
})**/

server.listen(desiredPort, () => {
  console.log(`Server is listening on port http://localhost:${desiredPort}`);
});
