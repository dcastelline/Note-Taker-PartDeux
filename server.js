// Require express
const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// Tell Node creating express server
const app = express();

// Declare PORT
const PORT = process.env.PORT || 8080;

// Set up express parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("/public"));

// Routes
apiRoutes(app);
htmlRoutes(app);

// Set up PORT listener
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));