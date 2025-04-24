const Usuario = require('../models/usuario');

const usuarioRepository = {
  findAll: () => Usuario.find(),
  findById: (id) => Usuario.findById(id),
  create: (data) => Usuario.create(data),
  update: (id, data) => Usuario.findByIdAndUpdate(id, data, { new: true }),
  delete: (id) => Usuario.findByIdAndDelete(id)
};

module.exports = usuarioRepository;
