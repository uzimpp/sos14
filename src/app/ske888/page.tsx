"use client";

import { useState } from "react";

const SYMBOLS = ["🍒", "🍋", "🔔", "⭐", "𝟕"];
const SPIN_COST = 20;
const INITIAL_MONEY = 100;
const LEVEL_UP_AMOUNT = 100;
const SPIN_ANIMATION_DURATION = 900; // ms
const SPIN_ANIMATION_INTERVAL = 60; // ms

function getReward(slots: string[]) {
  if (slots[0] === slots[1] && slots[1] === slots[2]) {
    if (slots[0] === "𝟕") return 100;
    return 50;
  }
  if (slots[0] === slots[1] || slots[1] === slots[2] || slots[0] === slots[2]) {
    return 20;
  }
  return 0;
}

export default function SKE888() {
  const [money, setMoney] = useState(INITIAL_MONEY);
  const [level, setLevel] = useState(1);
  const [slots, setSlots] = useState(["🍒", "🍋", "🔔"]);
  const [message, setMessage] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    if (money < SPIN_COST || isSpinning) return;
    setIsSpinning(true);
    setMessage(null);

    const spinInterval = setInterval(() => {
      setSlots([
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      ]);
    }, SPIN_ANIMATION_INTERVAL);

    setTimeout(() => {
      clearInterval(spinInterval);
      const newSlots = [
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      ];
      setSlots(newSlots);

      const reward = getReward(newSlots);
      const newMoney = money - SPIN_COST + reward;
      setMoney(newMoney);

      if (newMoney >= level * LEVEL_UP_AMOUNT) {
        setLevel(level + 1);
        setMessage(`🎉 Level Up! Welcome to Level ${level + 1}!`);
      } else if (reward > 0) {
        setMessage(`You won $${reward}!`);
      } else {
        setMessage("No win, try again!");
      }

      setIsSpinning(false);
    }, SPIN_ANIMATION_DURATION);
  };

  const handleReset = () => {
    setMoney(INITIAL_MONEY);
    setLevel(1);
    setSlots(["🍒", "🍋", "🔔"]);
    setMessage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-yellow-400 mb-2 animate-pulse">
            🎰 SKE888 SLOT MACHINE 🎰
          </h1>
          <p className="text-white/80 text-lg">Test your luck and win big!</p>
        </div>

        {/* Info */}
        <div className="flex justify-center gap-8 mb-6">
          <div className="bg-black/40 rounded-lg px-6 py-2 text-white text-xl font-semibold">
            💰 Money: <span className="text-green-300">${money}</span>
          </div>
          <div className="bg-black/40 rounded-lg px-6 py-2 text-white text-xl font-semibold">
            🏆 Level: <span className="text-yellow-300">{level}</span>
          </div>
        </div>

        {/* Slot Machine */}
        <div className="flex flex-col items-center">
          <div className="flex gap-4 mb-4">
            {slots.map((symbol, i) => (
              <div
                key={i}
                className="w-36 h-36 flex items-center justify-center bg-white/20 rounded-2xl text-8xl border-4 border-yellow-400 shadow-lg transition-all"
              >
                {symbol}
              </div>
            ))}
          </div>
          <button
            className={`px-8 py-3 bg-yellow-400 text-2xl font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition disabled:opacity-50`}
            onClick={handleSpin}
            disabled={money < SPIN_COST || isSpinning}
          >
            {isSpinning ? "Spinning..." : `Spin (-$${SPIN_COST})`}
          </button>
          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition"
            onClick={handleReset}
          >
            Reset Game
          </button>
          {message && (
            <div className="mt-4 text-2xl text-white font-bold">{message}</div>
          )}
          {money < SPIN_COST && (
            <div className="mt-4 text-red-400 font-bold text-lg">
              Not enough money! Reset to play again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
