const express = require('express');
const {Client} = require('@notionhq/client');

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
    const name = req.body.name;
    try{
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": name
              }
            }
          ]
        }
      },
    })
    console.log(response);
    console.log("SUUCCES!"); 
    console.log(name)
  }catch(error){
        console.log(error)
    }
});

app.listen(PORT, HOST, ()=>{
    console.log("Starting server at " + HOST + PORT);
})
