const express = require('express');
const connectDB = require('./database/db');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);

connectDB().then(() => {
  app.listen(3000, () => console.log('Servidor en puerto 3000'));
});
