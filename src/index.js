import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const port = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
