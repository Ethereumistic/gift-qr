import Link from "next/link";
import { giftRegistry } from "@/lib/gifts";
import { clsx } from "clsx";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-8 gap-6 bg-neutral-950">
      <h1 className="text-3xl font-bold text-white mb-8">Коледа 2025 🎄</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {Object.values(giftRegistry).map((gift) => (
          <Link
            key={gift.slug}
            href={`/${gift.slug}`}
            className="group"
          >
            <div className={clsx(
              "w-40 h-40 rounded-2xl flex flex-col items-center justify-center transition-transform hover:scale-105",
              "bg-gradient-to-br shadow-lg",
              gift.theme === 'pink' ? "from-pink-400 to-pink-600 shadow-pink-500/20" : "from-blue-400 to-blue-600 shadow-blue-500/20"
            )}>
              <div className="text-4xl mb-2">🎁</div>
              <span className="text-white font-bold text-lg">{gift.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
