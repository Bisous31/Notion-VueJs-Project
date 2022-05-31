const express = require('express');
const {Client} = require('@notionhq/client');
const {v4: uuidv4} = require('uuid')

var cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const PORT = 4000;
const HOST = "localhost";

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

// requête POST
// POST valeur
// Fonctions: Ajouter des valeurs dans la page de NOTION (Mes Intégraions)

app.post('/submitFormToNotion', jsonParser, async(req, res)=>{
    //req.BODY
    const service = req.body.service;
    const intervenant = req.body.intervenant;
    const date = req.body.date;
    const panne = req.body.panne;
    const obs = req.body.obs;
    const userId = uuidv4()
    try{
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": userId
              }
            }
          ]
        },
        "Date": {
          rich_text:[
            {
              text: {
                content: date 
              }
            }
          ]
        },
        "Direction ou Service": {
          rich_text:[
            {
              text: {
                content: service
              }
            }
          ]
        },
        "Intervenant": {
          rich_text:[
            {
              text: {
                content: intervenant 
              }
            }
          ]
        },
        "Panne": {
          rich_text:[
            {
              text: {
                content: panne 
              }
            }
          ]
        },
        "Observations": {
          rich_text:[
            {
              text: {
                content: obs 
              }
            }
          ]
        }
      },
    })
    console.log(response);
    console.log("SUUCCES!"); 
  }catch(error){
        console.log(error)
    }
});

app.listen(PORT, HOST, ()=>{
    console.log("Starting server at " + HOST + PORT);
})
