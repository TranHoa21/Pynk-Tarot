'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const tarotImages = [
    '/images/8673193.jpg',
    '/images/8673204.jpg',
    '/images/8673212.jpg',
]

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay },
    }),
}

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
        <section className="mt-[5%] relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-pink-100 to-pink-200 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-50 z-0 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-16 items-center">
                {/* Text */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={0}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 font-[cursive] leading-snug">
                        Khám phá định mệnh <br /> của bạn qua thông điệp từ những lá bài
                    </h1>
                </motion.div>

                <motion.p
                    className="mt-4 text-gray-700 text-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={0.2}
                >
                    Mọi câu trả lời đều đã được vũ trụ an bài – Giờ là lúc cùng nhau giải mã!
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={0.4}
                >
                    <Link
                        href="#"
                        className="inline-block mt-6 bg-[#B76E79] text-white px-6 py-3 rounded-md shadow hover:bg-[#D29BA3] transition"
                    >
                        Get Started →
                    </Link>
                </motion.div>

                {/* Tarot cards */}
                <div className="relative flex justify-center items-center h-[400px]">
                    <AnimatePresence>
                        {cards.map((src, index) => (
                            <motion.div
                                key={src}
                                layout
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                transition={{ duration: 0.6 }}
                                className={`absolute transition-all duration-700 ease-in-out drop-shadow-2xl
                  ${index === 0 ? 'rotate-[-10deg] left-0 z-10' : ''}
                  ${index === 1 ? 'rotate-[0deg] left-1/3 z-20' : ''}
                  ${index === 2 ? 'rotate-[10deg] left-2/3 z-10' : ''}
                `}
                            >
                                <Image
                                    src={src}
                                    alt={`Tarot card ${index}`}
                                    width={200}
                                    height={300}
                                    className="rounded-lg"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
