var db = require("../models");
var authController = require("../controller/authController.js");
module.exports = function(app, passport) {
    app.get("/signup", authController.signup);
    app.get("/signin", authController.signin);
    app.post(
        "/signup",
        passport.authenticate("local-signup", {
            successRedirect: "/dashboard",

            failureRedirect: "/signup"
        })
    );

    app.get("/", function(req, res) {
        res.render("index");
    });
    // Load example page and pass in an example by id
    app.get("/example/:id", function(req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function(
            dbExample
        ) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};
