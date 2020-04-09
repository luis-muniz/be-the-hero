const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const middleware = require('./middleware/index');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', middleware.startSession(),SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', middleware.createOng(), OngController.create);

routes.get('/profile', middleware.profile(), ProfileController.index);

routes.get('/incidents', middleware.getIncidents(), IncidentController.index);

routes.post('/incidents', middleware.createIncident(), IncidentController.create);

routes.delete('/incidents/:id', middleware.removeIncident(), IncidentController.delete);

module.exports = routes;
