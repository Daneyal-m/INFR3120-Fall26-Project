const express = require('express');
const path = require('path');

//brings in the ticket blueprint
const Ticket = require('./models/ticket');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data and serve static files (CSS, images)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//empty list to hold the tickets
let tickets = [];
//loads the home page and sends the list of tickets to it
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home', 
    tickets: tickets
  });
});

//shows and load the submission form page
app.get('/tickets/new', (req, res) => {
  res.render('ticket', { title: 'Submit Ticket' });
});

//runs when the submit buton is clicked
app.post('/tickets', (req, res) => {
  //builds a new ticket form
  let newTicket = new Ticket(
      req.body.title,
      req.body.category,
      req.body.location,
      req.body.priority,
      req.body.description
  );
  
  //add the new ticket to the list and sends user to home page
  tickets.push(newTicket); 
  res.redirect('/'); 
});


app.listen(PORT, () => {
  console.log(`FixIT server running on http://localhost:${PORT}`);
});