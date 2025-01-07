import { useState, useEffect } from 'react';
import { fetchStoryNode } from './api';

const App = () => {
  const [currentNode, setCurrentNode] = useState(null);
  const [error, setError] = useState(null);

  // Fetch the first story node on load
  useEffect(() => {
    const loadStoryNode = async () => {
      try {
        const node = await fetchStoryNode('start'); // Fetch the start node
        setCurrentNode(node); // Update state
      } catch (err) {
        setError(err.message); // Handle errors
      }
    };

    loadStoryNode();
  }, []);

  const handleChoice = async (nextNodeId) => {
    try {
      const node = await fetchStoryNode(nextNodeId); // Fetch the next node
      setCurrentNode(node); // Update state
    } catch (err) {
      setError(err.message); // Handle errors
    }
  };

  if (error) return <p>Error: {error}</p>;
  if (!currentNode) return <p>Loading...</p>;

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>{currentNode.title}</h1>
      <p className='mb-6'>{currentNode.description}</p>
      <div>
        {currentNode.choices.map((choice, index) => (
          <button
            key={index}
            className='border p-2 m-2'
            onClick={() => handleChoice(choice.nextNode)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
