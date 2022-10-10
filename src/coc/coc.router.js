/**
 * Required External Modules and Interfaces
 */

 const express = require("express");
 const axios = require("axios");
 const TOKEN = process.env.TOKEN;
const CLAN_TAG = process.env.CLAN_TAG;
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
  try {
    resp = await axios.get('https://api.clashofclans.com/v1/clans/%23'+ CLAN_TAG, 
    { 
      headers: {
          Authorization: `Bearer ` + TOKEN
        }
      }
    );
    // console.log(resp.data);
  } catch (error) {
    console.log('something went wrong with updateGithubFile()', error);
    res.status(400).send({
      statusCode:200,
      body:error

    });
  }
   console.log(res.data)
   console
   res.status(200).send({
    statusCode:200,
    body:resp.data,
    member:resp.data[0]
    
  });
});

cocRouter.get("/getMemberInfo", async (req, res) => {
  let resp;
  const memberTag = req.query.memberTag.substring(1);
  console.log(memberTag)
  // json format 
  try {
    resp = await axios.get('https://api.clashofclans.com/v1/players/%23'+memberTag, 
    { 
      headers: {
          Authorization: `Bearer ` + TOKEN
        }
      }
    );
    // console.log(resp.data);
  } catch (error) {
    console.log('something went wrong with updateGithubFile()', error);
    res.status(400).send({
      statusCode:200,
      body:error

    });
  }
   console.log(res.data)
   console
   res.status(200).send({
    statusCode:200,
    body:resp.data,
    member:resp.data[0]
    
  });
});


 module.exports = {
   cocRouter,
 };
 
