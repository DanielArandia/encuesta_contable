const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración de almacenamiento de archivos con multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// Middleware de carga de archivos
const upload = multer({ storage: storage });

// Crear la carpeta 'uploads' si no existe
const fs = require('fs');
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Ruta para manejar la carga de archivos
app.post('/upload', upload.array('files'), (req, res) => {
  if (!req.files) {
    return res.status(400).send('No se subieron archivos');
  }
  res.send('Archivos subidos exitosamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
