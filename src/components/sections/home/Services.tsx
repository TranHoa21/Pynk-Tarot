import { FC } from "react";
import { motion } from "framer-motion";
import {
  LucideArrowRight,
  LucideHeart,
  LucidePersonStanding,
  LucideBarChart3,
  LucideBookOpen,
  LucideUserCircle2,
  LucideCoins,
} from "lucide-react";

const services = [
  {
    title: "Trải Bài Tarot Tổng Quan",
    description: "Giúp bạn hiểu rõ về bản thân và các vấn đề hiện tại trong cuộc sống.",
    icon: <LucideBookOpen className="w-8 h-8 text-[#B76E79]" />,
    color: "border-b-2 border-[#B76E79]",
  },
  {
    title: "Trải Bài Công Việc & Sự Nghiệp",
    description: "Định hướng nghề nghiệp và giải mã các khúc mắc trong công việc.",
    icon: <LucideBarChart3 className="w-8 h-8 text-[#5D5FEF]" />,
    color: "border-b-2 border-[#5D5FEF]",
  },
  {
    title: "Tình Yêu & Mối Quan Hệ",
    description: "Giúp bạn hiểu rõ cảm xúc, tình cảm và hướng đi cho các mối quan hệ.",
    icon: <LucideHeart className="w-8 h-8 text-[#B76E79]" />,
    color: "border-b-2 border-[#B76E79]",
  },
  {
    title: "Khám Phá Bản Thân & Tâm Linh",
    description: "Trải nghiệm hành trình khám phá bản thân và phát triển tâm linh.",
    icon: <LucidePersonStanding className="w-8 h-8 text-[#5D5FEF]" />,
    color: "border-b-2 border-[#5D5FEF]",
  },
  {
    title: "Trải Bài Chủ Đề Chuyên Biệt",
    description: "Tập trung vào từng chủ đề cụ thể theo yêu cầu riêng của bạn.",
    icon: <LucideUserCircle2 className="w-8 h-8 text-[#B76E79]" />,
    color: "border-b-2 border-[#B76E79]",
  },
  {
    title: "Tài Chính & Tiền Bạc",
    description: "Hiểu rõ dòng tiền, cơ hội đầu tư và cách cải thiện tài chính cá nhân.",
    icon: <LucideCoins className="w-8 h-8 text-[#5D5FEF]" />,
    color: "border-b-2 border-[#5D5FEF]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
    },
  }),
};

const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 bg-[#f6e8ec] text-[#b76e79] rounded-full text-sm font-semibold">
          Dịch vụ
        </span>
        <h2 className="text-3xl font-bold mt-4">
          Khám phá <span className="text-[#b76e79]">các dịch vụ</span> của chúng tôi
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition duration-300 ${service.color}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-[#1f1f39] mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <a
              href="#"
              className="text-sm font-medium text-[#1f1f39] inline-flex items-center hover:text-[#b76e79]"
            >
              Xem thêm <LucideArrowRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
