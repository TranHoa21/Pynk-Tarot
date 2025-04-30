"use client";

import { useState } from "react";

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSent(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSent(true);
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                const data = await res.json();
                setError(data.message || "Đã có lỗi xảy ra.");
            }
        } catch (err) {
            console.log("check err", err);
            setError("Lỗi mạng. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    const inputStyle =
        "w-full border border-gray-300 focus:border-pink-400 focus:ring-1 focus:ring-pink-300 rounded-md px-4 py-2 outline-none transition";

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
                        Liên hệ
                    </h2>
                    <p>
                        <span>Cần hỗ trợ?</span>{" "}
                        <span className="font-semibold text-lg">Liên hệ với chúng tôi</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
                            <i className="bi bi-geo-alt text-pink-500 text-2xl"></i>
                            <div>
                                <h3 className="font-semibold text-lg">Địa chỉ</h3>
                                <p>108 Đường Adam, New York, NY 535022</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="300">
                            <i className="bi bi-telephone text-pink-500 text-2xl"></i>
                            <div>
                                <h3 className="font-semibold text-lg">Gọi cho chúng tôi</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-envelope text-pink-500 text-2xl"></i>
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p>info@example.com</p>
                            </div>
                        </div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                            className="w-full h-[270px] rounded-md border"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up" data-aos-delay="200">
                        <div>
                            <label htmlFor="name" className="block font-medium pb-2">
                                Tên của bạn
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className={inputStyle}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-medium pb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className={inputStyle}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block font-medium pb-2">
                                Chủ đề
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className={inputStyle}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block font-medium pb-2">
                                Nội dung
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                className={`${inputStyle} resize-none`}
                                required
                            />
                        </div>

                        <div className="text-center">
                            {loading && <div className="text-gray-500 mb-2">Đang gửi...</div>}
                            {error && <div className="text-red-500 mb-2">{error}</div>}
                            {sent && <div className="text-green-600 mb-2">Tin nhắn của bạn đã được gửi. Cảm ơn bạn!</div>}

                            <button
                                type="submit"
                                className="bg-[#B76E79] hover:bg-[#D29BA3] text-white font-semibold py-2 px-6 rounded-lg transition"
                            >
                                Gửi tin nhắn
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
