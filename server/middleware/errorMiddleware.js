module.exports = function(app) {
    app.use(function(err, req, res, next) {
        console.error(err);
        /* configure specific errors */

        //jwt error
        if (err.name === "UnauthorizedError") {
            res.status(401).send('Invalid token');
            return;
        }


        //Default error message
        res.status(500).send("Error")
    })
}