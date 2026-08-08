const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js'))   res.setHeader('Content-Type', 'application/javascript');
    if (filePath.endsWith('.json')) res.setHeader('Content-Type', 'application/json');
    if (filePath.endsWith('.css'))  res.setHeader('Content-Type', 'text/css');
  }
}));

app.get('/cliente',    (req, res) => res.redirect('/cliente/'));
app.get('/cliente/',   (req, res) => res.sendFile(path.join(__dirname, 'cliente', 'index.html')));

app.get('/admin-app',  (req, res) => res.redirect('/admin-app/'));
app.get('/admin-app/', (req, res) => res.sendFile(path.join(__dirname, 'admin-app', 'index.html')));

app.get('/sala-espera', (req, res) => res.sendFile(path.join(__dirname, 'sala-espera.html')));

app.get('/admin',      (req, res) => res.redirect('/admin/'));
app.get('/admin/',     (req, res) => res.sendFile(path.join(__dirname, 'admin', 'index.html')));

app.get('*', (req, res) => {
  const ext = path.extname(req.path);
  if (ext && ext !== '.html') return res.status(404).send('Not found');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
