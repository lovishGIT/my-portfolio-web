import React from 'react';
import HeroSection from '@/components/Home/HeroSection';
import SkillsSection from '@/components/Home/SkillsSection';
import ProjectsSection from '@/components/Home/ProjectSection';
import ContactSection from '@/components/Home/ContactSection';

export default async function Page() {
    fetch('/api/views', {
        method: 'POST',
    });

    return (
        <>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}
