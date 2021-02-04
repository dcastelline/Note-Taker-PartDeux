const path = require("path");

module.exports = (app) => {
    // GET
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "public/notes.html"));
    });
    // POST
    app.post("/notes", (req, res) => {
        res.send("post");
    });
    // return the html file
    app.get("/html", (req, res) => {
        res.sendFile(path.join(__dirname, "public/index/.html"));
    });
};