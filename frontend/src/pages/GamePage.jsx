import { useState, useEffect, useRef } from 'react';
import Choices from '../components/Choices';
import { fetchStoryNode } from '../api';
import '../styles.css';
import { ReactTyped } from 'react-typed';

const GamePage = () => {
  const [currentNode, setCurrentNode] = useState(null);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);

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
    <div className={`${currentNode.location}-container`}>
      <audio ref={audioRef} loop autoPlay>
        <source src='' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <h1 className={`${currentNode.location}-h1`}>
        <ReactTyped
          strings={[currentNode.title]}
          typeSpeed={100}
          showCursor={false}
        />
      </h1>
      <p className={`${currentNode.location}-p`}>{currentNode.description}</p>
      <div>
        {currentNode.choices.map((choice, index) => (
          <Choices
            key={index}
            text={choice.text}
            onClick={() => handleChoice(choice.nextNode)}
            className={`${currentNode.location}-choiceButton`}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
