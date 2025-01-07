class StoryBeat {
  constructor(
    id,
    title,
    description,
    choices = [],
    sound = '',
    backgroundColor = ''
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.choices = choices; // Array of choices { text: string, nextNode: string }
    this.sound = sound;
    this.backgroundColor = backgroundColor;
  }
}

export default StoryBeat;
