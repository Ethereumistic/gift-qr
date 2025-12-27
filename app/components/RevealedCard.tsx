import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AutoPlayAudio from './AutoPlayAudio';
import { GiftConfig } from '@/lib/gifts';
import { clsx } from 'clsx';

interface RevealedCardProps {
  config: GiftConfig;
}

export const RevealedCard: React.FC<RevealedCardProps> = ({ config }) => {
  const gradientClass = clsx(
    "rounded-[22px] max-w-sm p-4 sm:p-10 bg-gradient-to-bl",
    config.theme === 'pink' ? "from-pink-400 to-pink-700" :
      config.theme === 'blue' ? "from-blue-400 to-blue-700" :
        "from-red-400 to-red-700"
  );

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="flex flex-col items-center"
    >
      <motion.div
        className={gradientClass}
        animate={{ rotate: [0, -1, 1, -1, 1, 0] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Image
          src={config.revealedImage}
          alt={config.revealedTitle}
          height={400}
          width={400}
          className="object-contain"
        />
        <p className="text-base sm:text-xl mt-4 mb-2 text-white text-center font-bold">
          {config.revealedTitle}
        </p>

        {config.specs ? (
          <div className="w-full mt-2 space-y-2">
            {config.specs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center text-sm sm:text-base border-b border-white/20 pb-1 last:border-0">
                <span className="text-white/80 font-medium">{spec.label}:</span>
                <span className="text-white font-bold">{spec.value}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-white">
            {config.revealedDescription}
          </p>
        )}
      </motion.div>
      <AutoPlayAudio isRevealed={true} songPath={config.songPath} theme={config.theme} />
    </motion.div>
  );
};