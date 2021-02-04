// require fs
const fs = require('fs');
const db = require("../db/db.json");

// require uniqid and turns on debug messages
module.uniqid_debug = true;
const uniqid = require("uniqid");

// module export
module.exports = (app) => {
  // gets and reads db.json
  app.get('/api/notes', (req, res) => {
    fs.readFile('../db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      else {
        res.json(JSON.parse(data));
      }
    })
  });

  // post a new note
  app.post("/api/notes", (req, res) => {
    fs.readFile('../db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      else {
        const note = JSON.parse(data);
        const newNote = req.body;
        const noteId = uniqid();
        const theId = "id";

        newNote[theId] = noteId;
        note.push(newNote);

        fs.writeFile('../db/db.json', JSON.stringify(note), (err) => {
          if (err) throw err;
          res.json(note);
        });
      };
    });
  });

  // deleting notes, doesn't work
  // app.delete("/api/notes", (req, res) => {
  //   const noteId = req.params.id;
  //   res.send("delete");
  //   fs.readFile('db/db.json', 'utf8', (err, data) => {
  //     if (err) throw err;
  //     fs.writeFile('db/db.json', JSON.stringify(note), (err) => {
  //       if (err) throw err;
  //         res.json(note);
  //     });
  //   });
  // })
};
