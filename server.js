const express = require('express');
const routes = require('./routes');
const path = require('path');
const exphbs = require('express-handlebars');

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js
const hbs = exphbs.create();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log('Now listening on http://localhost:' + PORT)
  );
});
