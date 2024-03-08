import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: '*' }));

const port = process.env.port || 3002;

// starting Enn point
app.get('/', (req, res) => {
  res.send('Hello World from API');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
