module.exports = app => {
    app.get('/', (req,res) => {
        msg= {
            service: 'People API',
            status: 'ok'
        }
        res.json(msg);
    });
};