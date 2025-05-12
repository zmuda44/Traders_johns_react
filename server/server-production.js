const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
// const cors = require('cors');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// require('dotenv').config(server/env)
var dotenv = require('dotenv');
// let dotenvConfig = dotenv.config()

const sess = {
  secret: process.env.SESS_SECRET,
  cookie: {
    maxAge: 60 * 10_000,
    httpOnly: true,
    secure: false,
    sameSite: false,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(routes);

// if we're in production, serve client/build as static assets

  app.use(express.static(path.join(__dirname, '../client/dist')));
  
  app.get("*", (req, res) => {
    // For any routes not handled by the server, send the main index.html file
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));

});