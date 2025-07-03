'use client'
import { useState } from 'react'
import Image from 'next/image'

const SYMBOLS = [
    {
        icon: (
            <Image
                src="/game/slot/donut.svg"
                alt="Donut"
                width={64}
                height={64}
            />
        ),
        value: 2,
        name: 'donut',
    },
    {
        icon: (
            <Image
                src="/game/slot/cherry.svg"
                alt="Cherry"
                width={64}
                height={64}
            />
        ),
        value: 3,
        name: 'cherry',
    },
    {
        icon: (
            <Image
                src="/game/slot/bear.svg"
                alt="Bear"
                width={64}
                height={64}
            />
        ),
        value: 5,
        name: 'bear',
    },
    {
        icon: (
            <Image
                src="/game/slot/diamond.svg"
                alt="Diamond"
                width={64}
                height={64}
            />
        ),
        value: 10,
        name: 'diamond',
    },
    {
        icon: (
            <Image
                src="/game/slot/jackpot.svg"
                alt="Jackpot"
                width={64}
                height={64}
            />
        ),
        value: 20,
        name: 'jackpot',
    },
]

const INITIAL_MONEY = 100
const SPIN_ANIMATION_DURATION = 900
const SPIN_ANIMATION_INTERVAL = 60

function getReward(slots: number[], bet: number) {
    if (slots[0] === slots[1] && slots[1] === slots[2]) {
        return bet * SYMBOLS[slots[0]].value
    }
    if (
        slots[0] === slots[1] ||
        slots[1] === slots[2] ||
        slots[0] === slots[2]
    ) {
        // Two match: use the lower value
        const matchIdx =
            slots[0] === slots[1]
                ? slots[0]
                : slots[1] === slots[2]
                ? slots[1]
                : slots[0]
        return bet * SYMBOLS[matchIdx].value
    }
    return 0
}

export default function SKE888() {
    const [money, setMoney] = useState(INITIAL_MONEY)
    const [slots, setSlots] = useState([0, 1, 2])
    const [message, setMessage] = useState<string | null>(null)
    const [isSpinning, setIsSpinning] = useState(false)
    const [bet, setBet] = useState(10)

    const handleSpin = () => {
        if (money < bet || isSpinning) return
        setIsSpinning(true)
        setMessage(null)

        const spinInterval = setInterval(() => {
            setSlots([
                Math.floor(Math.random() * SYMBOLS.length),
                Math.floor(Math.random() * SYMBOLS.length),
                Math.floor(Math.random() * SYMBOLS.length),
            ])
        }, SPIN_ANIMATION_INTERVAL)

        setTimeout(() => {
            clearInterval(spinInterval)
            const newSlots = [
                Math.floor(Math.random() * SYMBOLS.length),
                Math.floor(Math.random() * SYMBOLS.length),
                Math.floor(Math.random() * SYMBOLS.length),
            ]
            setSlots(newSlots)

            const reward = getReward(newSlots, bet)
            const newMoney = money - bet + reward
            setMoney(newMoney)

            if (reward > 0) {
                setMessage(`You won $${reward}!`)
            } else {
                setMessage('No win, try again!')
            }

            setIsSpinning(false)
        }, SPIN_ANIMATION_DURATION)
    }

    const handleReset = () => {
        setMoney(INITIAL_MONEY)
        setSlots([0, 1, 2])
        setMessage(null)
        setBet(10)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 flex flex-col items-center">
            <div className="max-w-xl w-full mx-auto">
                <div className="text-center mb-4">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-1 animate-pulse">
                        🎰 SKE888 SLOT MACHINE 🎰
                    </h1>
                    <p className="text-white/80 text-base">
                        Test your luck and win big!
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-4">
                    <div className="bg-black/40 rounded-lg px-4 py-1 text-white text-lg font-semibold">
                        💰 Money:{' '}
                        <span className="text-green-300">${money}</span>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="mb-2 flex flex-col items-center">
                        <label className="text-white font-bold text-base mb-1">
                            Bet Amount
                        </label>
                        <input
                            type="text"
                            value={bet === 0 ? '' : bet}
                            onChange={(e) => {
                                // Only allow digits
                                const val = e.target.value.replace(/\D/g, '')
                                if (val === '') {
                                    setBet(0)
                                } else {
                                    const num = Math.max(
                                        1,
                                        Math.min(Number(val), money)
                                    )
                                    setBet(num)
                                }
                            }}
                            onBlur={() => {
                                if (!bet) setBet(1)
                            }}
                            className="w-16 px-1 py-1 rounded border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-center font-semibold text-base"
                            disabled={isSpinning}
                        />
                        <span className="text-yellow-200 text-xs mt-1">
                            You can change your bet (up to your current money).
                        </span>
                    </div>
                    <div className="flex gap-2 mb-2">
                        {slots.map((idx, i) => (
                            <div
                                key={i}
                                className="w-24 h-24 flex items-center justify-center bg-white/20 rounded-xl border-2 border-yellow-400 shadow transition-all"
                            >
                                {SYMBOLS[idx].icon}
                            </div>
                        ))}
                    </div>
                    <button
                        className={`px-4 py-2 bg-yellow-400 text-lg font-bold rounded-lg shadow hover:bg-yellow-300 transition disabled:opacity-50`}
                        onClick={handleSpin}
                        disabled={money < bet || isSpinning}
                    >
                        {isSpinning ? 'Spinning...' : `Spin (-$${bet})`}
                    </button>
                    <button
                        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-400 transition"
                        onClick={handleReset}
                    >
                        Reset Game
                    </button>
                    {message && (
                        <div className="mt-2 text-lg text-white font-bold">
                            {message}
                        </div>
                    )}
                    {money < bet && (
                        <div className="mt-2 text-red-400 font-bold text-base">
                            Not enough money! Reset to play again.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
