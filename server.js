var express = require("express");
var serveStatic = require("serve-static");
require('path');

var app = express();

var https_redirect = function(req, res, next) {
  if (process.env.NODE_ENV === "production") {
    if (req.headers["x-forwarded-proto"] != "https") {
      return res.redirect("https://" + req.headers.host + req.url);
    } else {
      return next();
    }
  } else {
    return next();
  }
};

app.use(https_redirect);
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5001;
app.listen(port);

console.log("server started " + port);