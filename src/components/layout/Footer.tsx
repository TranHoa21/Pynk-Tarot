"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-[#333] border-t border-gray-200 pt-12 text-sm">
            <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
                {/* Thông tin công ty */}
                <div>
                    <h2 className="text-xl font-bold text-[#031d2e] mb-4">PynkTarot</h2>
                    <p>Số 108, đường Adam<br />New York, NY 535022</p>
                    <p className="mt-3">
                        <strong>Điện thoại:</strong> +1 5589 55488 55<br />
                        <strong>Email:</strong> info@example.com
                    </p>
                </div>

                {/* Liên kết hữu ích */}
                <div>
                    <h3 className="font-semibold text-[#031d2e] mb-4">Liên kết hữu ích</h3>
                    <ul className="space-y-2 text-[#555]">
                        {["Trang chủ", "Giới thiệu", "Dịch vụ", "Blog", "Liên hệ"].map((item, idx) => (
                            <li key={idx}>
                                <Link href="/" className="hover:text-[#031d2e] transition">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Dịch vụ của chúng tôi */}
                <div>
                    <h3 className="font-semibold text-[#031d2e] mb-4">Dịch vụ của chúng tôi</h3>
                    <ul className="space-y-2 text-[#555]">
                        {[
                            "Trải bài tổng quan",
                            "Trải bài tình yêu & mối quan hệ",
                            "Trải bài sự nghiệp",
                            "Trải bài tâm linh & khám phá bản thân",
                            "Trải bài chuyên sâu theo chủ đề",
                            "Trải bài tài chính",
                        ].map((item, idx) => (
                            <li key={idx}>
                                <Link href="/serviceDetail" className="hover:text-[#031d2e] transition">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mạng xã hội */}
                <div>
                    <h3 className="font-semibold text-[#031d2e] mb-4">Kết nối mạng xã hội</h3>
                    <p className="mb-4 text-[#555]">Theo dõi chúng mình để nhận thêm nhiều thông tin và năng lượng tích cực mỗi ngày.</p>
                    <div className="flex gap-2">
                        {[FaTimes, FaFacebookF, FaInstagram, FaLinkedin].map((Icon, idx) => (
                            <Link href="#" key={idx}>
                                <div className="w-8 h-8 border border-[#ccc] rounded-md flex items-center justify-center hover:bg-[#031d2e] hover:text-white transition">
                                    <Icon size={14} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 text-center py-4 text-xs text-[#666]">
                © Bản quyền <strong>PynkTarot</strong> | Mọi quyền được bảo lưu<br />
                Thiết kế bởi <span className="text-[#031d2e]">Software Trần Hòa</span>
            </div>
        </footer>
    );
};

export default Footer;
