import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AutoPlayAudioProps {
  isRevealed: boolean;
}

const AutoPlayAudio: React.FC<AutoPlayAudioProps> = ({ isRevealed }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.muted = true;
          await audioRef.current.play();
        }
      } catch (error) {
        console.error("Audio autoplay blocked:", error);
      }
    };
    playAudio();
  }, []);

  useEffect(() => {
    if (isRevealed && audioRef.current) {
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  }, [isRevealed]);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/song.mp3" loop />
      {isRevealed && (
        <button
          onClick={toggleMute}
          className="mt-4 p-2 rounded-full bg-pink-300 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-pink-600" />
          ) : (
            <Volume2 className="w-6 h-6 text-pink-600" />
          )}
        </button>
      )}
    </>
  );
};

export default AutoPlayAudio;