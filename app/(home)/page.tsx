'use client';
import React, { useEffect } from 'react';
import HeroSection from '@/components/Home/HeroSection';
import SkillsSection from '@/components/Home/SkillsSection';
import ProjectsSection from '@/components/Home/ProjectSection';
import ContactSection from '@/components/Home/ContactSection';

export default function Page() {
    useEffect(() => {
        fetch('/api/views', {
            method: 'POST',
        });
    }, []);
    return (
        <>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}