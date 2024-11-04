const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors({ origin: 'http://192.168.100.2:4200' })); // Ajusta con la IP seleccionada
app.use(express.json());

app.post('/upload', upload.array('files'), (req, res) => {
  console.log('Solicitud de carga recibida');
  console.log('Archivos recibidos:', req.files);

  if (!req.files || req.files.length === 0) {
    console.error('No se recibieron archivos');
    return res.status(400).send('No se subieron archivos');
  }

  res.send('Archivos subidos exitosamente');
});

const PORT = 3000;
app.listen(PORT, '192.168.100.2', () => {
  console.log(`Servidor corriendo en http://192.168.100.2:${PORT}`);
});
