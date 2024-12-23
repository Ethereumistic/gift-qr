import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const RevealedCard: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
<motion.div
  className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-gradient-to-bl from-pink-400 to-pink-700"
  animate={{ rotate: [0, -1, 1, -1, 1, 0] }}
  transition={{
    duration: 5, // Keep the wobble animation at the same speed
    ease: "easeInOut",
    repeat: Infinity, // Make it repeat infinitely
    repeatType: "reverse" // Optional: Creates a smoother reverse effect
  }}
>

        <Image
          src="/run.png"
          alt="jordans"
          height={400}
          width={400}
          className="object-contain"
        />
        <p className="text-base sm:text-xl mt-4 mb-2 text-white text-center font-bold">
          Пътека за Бягане
        </p>
        <p className="text-sm text-white">
          Чудесен избор за тези, които търсят стабилна домашна бягаща пътека от висок клас. 
          Усъвършенстваната пътека предлага устойчивост, съчетана със съвременен стил, за да подобри Вашето тренировъчно изживяване.
        </p>
      </motion.div>
    </motion.div>
  );
};
