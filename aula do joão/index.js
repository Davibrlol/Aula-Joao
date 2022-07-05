import express from "express"; 

const app = express();
const port = 8087;

var sabores = [
    "4 queijos",
    "Frango Catupiry",
    "Crocante",
    "A Moda do Cliente"
]

app.get("/", (req, res) => {
    res.send("Bem vindo a fábrica de pizza")
} )

app.post("/adicionarSabor", (req, res) => {
    
    let novoSabor = req.sabor;
    sabores.push(novoSabor);
    res.send("Sabor adicionado" + novoSabor)
})

app.get("/sabores", (req, res) =>{
    res.send(sabores)
})



app.listen(port, () => {
    console.log("O servidor está aberto na porta " + port)
})