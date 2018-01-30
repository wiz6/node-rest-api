# Clients REST API

This is REST API for creating new clients, retrieving client and list of clients with basic web interface.  

# Technologies and frameworks used
* [Node.js 9.4](https://nodejs.org/) - backend + javascript(ES5)
* [MongoDB 3.0.1](https://www.mongodb.com/) - database
* [Mongoose 5.0.1](http://mongoosejs.com/) - data layer
* [jQuery 3.3.1](https://jquery.com/) - frontend
* [Bootstrap 4](https://getbootstrap.com/) - frontend web elements
* [Handlebars 4.0.1](https://github.com/pillarjs/hbs) - template engine

# Installation

To run this project in your local machine you need to install [MongoDB 3.0.1](https://www.mongodb.com/). Once MongoDB is
installed and started, ensure that `config.db.port` in `config/index.js` is the same as your running database port. 

Be sure that `node >= 4.0` and npm is installed in your local machine.

Be sure that `config.port` in `config/index.js` is available in your local machine. Currently default port is `3000`.

### Using locally installed npm and node

Run these commands in root directory.

Install dependencies:

`npm install`

Start server:

`npm start`

Open `http://localhost:3000` in your browser.

