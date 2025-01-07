class StoryBeat {
  constructor(id, title, description, choices = [], location = '') {
    this.id = id;
    this.title = title;
    this.description = description;
    this.choices = choices; // Array of choices indexes (ids);
    this.location = location;
  }
}

export default StoryBeat;
