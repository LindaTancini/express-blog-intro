// IMPORTO EXPRESS
const express = require("express");
// CREO APP INVOCANDO EXPRESS
const app = express();
// DEFINISCO LA PORTA
const port = 3000;

// FACCIO IN MODO CHE LE IMMAGINI SIANO VISIBILI ALL'UTENTE
app.use(express.static("public"));

// CREO LA ROTTA PRINCIPALE
app.get("/", (req, res) => {
  console.log("Rotta principale");
  res.send("Server del mio blog");
});

// CREO LA ROTTA PER OTTENERE I POSTS
app.get("/bacheca", (req, res) => {
  console.log("Rotta dei posts");
  // CREO L'ARRAY DEI POST
  const posts = [
    {
      titolo: "Ciambellone",
      contenuto: "Dolce perfetto per la colazione.",
      immagine: "img/ciambellone.jpeg",
      tag: ["colazione", "dolce", "soffice"],
    },
    {
      titolo: "Cracker alla barbabietola",
      contenuto: "Snack croccante a base di barbabietola.",
      immagine: "img/cracker_barbabietola.jpeg",
      tags: ["snack", "merenda", "barbabietola"],
    },
    {
      titolo: "Pane fritto dolce",
      contenuto: "Pane fritto, ideale come un dolce veloce.",
      immagine: "img/pane_fritto_dolce.jpeg",
      tags: ["dolce", "zucchero", "fritto"],
    },
    {
      titolo: "Pasta alla barbabietola",
      contenuto: "Un primo piatto molto colorato a base di barbabietola.",
      immagine: "img/pasta_barbabietola.jpeg",
      tags: ["pasta", "primo", "barbabietola"],
    },
    {
      titolo: "Torta paesana",
      contenuto: "Dolce tradizionale paesano a base di pane e cacao.",
      immagine: "img/torta_paesana.jpeg",
      tags: ["dolce", "tradizionale", "cacao"],
    },
  ];
  res.json(posts);
});

// AVVIO IL SERVER SULLA PORTA 3000 E CONTROLLO SU POSTMAN
app.listen(port, () => {
  console.log(`Sono un server attivo sulla porta:${port}`);
});
