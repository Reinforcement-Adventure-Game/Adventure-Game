import StoryBeat from '../models/StoryBeat.js';

const storyNodes = [
  new StoryBeat(
    0,
    'The Brave Beginning',
    "You stand at the mouth of a dark cave, the depths of which you cannot possibly know. Behind you is a vast forest, thick with brush, sunlight spotting through the trees to the forest floor. You aren't sure how you got here, but you feel a great sense of urgency and duty to keep moving forward. What will you do?",
    [
      { text: 'Enter the cave', nextNode: 1 },
      { text: 'Walk into the forest', nextNode: 4 },
    ],
    'start'
  ),
  new StoryBeat(
    1,
    'The Dark Cave',
    'The cave is damp, you can only see a few feet in front of you, and you can sense there are bats bustling above you. You are traveling nearly blind, but wait, there is an unlit torch mounted to this wall next to you. What will you do?',
    [
      {
        text: 'Light the torch with the flint in your pocket',
        nextNode: 2,
      },
      {
        text: 'Turn around now, you have a bad feeling about this place',
        nextNode: 0,
      },
    ],
    'cave'
  ),
  new StoryBeat(
    2,
    'Laughter in the Dark',
    'You continue forward, the path is dimly illuminated, but fading as you travel further past the torch. You hear something behind a stalagmite about a meter away from you, is that laughter? You can’t tell if this snickering seems unfriendly, what’s so funny inside of this dark place?',
    [
      {
        text: 'announce yourself, and demand to know who this is, what are they laughing at?',
        nextNode: 3,
      },
      {
        text: 'sneak by, this creature cannot be trusted, you don’t want to risk anything',
        nextNode: 3,
      },
    ],
    'cave'
  ),
  new StoryBeat(
    3,
    'Stranger in the night',
    `You feel a tap on your shoulder and you nearly jump out of your skin. “Do you seek wisdom or wealth?” a whimsical, but pointed tone meets your ear. You turn to meet the voice, and you are face to face with a ghoulish looking creature, with a big smile on his face  “Who are you? What are you doing here? You ask. He shouts, “I ask the questions around here! This is my cave after all! So, do you seek wisdom or wealth?`,
    [
      {
        text: 'A strange question to ask me in a place like this, but if you must know, I seek wealth in my travels',
        nextNode: null,
      },
      {
        text: 'You don’t answer him, this creature seems shifty, and what sort of question is that? In a place like this? You decide to follow your footprints back to the cave entrance.',
        nextNode: 0,
      },
    ],
    'cave'
  ),
// 'Path of least resistance'
  new StoryBeat(
    4,
    'Into the Forest',
    'You start walking through the forest, choosing the path of least resistance through the thick brush around you. This place is so peaceful, a sense of relief washes over you, thank heavens you didn’t enter that hostile cave back there.',
    [
      {
        text: 'Travel deeper into this lovely forest, follow your heart. You have no plans to return to this place.',
        nextNode: 5,
      },
      {
        text: 'You change your mind. Though it scares you, you sense that something in that cave is calling to you',
        nextNode: 0,
      },
    ],
    'forest'
  ),
  new StoryBeat(
    5,
    'A Meadow’s Calm',
    "You reach an open meadow, framed by a babbling brook, and a spot of particularly plush looking tall grass. This forest has you feeling so relaxed, you think laying down and resting your eyes might be a nice idea.",
    [
      { text: 'Find a nice spot in the shade and close your eyes, take in the sights and sounds of the forest.', nextNode: '6' },
      { text: 'You’d rather continue on your adventure, you’ve got plenty of energy to keep going.', nextNode: 10 },
    ],
    'forest'
  ),
  new StoryBeat(
    6,
    'A Venomous Encounter',
    "A venomous meadow snake, common but deadly, was pinned beneath you when you laid down to rest. He’s a nice snake, really, but when he was trying to free himself from getting squashed beneath you, he accidentally bit you.",
    [
      { text: 'Oh no.', nextNode: 7 },
      { text: 'Oh no.', nextNode: 7 },
    ],
    'forest'
  ),
  new StoryBeat(
    7,
    'The Last Moments',
    "The venom coursing through your veins, you awaken and realize what has happened. You may only have a few seconds left. You do have a health potion but, oh god, is it in your pocket or your backpack?",
    [
      { text: 'Reach into your pocket, you’re fairly sure you’d keep something so crucial close at hand.', nextNode: 8 },
      { text: 'Reach to your backpack, you’d want to keep something so crucial safe for this such occasion.', nextNode: 9 },
    ],
    'forest'
  ),
  new StoryBeat(
    8,
    'Saved by the Potion',
    "Oh thank goodness you remembered, the health potion was in your pocket. You uncork the pink tincture and swash it into your mouth. Your racing heart begins to slow down, and the pain in your leg is fading. With your strength returning to you, you realize the snake that bit you is still pinned right under your leg.",
    [
      { text: '“Foul beast! You nearly killed me! Feel my wrath!” You stomp on the snake.', nextNode: 9 },
      { text: 'My apologies for nearly squashing you, Mr. Snake. It seems to me that both of us are lucky to walk away.', nextNode: 'TBD' },
    ],
    'forest'
  ),
  new StoryBeat(
    9,
    'Weary Traveller’s End',
    "Weary traveller, it seems you have met your end. If only things had turned out differently, what a sad way to meet your fate.",
    [
      { text: 'You make peace with your end. After all, it’s been such an adventure.', nextNode: 0 },
      { text: 'You die bitter, with hate in your heart, this is so unfair.', nextNode: 0 },
    ],
    'forest'
  ),
  new StoryBeat(
    10,
    'The magic of the forest',
    'You hear a beautiful voice singing, the voice nearly blends with the sound of the wind blowing and the trees rustling. A deep sense of peace washes over you, you want to follow the sound.',
    [
      { text: 'Follow the voice', nextNode: null },
      {
        text: 'the singing is nice, but you continue on your journey, traveling deeper into the woods',
        nextNode: null,
      },
    ],
    'forest'
  ),
];

// 2.0 ‘You start walking through the forest, choosing the path of least resistance through the thick brush around you. This place is so peaceful, a sense of relief washes over you, thank heavens you didn’t enter that hostile cave back there.’

//const caveTravel = new StoryBeat();

// 1.2 ‘ You continue forward, the path is dimly illuminated, but fading as you travel further past the torch. You hear something behind a stalagmite about a meter away from you, is that laughter? You can’t tell if this snickering seems unfriendly, what’s so funny inside of this dark place?
// { text: announce yourself, and demand to know who this is, what are they laughing at?,
//       nextNode: ‘TBD',  },
//     { text: 'sneak by, this creature cannot be trusted, you don’t want to risk anything',
//       nextNode: ‘either way you encounter him’,  },

export default storyNodes;
