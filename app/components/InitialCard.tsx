import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface InitialCardProps {
  onReveal: () => void;
  isSpinning: boolean;
}

export const InitialCard: React.FC<InitialCardProps> = ({ onReveal, isSpinning }) => {
  return (
    <motion.div
      animate={isSpinning ? { rotateY: 360 * 5 } : { scale: [1, 1.05, 1] }} // Add breathing animation
      transition={{
        duration: isSpinning ? 2 : 2, // 2 seconds for breathing
        ease: "easeInOut",
        repeat: isSpinning ? 0 : Infinity, // Repeat breathing infinitely when not spinning
      }}
      onClick={onReveal}
      style={{ cursor: 'pointer' }}
    >
      <div className="bg-gradient-to-bl from-pink-200 to-pink-400 p-4 rounded-3xl">
        <Image
          src="/gift.webp"
          alt="gift"
          height={400}
          width={400}
          className="object-contain"
        />
        <p className="text-base sm:text-xl mt-4 mb-2 font-bold text-neutral-200 text-center">
          🎁 Отвори подаръка 🎁
        </p>
      </div>
    </motion.div>
  );
};
