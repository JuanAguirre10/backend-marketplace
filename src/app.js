const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');
const categoriesRouter = require('./routes/categories');
const { verifyToken } = require('./middlewares/auth.middleware');

const app = express();

// Middlewares
app.use(cors({
  origin: 'https://frontend-marketplace-ashen.vercel.app/',
  credentials: true
}));
app.use(express.json());

// Rutas públicas
app.use('/api/auth', authRouter);
app.use('/api/categories', verifyToken, categoriesRouter);

// Rutas protegidas
app.use('/api/products', verifyToken, productsRouter);

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ message: 'API E-commerce funcionando' });
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;