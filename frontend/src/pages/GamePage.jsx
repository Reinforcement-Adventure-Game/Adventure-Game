import { useState, useEffect, useRef } from 'react';
import Choices from '../components/Choices';
import { fetchStoryNode } from '../api';
import '../styles.css';
import { ReactTyped } from 'react-typed';

const GamePage = () => {
  const [currentNode, setCurrentNode] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const audioCache = {
    start: '../assets/audio/start-ambiance.mp3',
    cave: '../assets/audio/cave-ambiance.mp3',
    fireycave: '../assets/audio/firey-cave-ambiance.mp3',
    forest: '../assets/audio/forest-ambiance.mp3',
    mountain: '../assets/audio/mountain-ambiance.mp3',
    heavenly: '../assets/audio/heavenly-ambiance.mp3',
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
      console.log('location choice', currentNode.location);
      console.log('cache location match', audioCache[currentNode.location]);
      console.log('audioFile', audioFile);
      setAudioFile(file);
    }
  }, [currentNode]);

  useEffect(() => {
    if (audioRef.current && audioFile) {
      audioRef.current.load(); // Reloads the audio with the new source
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error('Audio playback failed:', err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [audioFile, isPlaying]);

  const handleStartGame = () => {
    setHasInteracted(true);
    if (audioRef.current && audioFile) {
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
      if (currentNode) {
        setHistory([currentNode]);
      }
      const fetchedNode = await fetchStoryNode(nextNodeId);
      setCurrentNode(fetchedNode);
      setAudioFile(audioCache[fetchedNode.location]);
      console.log('location choice', fetchedNode.location);
      console.log('cache location match', audioCache[fetchedNode.location]);
      console.log('audioFile', audioFile);
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
      {currentNode && (
        <button
          className={`${currentNode.location}-audioButton`}
          onClick={handleAudio}
        >
          {isPlaying ? 'Pause Audio' : 'Play Audio'}
        </button>
      )}
      {!hasInteracted ? (
        <button className='btn-start' onClick={handleStartGame}>
          Start Game
        </button>
      ) : (
        <>
          <audio ref={audioRef} loop autoPlay>
            <source src={audioFile} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
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
        </>
      )}
      {history.length > 0 && (
        <button
          onClick={handleBack}
          className={`${currentNode.location}-backButton`}
        >
          Back
        </button>
      )}
    </div>
  );
};

export default GamePage;
