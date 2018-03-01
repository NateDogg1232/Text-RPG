//Made for node.js
var sass = require('node-sass');
var fs = require('fs');
sass.render({
    file: "main.scss",
    outFile: "main.css"
}, function (err, result) {
    if (err) {
        console.log("error");
        console.log(err);
        return;
    }
    fs.writeFile("main.css", result.css, function (err) {
        if (!err) {
            console.log("No errors");
        }
    });
});
