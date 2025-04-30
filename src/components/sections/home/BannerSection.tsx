'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const tarotImages = [
    '/images/8673193.jpg',
    '/images/8673204.jpg',
    '/images/8673212.jpg',
]

export default function HeroBanner() {
    const [cards, setCards] = useState(tarotImages)

    // Shuffle every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => [...prev].sort(() => Math.random() - 0.5))
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-pink-100 to-pink-200 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-50 z-0 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-16 items-center">
                {/* Text */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 font-[cursive] leading-snug">
                        Khám phá định mệnh <br /> của bạn qua thông điệp từ những lá bài
                    </h1>
                    <p className="mt-4 text-gray-700 text-lg">
                        Mọi câu trả lời đều đã được vũ trụ an bài –  Giờ là lúc cùng nhau giải mã!                    </p>
                    <Link
                        href="#"
                        className="inline-block mt-6 bg-[#B76E79] text-white px-6 py-3 rounded-md shadow hover:bg-[#D29BA3] transition"
                    >
                        Get Started →
                    </Link>
                </div>

                {/* Tarot cards */}
                <div className="relative flex justify-center items-center h-[400px]">
                    {cards.map((src, index) => (
                        <Image
                            key={src}
                            src={src}
                            alt={`Tarot card ${index}`}
                            width={200}
                            height={300}
                            className={`absolute transition-all duration-700 ease-in-out drop-shadow-2xl
                ${index === 0 ? 'rotate-[-10deg] left-0 z-10' : ''}
                ${index === 1 ? 'rotate-[0deg] left-1/3 z-20' : ''}
                ${index === 2 ? 'rotate-[10deg] left-2/3 z-10' : ''}
              `}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
