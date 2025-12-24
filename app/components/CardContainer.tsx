"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { InitialCard } from './InitialCard';
import { RevealedCard } from './RevealedCard';
import AutoPlayAudio from './AutoPlayAudio';
import { GiftConfig } from '@/lib/gifts';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

interface CardContainerProps {
  config: GiftConfig;
}

export const CardContainer: React.FC<CardContainerProps> = ({ config }) => {
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
        <InitialCard onReveal={handleReveal} isSpinning={isSpinning} config={config} />
      ) : (
        <RevealedCard config={config} />
      )}
      <div className='flex justify-center mx-auto'>
        <AutoPlayAudio isRevealed={false} songPath={config.songPath} theme={config.theme} />
      </div>
    </div>
  );
};