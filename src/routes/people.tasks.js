module.exports = app => {
    
    const People = app.db.models.People;

    app.route('/people')
        .get((req,res) => {
            People.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(404).json({msg: error.message});
                });      
        })
        .post((req,res) => {
            console.log(req);
            People.create(req.body)
                .then(result => res.status(201).json(result))
                .catch(error => {
                    res.status(400).json({msg: error.message});
                });
        });
    app.route('/people/:id')
        .get((req,res) => {
            People.findOne({where: req.params})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(404).json({msg: error.message});
                });
        })
        .put((req,res) => {
            People.update(req.body, {where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .delete((req,res) => {
            People.destroy({where: req.params})
                .then(result => res.sendStatus(200))
                .catch(error => {
                    res.status(404).json({msg: error.message});
                });
        });
};