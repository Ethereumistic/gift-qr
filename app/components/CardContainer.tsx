"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { InitialCard } from './InitialCard';
import { RevealedCard } from './RevealedCard';
import AutoPlayAudio from './AutoPlayAudio';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

export const CardContainer: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsSpinning(true);
      setTimeout(() => {
        setIsSpinning(false);
        setIsRevealed(true);
        setShowConfetti(true);
      }, 2000);
    }
  };

  return (
    <div className="">
      {showConfetti && <Confetti className='' />}
      
      {!isRevealed ? (
        <InitialCard onReveal={handleReveal} isSpinning={isSpinning} />
      ) : (
        <RevealedCard />
      )}
      <div className='flex justify-center mx-auto'>
      <AutoPlayAudio isRevealed={false} />
      </div>
    </div>
  );
};