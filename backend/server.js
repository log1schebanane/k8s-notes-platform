const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/notes', notesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
});

app.locals.folders = {
  devops: {
    title: "DevOps Grundlagen",
    content: "CI/CD, Container, GitOps, Monitoring...",
  },
  frontend: {
    title: "Frontend Basics",
    content: "HTML, CSS, JavaScript, React...",
  },
};
