import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Theme } from "@/lib/gifts";
import { clsx } from "clsx";

interface AutoPlayAudioProps {
  isRevealed: boolean;
  songPath: string;
  theme: Theme;
}

const AutoPlayAudio: React.FC<AutoPlayAudioProps> = ({ isRevealed, songPath, theme }) => {
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

  const buttonClass = clsx(
    "mt-4 p-2 rounded-full transition-colors",
    theme === 'pink' ? "bg-pink-300 text-pink-600" : "bg-blue-300 text-blue-600"
  );

  return (
    <>
      <audio ref={audioRef} src={songPath} loop />
      {isRevealed && (
        <button
          onClick={toggleMute}
          className={buttonClass}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 " />
          ) : (
            <Volume2 className="w-6 h-6 " />
          )}
        </button>
      )}
    </>
  );
};

export default AutoPlayAudio;