const dataBase = require ('../dataBase');

module.exports = {
    index: function(req, res, next) {
        res.render('index', {
            title:'Pimienta & sal',
            dataBase,
        
        });
    },
    detail: function (req, res) {
        const idPlato = req.params.id;
        const platos = dataBase.find(plato => plato.id == idPlato);
        res.render("detalleMenu",{
            platos
        })
        
    },
    
}