'use client'

import { useState } from 'react'
import problemsData from '@/constant/problems'
import Image from 'next/image'
import Link from 'next/link'
interface Problem {
    number: string
    name: string
    description: string
    image: string
    url: string
}

interface DayData {
    days: number
    problems: Problem[]
}

export default function ProblemList() {
    const [CurrentDay, setCurrentDay] = useState(1)

    // push to url (use query params)
    // localStorage (Per browser, Per user) => track progress
    // map matched days
    function mapProblems() {
        const CurrentDayData = problemsData.find(
            (item: DayData) => item.days === CurrentDay
        )
        if (!CurrentDayData) return null
        const currentDayProblems = CurrentDayData?.problems || []

        return currentDayProblems.map((problem: Problem, i: number) => (
            <div
                key={i}
                className="bg-white/10 rounded-xl shadow-lg p-5 flex flex-col items-center border border-white/20"
            >
                <div className="relative w-40 h-32 mb-3">
                    <Image
                        src={problem.image}
                        alt={problem.name}
                        fill
                        className="object-contain rounded-lg"
                    />
                </div>
                <h6 className="font-semibold text-lg mb-1 text-center">
                    {problem.number}. {problem.name}
                </h6>
                <p className="text-sm text-center mb-3">
                    {problem.description}
                </p>
                <div className="flex flex-row gap-3 items-center">
                    <Link
                        target="_blank"
                        href={problem.url}
                        className="bg-light-purple px-4 py-1 rounded-lg text-white font-medium"
                    >
                        View
                    </Link>
                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-green-500"
                    />
                </div>
            </div>
        ))
    }

    return (
        <section className="flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8">
            <div className="w-full max-w-xl mx-auto px-2">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex gap-3">
                        {[1, 2, 3].map((day) => (
                            <button
                                key={day}
                                onClick={() => setCurrentDay(day)}
                                className={`font-medium px-4 py-1 rounded-lg pixel-corners-s ${
                                    CurrentDay === day
                                        ? 'bg-green text-black'
                                        : 'bg-light-purple text-white'
                                }`}
                            >
                                Day {day}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-white/20 px-3 py-1 rounded-lg text-white">
                            resources
                        </button>
                        <button className="bg-white/20 px-3 py-1 rounded-lg text-white">
                            hide completed
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                    {mapProblems()}
                </div>
            </div>
        </section>
    )
}
