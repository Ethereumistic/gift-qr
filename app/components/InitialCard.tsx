import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GiftConfig } from '@/lib/gifts';
import { clsx } from 'clsx';

interface InitialCardProps {
  onReveal: () => void;
  isSpinning: boolean;
  config: GiftConfig;
}

export const InitialCard: React.FC<InitialCardProps> = ({ onReveal, isSpinning, config }) => {
  const gradientClass = clsx(
    "p-4 rounded-3xl bg-gradient-to-bl",
    config.theme === 'pink' ? "from-pink-200 to-pink-400" : "from-blue-200 to-blue-400"
  );

  return (
    <motion.div
      animate={isSpinning ? { rotateY: 360 * 5 } : { scale: [1, 1.05, 1] }}
      transition={{
        duration: isSpinning ? 2 : 2,
        ease: "easeInOut",
        repeat: isSpinning ? 0 : Infinity,
      }}
      onClick={onReveal}
      style={{ cursor: 'pointer' }}
    >
      <div className={gradientClass}>
        <Image
          src={config.giftImage}
          alt="gift"
          height={400}
          width={400}
          className="object-contain"
          priority
        />
        <p className="text-base sm:text-xl mt-4 mb-2 font-bold text-neutral-200 text-center">
          🎁 Отвори подаръка 🎁
        </p>
      </div>
    </motion.div>
  );
};
