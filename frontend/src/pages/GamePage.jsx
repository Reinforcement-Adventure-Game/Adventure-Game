import { useState, useEffect } from 'react';
import Choices from '../components/Choices';
import { fetchStoryNode } from '../api';

const GamePage = () => {
  const [currentNode, setCurrentNode] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStoryNode = async () => {
      try {
        const node = await fetchStoryNode('start');
        setCurrentNode(node);
      } catch (err) {
        setError(err.message);
      }
    };

    loadStoryNode();
  }, []);

  const handleChoice = async (nextNodeId) => {
    try {
      const node = await fetchStoryNode(nextNodeId);
      setCurrentNode(node);
    } catch (err) {
      setError(err.message);
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
          <Choices
            key={index}
            text={choice.text}
            onClick={() => handleChoice(choice.nextNode)}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
