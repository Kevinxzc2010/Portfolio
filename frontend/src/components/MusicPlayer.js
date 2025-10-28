import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showVolume, setShowVolume] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showHint, setShowHint] = useState(true);
  const audioRef = useRef(null);

  // 页面加载后立即静音播放
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.muted = true;
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay failed:', error);
        }
      }
    };

    playAudio();
  }, []);

  useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = volume;
    }
  }, [volume, isMuted]);

  const handleUnmute = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      setIsMuted(false);
      setShowHint(false);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        // 如果还是静音的，点击播放时取消静音
        if (isMuted) {
          handleUnmute();
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      // 调整音量时自动取消静音
      if (isMuted) {
        handleUnmute();
      }
    }
  };

  return (
    <div className="music-player">
      <audio 
        ref={audioRef} 
        loop 
        src="/music/COS.mp3"
      />
      
      {/* 漂浮的手指提示 */}
      {showHint && isMuted && (
        <div className="floating-hint" onClick={handleUnmute}>
          <span className="finger-emoji">👇</span>
          <span className="hint-text">Enable Music</span>
        </div>
      )}
      
      <div className="music-controls">
        <button 
          className={`play-button ${isPlaying ? 'playing' : ''} ${isMuted ? 'muted' : ''}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        
        <button 
          className="volume-button"
          onClick={() => setShowVolume(!showVolume)}
          aria-label="Volume control"
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        
        {showVolume && (
          <div className="volume-control">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MusicPlayer;