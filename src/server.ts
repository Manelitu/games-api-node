import express from 'express';
import 'dotenv/config';

import { routes } from './routes';

const app = express();
const port = 5000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
