"use strict";

const Hapi = require("@hapi/hapi");
const Bent = require("bent");
const post = Bent("http://localhost:8000/", "POST", 200);

const init = async () => {
  const server = Hapi.server({
    port: 44444,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello, I am a webhook relay 🌵";
    },
  });

  server.route({
    method: "POST",
    path: "/relay",
    handler: async (request, h) => {
      var d = new Date();
      var n = d.toLocaleTimeString();
      console.log(`relay triggered - ${n}`);
      const response = await post("__refresh");
      return response;
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
