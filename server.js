var connect     = require("connect");
var http        = require("http");
var R           = require("ramda");
var serveStatic = require("serve-static");

var contains = R.curry(function (string, pattern) {
    return (string.indexOf(pattern) !== -1);
});

var requestHandler = connect()
    .use(function (req, res, next) {
        var cnt = contains(req.url);
        if (
            !cnt("/js/") &&
            !cnt("/images/") &&
            !cnt("/css/")
        ) {
            req.url = "/";
        }
        next();
    })
    .use(serveStatic("."));

var listeningHandler = function () {
    console.log("Server listening at http://0.0.0.0:8080");
};
http.createServer()
    .on("request", requestHandler)
    .on("listening", listeningHandler)
    .listen(8080, "0.0.0.0");
