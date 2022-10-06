/**
 * Required External Modules
 */

 const express = require("express");
 const cors = require("cors");
 const helmet = require("helmet");
 const { clientOrigins, serverPort } = require("./config/env.dev.js");
 
 const { cocRouter } = require("./coc/coc.router");

 const serverless = require('serverless-http')

 /**
  * App Variables 
  */
 
 const app = express();
 const apiRouter = express.Router();
 
 /**
  *  App Configuration
  */
 
 app.use(helmet());
 app.use(cors({ origin: clientOrigins }));
 app.use(express.json());
 
 
 apiRouter.use("/coc", cocRouter);

 app.use(function (err, req, res, next) {
   console.log(err);
   res.status(500).send(err.message);
 });

 /**
  * Server Activation
  */
 
 app.listen(9000, () =>{} );
 app.use("/.netlify/functions/index", apiRouter);


module.exports = app;

module.exports.handler = serverless(app);
