const BASE_URL = "http://localhost:3001/story";

export const fetchStoryNode = async (nodeId) => {
  const response = await fetch(`${BASE_URL}/${nodeId}`);
  if (!response.ok) throw new Error("Failed to fetch story node");
  return response.json();
};
