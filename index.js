const express = require('express');

const app = express();

app.use(express.json()); // Para parsing de JSON

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));