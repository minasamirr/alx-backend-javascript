import express from 'express';
import router from './routes/index.js';

const app = express();

app.use('/', router);

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
