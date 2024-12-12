const express = require("express")
const requestRoute = require("./routes/requestRoute")
const port = process.env.PORT || 5000
const cors = require('cors');

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({message: "Bienvenue sur notre API JS"})
})

app.use("/api/request", requestRoute)

app.options('*', cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Ajoutez cet en-tête à votre réponse
  next();
});

app.listen(port, () => console.log('Serveur en route !'))