module.exports = app => {
    app.get('/', (req,res) => {
        var msg= {
            service: 'People API',
            status: 'ok'
        }
        res.json(msg);
    });
};