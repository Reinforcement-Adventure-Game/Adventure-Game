import { useState, useEffect } from 'react';
import Choices from '../components/Choices';
import { fetchStoryNode } from '../api';
import '../styles.css';

// tailwindStyles = {'forest': {h1:'tailwind css', p: 'p styling }, 'cave'}
// const tailwindStyles = {
//   forest: {
//     container:
//       'bg-[#7CAF86] bg-gradient-to-br from-[#FEFFE3] to-[#7CAF86] text-[#FEFFE3]',
//     h1: 'text-4xl font-["DM Serif Text"] font-bold mb-4',
//     p: 'text-lg mb-6 font-["DM Serif Text"]',
//     choiceButton:
//       'bg-[#44724D] text-[#FEFFE3] hover:bg-[#FEFFE3] hover:text-[#44724D] px-4 py-2 rounded transition font-["DM Serif Text"]',
//   },
//   cave: {
//     container:
//       'bg-[#322E27] bg-radial-gradient-circle from-black to-[#322E27] text-[#FFEDC9]',
//     h1: 'text-4xl font-["Jersey 15"] font-bold mb-4',
//     p: 'text-lg mb-6 font-["Jersey 15"]',
//     choiceButton:
//       'bg-[#171513] text-[#FFEDC9] hover:bg-[#FFDC98] hover:text-[#171513] px-4 py-2 rounded transition font-["Jersey 15"]',
//   },
//   start: {
//     container: 'bg-gray-100 text-black',
//     h1: 'text-2xl font-bold',
//     p: 'text-md',
//     choiceButton: 'bg-gray-200 text-black hover:bg-gray-300',
//   },
// };

const GamePage = () => {
  const [currentNode, setCurrentNode] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStoryNode = async () => {
      try {
        const node = await fetchStoryNode(0);
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
    <div className={`${currentNode.id}-container`}>
      <h1 className={`${currentNode.id}-h1`}>{currentNode.title}</h1>
      <p className={`${currentNode.id}-p`}>{currentNode.description}</p>
      <div>
        {currentNode.choices.map((choice, index) => (
          <Choices
            key={index}
            text={choice.text}
            onClick={() => handleChoice(choice.nextNode)}
            className={`${currentNode.id}-choiceButton`}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
