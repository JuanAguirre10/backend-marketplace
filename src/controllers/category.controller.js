const { Category } = require('../models/index');

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json({ success: true, message: 'Categorías obtenidas', data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener categorías', data: null });
  }
};

exports.create = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    if (!nombre) {
      return res.status(400).json({ success: false, message: 'Nombre es requerido', data: null });
    }
    const category = await Category.create({ nombre, descripcion });
    res.status(201).json({ success: true, message: 'Categoría creada', data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al crear categoría', data: null });
  }
};