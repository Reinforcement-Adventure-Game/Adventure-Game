import { useState, useEffect } from 'react';
import Choices from '../components/Choices';
import { fetchStoryNode } from '../api';
import '../styles.css';
import { ReactTyped } from 'react-typed';

const GamePage = () => {
  const [currentNode, setCurrentNode] = useState(null);
  const [history, setHistory] = useState([]);
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
      if (currentNode) {
        setHistory([currentNode]);
      }
      const node = await fetchStoryNode(nextNodeId);
      setCurrentNode(node);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const lastNode = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setCurrentNode(lastNode);
    }
  };

  if (error) return <p>Error: {error}</p>;
  if (!currentNode) return <p>Loading...</p>;

  return (
    <div className={`${currentNode.location}-container`}>
      <h1 className={`${currentNode.location}-h1`}>
        <ReactTyped
          strings={[currentNode.title]}
          typeSpeed={100}
          showCursor={false}
        />
      </h1>
      <p className={`${currentNode.location}-p`}>
        {currentNode.description}
      </p>
      <div className='choice-container'>
        {currentNode.choices.map((choice, index) => (
          <Choices
            key={index}
            text={choice.text}
            onClick={() => handleChoice(choice.nextNode)}
            className={`${currentNode.location}-choiceButton`}
          />
        ))}
      </div>
      {history.length > 0 && (
        <button onClick={handleBack} className={`${currentNode.location}-backButton`}>
          Back
        </button>
      )}
    </div>
  );
};

export default GamePage;
