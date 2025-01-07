import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

// story node data
const storyNodes = {
  start: {
    id: 'start',
    title: 'The brave beginning',
    description: 'You stand at the mouth of a dark cave, the depths of which you cannot possibly know. Behind you is a vast forest, thick with brush, sunlight spotting through the trees to the forest floor. You aren\'t sure how you got here, but you feel a great sense of urgency and duty to keep moving forward. Where will you go?',
    choices: [
      { text: 'Enter the cave', nextNode: 'cave' },
      { text: 'Walk into the forest', nextNode: 'forest' }
    ]
  }
};

// API route to fetch a story node
app.get('/story/:id', (req, res) => {
  const nodeId = req.params.id;
  const node = storyNodes[nodeId];
  if (!node) {
    return res.status(404).json({ error: 'Story node not found' });
  }
  res.json(node);
});

// Start the backend server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
