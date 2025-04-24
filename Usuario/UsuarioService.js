const usuarioRepository = require('../repositories/usuarioRepository');

const usuarioService = {
  getAllUsuarios: () => usuarioRepository.findAll(),
  getUsuarioById: (id) => usuarioRepository.findById(id),
  createUsuario: (data) => usuarioRepository.create(data),
  updateUsuario: (id, data) => usuarioRepository.update(id, data),
  deleteUsuario: (id) => usuarioRepository.delete(id)
};

module.exports = usuarioService;
