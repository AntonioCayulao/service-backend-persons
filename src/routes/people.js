module.exports = app => {
    
    const People = app.db.models.People;

    app.route('/people')
        .get((req,res) => {
            People.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(404);
                });      
        })
        .post((req,res) => {
            People.create(req.body)
                .then(result => res.status(201).json(result))
                .catch(error => {
                    res.status(400).json({msg: error.message});
                });
        });
    app.route('/people/:id')
        .get((req,res) => {
            People.findOne({where: req.params})
                .then(result => {
                    if (result == null){
                        res.status(404).send('Not found');
                    }else{
                        res.json(result)
                    }
                })
                .catch(error => {
                    res.status(404);
                });
        })
        .put((req,res) => {
            People.update(req.body, {where: req.params})
                .then(result => {
                    if (result[0] == 0){
                        res.status(404).send('Not found');
                    }else{
                        res.sendStatus(200);
                    }
                })
                .catch(error => {
                    res.status(404);
                });
        })
        .delete((req,res) => {
            People.destroy({where: req.params})
                .then(result => {
                    if (result == 0){
                        res.status(404).send('Not found');
                    }else{
                        res.sendStatus(200);
                    }
                })
                .catch(error => {
                    res.status(404);
                });
        });
};