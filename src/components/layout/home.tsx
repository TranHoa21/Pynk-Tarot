'use client';
import BannerSection from "@/components/sections/home/BannerSection";
import Services from "@/components/sections/home/Services"
import React from 'react';
import AboutSection from "@/components/sections/home/About";
import TestimonialsSlider from "@/components/sections/home/TestimonialsSlider";
import BlogPreviewSection from "@/components/sections/home/BlogPreviewSection";
import ContactSection from "@/components/sections/home/ContactSection"
const HomePage = () => {
    return (
        <>
            <BannerSection />
            <AboutSection />
            <Services />
            <TestimonialsSlider />
            <ContactSection />
            <BlogPreviewSection />
        </>
    );
};

export default HomePage;
