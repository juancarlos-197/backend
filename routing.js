const http = require("node:http"); //protocolo http

//commoJS  modulo clasicos de nodejs
const dittonJSON = require("./pokemon/ditto.js");
const limitJSON = require("./pokemon/limit.js");

const desiredPort = process.env.PORT ?? 3100;

const processRequest = (req, res) => {
  const { method, url } = req;
  switch (method) {
   
   /** 
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittonJSON));
        default:
          res.statusCode = 404;
          return res.end("<h1>404 Juan </h1>");
      }*/
    case "GET":
      switch (url) {
        case "/pokemon?limit=100000&offset=0":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(limitJSON));
        default:
          res.statusCode = 404;
          return res.end("<h1>404 Juan 2 </h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";
          //escucha el evento data
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);
            // llamar a una base de datos para guardar la informnacion
            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });
            res.end(JSON.stringify(data));
          });
          break;
        }

        default:
          res.statusCode = 404;
          return res.end("<h1>404 Not Found </h1>");
      }
  }
};
const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`Server is listening on port http://localhost:${desiredPort}`);
});
