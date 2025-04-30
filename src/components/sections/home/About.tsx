import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="bg-[#fdf7f8] py-16">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-900">Giới Thiệu</h2>
                    <p className="text-lg mt-2">
                        <span className="text-[#6b46c1] font-semibold">Tìm Hiểu Thêm</span>{" "}
                        <span className="text-[#B76E79] font-semibold">Về Chúng Tôi</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Image */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <Image
                            src="/images/high-angle-woman-reading-tarot.jpg"
                            alt="Xem Bài Tarot"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md w-full h-auto"
                        />
                    </div>

                    {/* Right Content */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <div className="ps-0 lg:ps-6">
                            <h3 className="text-2xl font-semibold text-[#6b46c1] mb-4">
                                Chào mừng đến với Cosmic Tarot – Nơi trực giác gặp gỡ định mệnh!
                            </h3>
                            <p className="italic text-gray-700 mb-6">
                                Tại Cosmic Tarot, chúng tôi tin rằng vũ trụ ẩn chứa câu trả lời cho những bí ẩn lớn nhất của cuộc sống. Thông qua trí tuệ cổ xưa của Tarot, chúng tôi dẫn dắt bạn trên hành trình khám phá bản thân, thấu hiểu và khai sáng.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <i className="bi bi-moon-stars-fill text-[#B76E79] text-xl mr-4"></i>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            Khai mở trí tuệ từ những lá bài Tarot
                                        </h4>
                                        <p className="text-gray-700">
                                            Dù bạn đang tìm kiếm câu trả lời về tình yêu, sự nghiệp hay sự phát triển cá nhân, những trải bài của chúng tôi mang đến những góc nhìn sâu sắc và trực giác để giúp bạn định hướng cuộc sống.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <i className="bi bi-moon-stars-fill text-[#B76E79] text-xl mr-4"></i>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            Không gian linh thiêng cho sự kết nối tâm linh
                                        </h4>
                                        <p className="text-gray-700">
                                            Nền tảng của chúng tôi được thiết kế để trở thành một không gian an toàn và huyền bí, nơi bạn có thể kết nối với trí tuệ từ những lá bài tarot.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <p className="mt-6 text-gray-800">
                                Bạn đã sẵn sàng khám phá những bí mật được viết trong các vì sao chưa? Hành trình của bạn bắt đầu từ đây!
                            </p>
                            <p className="text-gray-800">
                                Hãy khám phá các trải bài của chúng tôi & bước vào thế giới nhiệm màu hôm nay!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white mt-20 py-16" id="stats">
                <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex items-center space-x-4">
                            <i className="bi bi-filter-square text-[#B76E79] text-4xl"></i>
                            <div>
                                <span className="text-3xl font-bold text-blue-900">5000+</span>
                                <p className="text-gray-700">Lượt trải bài đã thực hiện</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <i className="bi bi-award text-[#B76E79] text-4xl"></i>
                            <div>
                                <span className="text-3xl font-bold text-blue-900">10</span>
                                <p className="text-gray-700">Năm kinh nghiệm</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <i className="bi bi-emoji-smile text-[#B76E79] text-4xl"></i>
                            <div>
                                <span className="text-3xl font-bold text-blue-900">441+</span>
                                <p className="text-gray-700">Khách hàng hài lòng</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <i className="bi bi-people text-[#B76E79] text-4xl"></i>
                            <div>
                                <span className="text-3xl font-bold text-blue-900">15</span>
                                <p className="text-gray-700">Chuyên gia Tarot</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
