import { useState, useEffect, useRef } from 'react';
import Choices from '../components/Choices';
import { fetchStoryNode } from '../api';
import '../styles.css';
import { ReactTyped } from 'react-typed';

const GamePage = () => {
  const [currentNode, setCurrentNode] = useState(null);
  const [error, setError] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const audioCache = {
    start: '../assets/audio/cave-ambiance.mp3',
    cave: '../assets/audio/cave-ambiance.mp3',
    forest: '../assets/audio/cave-ambiance.mp3',
    mountain: '../assets/audio/cave-ambiance.mp3',
  };

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

  useEffect(() => {
    if (currentNode && currentNode.location) {
      const file = audioCache[currentNode.location];
      console.log('Setting audio file:', file);
      setAudioFile(file);
    }
  }, [currentNode]);

  const handleStartGame = () => {
    setHasInteracted(true);
    if (audioRef.current) {
      console.log('Playing audio file:', audioFile);
      audioRef.current.play().catch((err) => {
        console.error('Audio playback failed:', err);
      });
    }
  };

  const handleAudio = async () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

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
      {!hasInteracted ? (
        <button onClick={handleStartGame}>Start Game</button>
      ) : (
        <>
          <audio ref={audioRef} loop autoPlay>
            <source src={audioFile} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
          <button onClick={handleAudio}>
            {isPlaying ? 'Pause Audio' : 'Play Audio'}
          </button>
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
        </>
      )}
    </div>
  );
};

export default GamePage;
