// 🎨 Blog.tsx - Giao diện màu chủ đạo nhẹ nhàng (hồng/tím/cam pastel)

"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

interface BlogPost {
    id: string
    title: string
    slug: string
    imageUrl: string
    metaDescription: string
    category: Category
    createdAt: string
}

interface Category {
    name: string
    slug: string
}

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState('All')

    useEffect(() => {
        fetchPosts()
        fetchCategories()
    }, [])

    const fetchPosts = async () => {
        try {
            const res = await fetch('/api/posts')
            const data = await res.json()
            setPosts(data)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching posts:', error)
            setLoading(false)
        }
    }

    const fetchCategories = async () => {
        try {
            const res = await fetch('/api/categories')
            const data = await res.json()
            setCategories(data)
        } catch (error) {
            console.error('Error fetching categories:', error)
        }
    }

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    const filteredPosts = posts?.filter(post =>
        selectedCategory === 'All' || post.category?.name === selectedCategory
    )

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-b from-[#FFECD2] via-[#FADADD] to-[#EFD6FF] min-h-screen py-12 px-4 w-full mt-[5%]"
        >
            {/* Hero Section */}
            <section className="text-center mb-10">
                <h1 className="text-4xl font-bold text-[#B76E79]">Blog / Brand Story / Creative Corner</h1>
                <p className="text-lg text-gray-700 mt-4">
                    Khám phá những bài viết sáng tạo và câu chuyện thương hiệu đầy cảm hứng.
                </p>
            </section>

            {/* Filter / Category Tabs */}
            <div className="mb-8">
                <div className="flex justify-center gap-6 flex-wrap">
                    {['All', ...categories].map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryChange(category)}
                            className={`text-lg font-semibold ${selectedCategory === category ? 'text-[#B76E79] underline' : 'text-gray-600'
                                } hover:text-[#B76E79] transition`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Blog Grid/List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                    <p className="text-center text-[#B76E79]">Đang tải bài viết...</p>
                ) : (
                    filteredPosts?.map((post) => (
                        <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="relative w-full h-48">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold text-[#B76E79]">{post.title}</h2>
                                <p className="text-gray-600 mt-2">{post.metaDescription}</p>
                                <p className="text-gray-400 text-sm mt-4">{new Date(post.createdAt).toLocaleDateString()}</p>
                                <a href={`/blog/${post.slug}`} className="inline-block mt-4 text-[#B76E79] hover:underline">
                                    Đọc tiếp →
                                </a>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
                <button className="px-6 py-2 bg-[#B76E79] text-white font-semibold rounded-full hover:bg-[#d1929b]">
                    Tải thêm
                </button>
            </div>

            {/* Sidebar */}
            <div className="md:flex md:space-x-8 mt-12">
                {/* Featured Posts */}
                <div className="md:w-1/4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-[#B76E79] mb-4">Bài Viết Nổi Bật</h3>
                        <ul>
                            {posts?.slice(0, 5).map((post) => (
                                <li key={post.id} className="mb-3">
                                    <a href={`/post/${post.id}`} className="text-[#B76E79] hover:underline">
                                        {post.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-[#B76E79] mb-4">Đăng ký nhận tin</h3>
                        <form className="flex flex-col">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="px-4 py-2 mb-4 border border-gray-300 bg-[#fff8fa] text-gray-800 rounded-lg"
                            />
                            <button
                                type="submit"
                                className="bg-[#B76E79] text-white py-2 rounded-lg hover:bg-[#d1929b]"
                            >
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>

                {/* Extra content */}
                <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Popular Topics */}
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-[#B76E79] mb-4">Chủ Đề Phổ Biến</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Quà tặng', 'Thủ công', 'Thiết kế', 'Bảo quản sản phẩm'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-[#fff0f4] border text-sm rounded-full text-[#B76E79] hover:bg-[#B76E79] hover:text-white cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="italic text-gray-700">
                            “Sáng tạo là trí thông minh đang tận hưởng niềm vui.” – Albert Einstein
                        </p>
                    </div>

                    {/* Follow */}
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-lg font-semibold text-[#B76E79] mb-2">
                            Theo dõi chúng mình nhé!
                        </p>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            className="text-[#B76E79] underline hover:text-pink-600"
                        >
                            Follow fanpage →
                        </a>
                    </div>

                    {/* Most Viewed */}
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-[#B76E79] mb-4">Xem Nhiều Nhất</h3>
                        <ul className="list-disc ml-4 text-gray-700 space-y-2">
                            <li>
                                <a href="#" className="hover:underline">
                                    Tại sao quà handmade lại quý giá?
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Gợi ý quà tặng theo cung hoàng đạo
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    5 ý tưởng gói quà đẹp mắt
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Blog
