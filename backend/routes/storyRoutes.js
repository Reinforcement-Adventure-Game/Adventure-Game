import express from 'express';
import { fetchStoryNode } from '../controllers/storyController.js';

const router = express.Router();

router.get('/:id', fetchStoryNode);

export default router;
