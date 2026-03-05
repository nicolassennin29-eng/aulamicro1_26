const express = require("express");
const servidor = express();

servidor.get("/:nicolas", (req, res) => {
    const {nicolas} = req.params
    res.status(200).json({
        mensagem:`Seja Bem vindo PARÂMETRO ${nicolas}`
    })
});

servidor.listen(3029, () => {
  console.log("Servidor On Nicolas");
});
