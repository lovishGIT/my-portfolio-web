import React from 'react';
import Navbar from '@/components/Navbar.tsx';
import HeroSection from "../../components/Home/HeroSection.tsx";
import ProjectsSection from '@/components/Home/ProjectSection.tsx';
import ContactSection from '@/components/Home/ContactSection.tsx';
import SkillsSection from '@/components/Home/SkillsSection.tsx';

export default function page() {
    return (
        <div className="min-h-screen bg-black">
            <div className="max-w-6xl mx-auto overflow-hidden">
                <Navbar />
                <HeroSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </div>
    );
}
