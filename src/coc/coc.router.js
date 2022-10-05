/**
 * Required External Modules and Interfaces
 */

 const express = require("express");
 const { getPublicMessage } = require("./coc.service");
 const axios = require("axios");
 const TOKEN = process.env.TOKEN;

  /**
  * Router Definition
  */
 
 const cocRouter = express.Router();
 
 /**
  * Controller Definitions
  */
 // GET messages/
 
 cocRouter.get("/test", (req, res) => {
   const message = getPublicMessage();
   res.status(200).send(message);
 });


 cocRouter.get("/getClanInfo", async (req, res) => {
  let resp;
  //json format 
  console.log(`Bearer ` + TOKEN +'.')
  try {
    resp = await axios.get('https://api.clashofclans.com/v1/clans/%238RP8LRG', 
    { 
      headers: {
          Authorization: `Bearer ` + TOKEN
        }
      }
    );
    //  console.log(resp.data);
  } catch (error) {
    console.log('something went wrong with updateGithubFile()', error);
    return {
        res.status(400).send(error);

      
    };
  }
   console.log(resp.data)
   res.status(200).send(res);
});


 module.exports = {
   cocRouter,
 };
 
