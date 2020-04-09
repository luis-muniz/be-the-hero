const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  createOng() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      })
    })
  },

  startSession() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
      })
    })
  },

  profile() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    })
  },

  getIncidents() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    })
  },

  createIncident() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().max(30),
        description: Joi.string().required(),
        value: Joi.number().required().min(0),
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    })
  },

  removeIncident() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      }),
    })
  },
}
