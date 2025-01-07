import express from 'express';
import cors from 'cors';
import storyRoutes from './routes/storyRoutes.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use('/story', storyRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
