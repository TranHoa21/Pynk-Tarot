"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    "/images/z6557883710739_854251eda42a85f931e062c3d3d9b356.jpg",
    "/images/z6557883713078_1f171db209fc5f5a08cbd5ad79431198.jpg",
    "/images/z6557883713874_a9f8288efee15edeba06db06a2d4c8dd.jpg",
    "/images/z6557883731513_0219e606a824c9a5a9e6741df7fff56f.jpg",
];

export default function TestimonialsSlider() {
    return (
        <section id="testimonials" className="py-20 bg-[#fdf7f8]">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
                    Khách hàng nói gì về chúng tôi
                </h2>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1200: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                >
                    {testimonials.map((src, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <motion.div
                                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 max-w-xs"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative w-full h-[400px]">
                                    <Image
                                        src={src}
                                        alt={`Testimonial ${index + 1}`}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
