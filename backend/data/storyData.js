import StoryBeat from '../models/storyBeat.js';

const start = new StoryBeat(
  'start',
  'The Brave Beginning',
  "You stand at the mouth of a dark cave, the depths of which you cannot possibly know. Behind you is a vast forest, thick with brush, sunlight spotting through the trees to the forest floor. You aren't sure how you got here, but you feel a great sense of urgency and duty to keep moving forward. What will you do?",
  [
    { text: 'Enter the cave', nextNode: 'cave' },
    { text: 'Walk into the forest', nextNode: 'forest' },
  ],
  '/assets/sounds/start.mp3',
  'bg-green-500'
);

const cave = new StoryBeat(
  'cave',
  'The Dark Cave',
  'The cave is damp, you can only see a few feet in front of you, and you can sense there are bats bustling above you. You are travelling nearly blind, but wait, there is an unlit torch mounted to this wall next to you. What will you do?',
  [
    {
      text: 'Light the torch with the flint in your pocket',
      nextNode: 'illuminatedCave',
    },
    {
      text: 'Turn around now, you have a bad feeling about this place',
      nextNode: 'start',
    },
  ],
  '/assets/sounds/cave.mp3', //for example, if we have sound files
  'bg-black'
);

const storyNodes = { start, cave };

export default storyNodes;
