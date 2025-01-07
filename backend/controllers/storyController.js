import storyNodes from "../data/storyData.js";

export const fetchStoryNode = (req, res) => {
  const { id } = req.params;
  const node = storyNodes[id];
  if (!node) return res.status(404).json({ error: "Story node not found" });
  res.json(node);
};
