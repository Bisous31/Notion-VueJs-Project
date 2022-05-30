const express = require('express');
const {Client} = require('@notionhq/client');

var cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const PORT = 4000;
const HOST = "localhost";

const client = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

// requête POST
// POST valeur
// Fonctions: Ajouter des valeurs dans la page de NOTION (Mes Intégraions)
app.post('/', jsonParser, async(res, req)=>{
    //BODY
    const texte = req.body.texte;
    try{
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": "Bienvenue sur NOTION"
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
    console.log("Starting server")
})