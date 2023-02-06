const fs = require ('fs');

const dbPlatos = JSON.parse(fs.readFileSync('./dataBase/platos.json', 'utf-8'));

module.exports= dbPlatos;