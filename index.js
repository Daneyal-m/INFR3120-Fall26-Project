const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data and serve static files (CSS, images)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Landing Page Route 
app.get('/', (req, res) => {
  res.render('index', { tickets: [] });
});


app.listen(PORT, () => {
  console.log(`FixIT server running on http://localhost:${PORT}`);
});