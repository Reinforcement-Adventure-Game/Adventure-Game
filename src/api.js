const BASE_URL = "http://localhost:3001/story";

/**
 * Fetch a story node by ID from the backend.
 * @param {string} nodeId - The ID of the story node to fetch.
 * @returns {Promise<Object>} - The story node data from the backend.
 */
export const fetchStoryNode = async (nodeId) => {
  try {
    const response = await fetch(`${BASE_URL}/${nodeId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch story node: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching story node:", error);
    throw error;
  }
};
