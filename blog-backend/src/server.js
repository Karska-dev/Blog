import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
  'alpha': {
    upvotes: 0,
  },
  'betta': {
    upvotes: 0,
  },
  'gamma': {
    upvotes: 0,
  },
  'delta': {
    upvotes: 0,
  }
}

const app = express();

app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;
  articlesInfo[articleName].upvotes++;
  res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes!`);
})

app.listen(8000, ()=> console.log('Listening on port 8000'));