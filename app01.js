const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'formMahasiswa.html'));
});

app.get('/form-mahasiswa', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'formMahasiswa.html'));
});

app.get('/form-dosen', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'formDosen.html'));
});

app.get('/view-mahasiswa', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'viewMahasiswa.html'));
});

app.get('/view-dosen', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'viewDosen.html'));
});

app.listen(8000, () => {
  console.log(`Server is running at http://localhost:8000`);
});