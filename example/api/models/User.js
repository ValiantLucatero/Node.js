/**
 * User.js
 *
 * @description :: Implementación de un modelo de usuario
 */

const bcrypt = require('bcrypt');
module.exports = {

  attributes: {
    nombre:{
      type: 'string',
      required: true,
    },
    password:{
      type: 'string',
      required: true,
    },
    edad:{
      type: 'integer',
      required: true,
      defaultsTo: 5,
    },
    amigo: {
      collection: 'user',
      via: 'id',
    },
    saluda
  },

  beforeCreate: (values, cb) => {
    return bcrypt.hash(values.password, 10, (err, hash) => {
      if (err)
      {
        return cb(err);
      }
      values.password = hash;
      return cb(null, values);
    });
  },
  saluda
};
