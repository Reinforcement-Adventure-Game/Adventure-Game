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
    'You reach an open meadow, framed by a babbling brook, and a spot of particularly plush looking tall grass. This forest has you feeling so relaxed, you think laying down and resting your eyes might be a nice idea.',
    [
      {
        text: 'Find a nice spot in the shade and close your eyes, take in the sights and sounds of the forest.',
        nextNode: '6',
      },
      {
        text: 'You’d rather continue on your adventure, you’ve got plenty of energy to keep going.',
        nextNode: 10,
      },
    ],
    'forest'
  ),
  new StoryBeat(
    6,
    'A Venomous Encounter',
    'A venomous meadow snake, common but deadly, was just eating an apple when he was pinned beneath you when you laid down to rest. He’s a nice snake, really, but when he was trying to free himself from getting squashed beneath you, he accidentally bit you.',
    [
      { text: 'Oh no.', nextNode: 7 },
      { text: 'Oh no.', nextNode: 7 },
    ],
    'forest'
  ),
  new StoryBeat(
    7,
    'The Last Moments',
    'The venom coursing through your veins, you awaken and realize what has happened. You may only have a few seconds left. You do have a health potion but, oh god, is it in your pocket or your backpack?',
    [
      {
        text: 'Reach into your pocket, you’re fairly sure you’d keep something so crucial close at hand.',
        nextNode: 8,
      },
      {
        text: 'Reach to your backpack, you’d want to keep something so crucial safe for this such occasion.',
        nextNode: 9,
      },
    ],
    'forest'
  ),
  new StoryBeat(
    8,
    'Saved by the Potion',
    'Oh thank goodness you remembered, the health potion was in your pocket. You uncork the pink tincture and swash it into your mouth. Your racing heart begins to slow down, and the pain in your leg is fading. With your strength returning to you, you realize the snake that bit you is still pinned right under your leg.',
    [
      {
        text: '“Foul beast! You nearly killed me! Feel my wrath!” You stomp on the snake.',
        nextNode: 9,
      },
      {
        text: 'My apologies for nearly squashing you, Mr. Snake. It seems to me that both of us are lucky to walk away from this alive, or should I say slither away...',
        nextNode: '10',
      },
    ],
    'forest'
  ),
  new StoryBeat(
    9,
    'You died.',
    'Weary traveler, it seems you have met your end. If only things had turned out differently, what a sad way to meet your fate.',
    [
      {
        text: 'You make peace with your end. After all, it’s been such an adventure.',
        nextNode: 0,
      },
      {
        text: 'You die bitter, with hate in your heart, this is so unfair.',
        nextNode: 0,
      },
    ],
    'heavenly'
  ),
  new StoryBeat(
    10,
    'A chance encounter',
    'As you continue on your journey, a voice erupts from the quiet of the forest, You’re surprised to see another person so deep in these woods. “Hello Stranger, you’re looking a little lost, care to travel together? I can be your navigator.” they exclaim, with what seems to be a genuine grin.',
    [
      {
        text: 'Sure, I could use a navigator, you seem like a trustworthy traveler.',
        nextNode: null,
      },
      {
        text: '“No, thank you, I like to travel alone, good day to you.” Why would you trust a stranger?',
        nextNode: 11,
      },
    ],
    'forest'
  ),
  new StoryBeat(
    11,
    'Traveling Alone',
    'You continue through the woods alone. It’s ironic really, only a moment later you fall into a deep crevasse. If only you hadn’t been travelling alone, surely your navigator would’ve seen this bottomless hole in the ground. But you were too proud to have a navigator, so now you’re falling and falling and falling.',
    [
      { text: 'oh no', nextNode: 12 },
      {
        text: 'oh no!',
        nextNode: 12,
      },
    ],
    'forest'
  ),
  new StoryBeat(
    12,
    'A Dangerous Encounter',
    "You open your eyes to find that you fell quite a distance, 20,000 dollars, I mean meters, below ground, and you're now in a fiery cave, lava flowing around you. A sense of peril and despair sinks into your heart. Then, an ear piercing screech fills the cave. A terrifying beast stands before you.",
    [
      {
        text: 'Channelling all of the courage from deep in your heart, you rise to face the beast.',
        nextNode: 13,
      },
      {
        text: 'Sheer terror overcomes you, you cower behind a large rock and peek around to catch a glance at the beast.',
        nextNode: 13,
      },
    ],
    'cave'
  ),
  new StoryBeat(
    13,
    'The Osphelion',
    'You lay eyes on this winged creature, which resembles a cross between an owl and a serpent, with shimmering feathers that glisten in the orange glow of the flames. You’ve heard of this monster in legends, the Osphelion, known for its cunning nature and paralyzing gaze. It’s bright yellow eyes are piercing, it’s looking right at you.',
    [
      {
        text: 'You freeze, paralyzed with fear, hoping it hasn’t really seen you.',
        nextNode: 14,
      },
      {
        text: 'You step forward, square your chest to the creature, and exclaim “My name is C. Smith, I am a brave traveler, brave enough to face you, OSPhelion.',
        nextNode: 15,
      },
    ],
    'cave'
  ),
  new StoryBeat(
    14,
    "the Creature's Wisdom",
    'Despite your attempt to hide, it is clear that the Osphelion has taken notice of you. It steps forward, with massive talons, swiftly closing the distance you had left between you. It opens its beak as if to gobble you up, but instead it speaks, "You cannot hide from me, traveler, nor should you try. I mean you no harm. Face what terrifies you, this is the only way to meet your fate."',
    [
      {
        text: "Wow, that's quite profound, actually. So if I put my fears aside and face you, can you get me out of this place?",
        nextNode: 17,
      },
      {
        text: 'This must be a trap, the Osphelion wants me to let my guard down, now is my chance to run away.',
        nextNode: 16,
      },
    ],
    'cave'
  ),
  new StoryBeat(
    15,
    "the Creature's Wisdom",
    'It\'s clear now that the Osphelion has taken notice of you. It steps forward, with massive talons, swiftly closing the distance you had left between you. It opens its beak as if to gobble you up, but instead it speaks, "Brave traveler indeed. You can tell I am no enemy to you, you are wise. Facing your fears is what will get you where you need to go. I assume a human like you has no desire to stay in this fiery place."',
    [
      {
        text: 'This must be a trap, the Osphelion wants me to let my guard down, now is my chance to run away.',
        nextNode: 16,
      },
      {
        text: "You're right, Osphelion, I want out of this place, can you help me?",
        nextNode: 17,
      },
    ],
    'cave'
  ),
  new StoryBeat(
    16,
    'A futile attempt',
    "You  make a break for it, but wait, where can you actually run to? You're already 20,000 dollars, I mean meters, below ground. You stop for a moment, looking all around frantically for a way out. You can hear the Osphelion approaching behind you, the scraping of its giant talons on the cave floor. You begin running again, sure that the Osphelion will tear you to shreds. You trip on a rock and fall head first into the lava. ",
    [
      {
        text: 'oh no',
        nextNode: 9,
      },
      {
        text: 'oh no',
        nextNode: 9,
      },
    ],
    'cave'
  ),
  new StoryBeat(
    17,
    'title',
    'description',
    [
      {
        text: 'option',
        nextNode: 1,
      },
      {
        text: 'option',
        nextNode: 1,
      },
    ],
    'cave'
  ),
];
export default storyNodes;
