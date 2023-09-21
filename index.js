const express = require('express')
const app = express();
const path = require('path')
PORT = 3000
const fs = require('fs');

let users = [
  {
    id: 0,
    name: 'Lucas',
    phone: '(22)123-123'
  },
  {
    id: 1,
    name: 'Igor',
    phone: '(22)123-123'
  },
  {
    id: 2,
    name: 'Marcos',
    phone: '(22)123-123'
  },
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('user', { users });
})
app.get('/about', (req, res) => {
  res.render('about');
})

app.listen(PORT, () => {
  console.log(`servidor rodando em http://localhost:${PORT}`);
});