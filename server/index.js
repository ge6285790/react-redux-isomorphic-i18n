import express from 'express';
import isomorphic from './middleware/isomorphic';
import init from './middleware/init';


const app = express();

const PORT = process.env.PORT || 7070;

init(app);

app.get('*', (req, res) => {
  isomorphic(req, res);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
