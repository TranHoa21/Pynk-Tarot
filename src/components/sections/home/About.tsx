import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: custom },
    }),
};

export default function AboutSection() {
    return (
        <section id="about" className="bg-[#fdf7f8] py-16">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-bold text-gray-900">Giới Thiệu</h2>
                    <p className="text-lg mt-2">
                        <span className="text-[#6b46c1] font-semibold">Tìm Hiểu Thêm</span>{" "}
                        <span className="text-[#B76E79] font-semibold">Về Chúng Tôi</span>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Image */}
                    <motion.div
                        custom={0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <Image
                            src="/images/high-angle-woman-reading-tarot.jpg"
                            alt="Xem Bài Tarot"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md w-full h-auto"
                        />
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        custom={0.2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <div className="ps-0 lg:ps-6">
                            <h3 className="text-2xl font-semibold text-[#6b46c1] mb-4">
                                Chào mừng đến với Cosmic Tarot – Nơi trực giác gặp gỡ định mệnh!
                            </h3>
                            <p className="italic text-gray-700 mb-6">
                                Tại Cosmic Tarot, chúng tôi tin rằng vũ trụ ẩn chứa câu trả lời
                                cho những bí ẩn lớn nhất của cuộc sống. Thông qua trí tuệ cổ xưa
                                của Tarot, chúng tôi dẫn dắt bạn trên hành trình khám phá bản thân,
                                thấu hiểu và khai sáng.
                            </p>
                            <ul className="space-y-6">
                                {[1, 2].map((_, i) => (
                                    <li className="flex items-start" key={i}>
                                        <i className="bi bi-moon-stars-fill text-[#B76E79] text-xl mr-4"></i>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                {i === 0
                                                    ? "Khai mở trí tuệ từ những lá bài Tarot"
                                                    : "Không gian linh thiêng cho sự kết nối tâm linh"}
                                            </h4>
                                            <p className="text-gray-700">
                                                {i === 0
                                                    ? "Dù bạn đang tìm kiếm câu trả lời về tình yêu, sự nghiệp hay sự phát triển cá nhân, những trải bài của chúng tôi mang đến những góc nhìn sâu sắc và trực giác để giúp bạn định hướng cuộc sống."
                                                    : "Nền tảng của chúng tôi được thiết kế để trở thành một không gian an toàn và huyền bí, nơi bạn có thể kết nối với trí tuệ từ những lá bài tarot."}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-gray-800">
                                Bạn đã sẵn sàng khám phá những bí mật được viết trong các vì sao chưa?
                                Hành trình của bạn bắt đầu từ đây!
                            </p>
                            <p className="text-gray-800">
                                Hãy khám phá các trải bài của chúng tôi & bước vào thế giới nhiệm màu hôm nay!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white mt-20 py-16" id="stats">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        custom={0.3}
                    >
                        {[
                            {
                                icon: "bi-filter-square",
                                value: "5000+",
                                label: "Lượt trải bài đã thực hiện",
                            },
                            {
                                icon: "bi-award",
                                value: "10",
                                label: "Năm kinh nghiệm",
                            },
                            {
                                icon: "bi-emoji-smile",
                                value: "441+",
                                label: "Khách hàng hài lòng",
                            },
                            {
                                icon: "bi-people",
                                value: "15",
                                label: "Chuyên gia Tarot",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center space-x-4"
                                variants={fadeIn}
                                custom={0.3 + i * 0.1}
                            >
                                <i className={`bi ${item.icon} text-[#B76E79] text-4xl`}></i>
                                <div>
                                    <span className="text-3xl font-bold text-blue-900">{item.value}</span>
                                    <p className="text-gray-700">{item.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
