"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaComment } from "react-icons/fa";
import { motion } from "framer-motion";

const blogPosts = [
    {
        title: "Bí quyết để hiểu rõ hơn về chính mình qua bài Tarot.",
        description:
            "Khám phá cách bài Tarot giúp bạn kết nối với nội tâm, hiểu rõ cảm xúc và đưa ra những quyết định sáng suốt hơn trong cuộc sống.",
        image: "/images/reading-lines-hand-man-s-hands-close-view.jpg",
        date: "29 Tháng 7, 2020",
        author: "Quản trị viên",
        comments: 0,
        link: "/blog_detail",
    },
    {
        title: "Lá bài nói gì về hành trình tình yêu của bạn?",
        description:
            "Cùng tìm hiểu ý nghĩa các lá bài khi trải bài về tình yêu – những dấu hiệu của người định mệnh, bài học tâm linh và tương lai của mối quan hệ.",
        image: "/images/high-angle-woman-reading-tarot_23-2150396503.jpg",
        date: "29 Tháng 7, 2020",
        author: "Quản trị viên",
        comments: 0,
        link: "/blog_detail",
    },
    {
        title: "Giới thiệu các kiểu trải bài Tarot phổ biến.",
        description:
            "Tìm hiểu về các phương pháp trải bài như Celtic Cross, Three Cards Spread và cách áp dụng chúng để giải mã các câu hỏi trong cuộc sống.",
        image: "/images/reading-lines-hand-man-s-hands.jpg",
        date: "29 Tháng 7, 2020",
        author: "Quản trị viên",
        comments: 0,
        link: "/blog_detail",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
    }),
};

const BlogSection: React.FC = () => {
    return (
        <section className="py-20 bg-[#fdf7f8]">
            <div className="container mx-auto max-w-7xl px-4">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={0}
                >
                    <h1 className="text-4xl font-bold text-[#222] mb-4">Bài Viết Mới Nhất</h1>
                    <p className="text-base text-[#555] leading-relaxed">
                        Chúng tôi chia sẻ những bài viết hữu ích về Tarot, chữa lành và phát triển bản thân. <br />
                        Hãy cùng khám phá hành trình tâm linh của chính bạn nhé!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-md transition duration-300"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={index * 0.2}
                        >
                            <div className="relative w-full h-60">
                                <Link href={post.link}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </Link>
                                <span className="absolute bottom-0 right-0 m-4 bg-[#B76E79] text-white text-xs font-semibold px-4 py-2 rounded-tl-lg">
                                    {post.date}
                                </span>
                            </div>

                            <div className="p-6">
                                <ul className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
                                    <li className="flex items-center gap-2">
                                        <FaUser className="w-4 h-4" />
                                        Bởi - {post.author}
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaComment className="w-4 h-4" />
                                        {post.comments} bình luận
                                    </li>
                                </ul>

                                <h4 className="text-lg font-bold text-[#222] mb-2 transition-colors duration-300 group-hover:text-[#B76E79] leading-snug">
                                    <Link href={post.link}>{post.title}</Link>
                                </h4>

                                <p className="text-[#444] text-sm leading-relaxed">{post.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
