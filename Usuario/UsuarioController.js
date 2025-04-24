const usuarioService = require('../services/usuarioService');

const usuarioController = {
  getAll: async (req, res) => {
    try {
      const usuarios = await usuarioService.getAllUsuarios();
      res.json(usuarios);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  getById: async (req, res) => {
    try {
      const usuario = await usuarioService.getUsuarioById(req.params.id);
      usuario ? res.json(usuario) : res.status(404).send("No encontrado");
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  create: async (req, res) => {
    try {
      const usuario = await usuarioService.createUsuario(req.body);
      res.status(201).json(usuario);
    } catch (err) {
      res.status(400).send(err.message);
    }
  },
  update: async (req, res) => {
    try {
      const usuario = await usuarioService.updateUsuario(req.params.id, req.body);
      usuario ? res.json(usuario) : res.status(404).send("No encontrado");
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  delete: async (req, res) => {
    try {
      await usuarioService.deleteUsuario(req.params.id);
      res.send("Eliminado");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
};

module.exports = usuarioController;
