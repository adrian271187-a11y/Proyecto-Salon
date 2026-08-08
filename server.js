const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estáticos (JS, CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname)));

// App cliente PWA
app.get('/cliente', (req, res) => {
  res.redirect('/cliente/');
});
app.get('/cliente/', (req, res) => {
  res.sendFile(path.join(__dirname, 'cliente', 'index.html'));
});

// Admin
app.get('/admin', (req, res) => {
  res.redirect('/admin/');
});
app.get('/admin/', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

// Sitio principal — cualquier otra ruta
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
