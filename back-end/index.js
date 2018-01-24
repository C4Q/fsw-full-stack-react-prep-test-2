const app = require('express')();
const cors = require('cors');
const { candies } = require('./candies');

app.use(cors());

app.get('/', (req, res) => {
  let instructions = {
    'Welcome': 'This is your Candy back-end.',
    'Routes': {
      '/': 'This page!',
      '/all': 'An array of _all_ the candy.',
      '/new/:name/:rating': 'Add a candy :name with a certain :rating',
    }
  }
  res.json(instructions);
});
app.get('/all', (req, res) => {
  res.json(candies);
});

app.get('/new/:name/:rating', (req, res) => {
});

app.listen(3100, () => {
  console.log('back end running on 3100');
});
