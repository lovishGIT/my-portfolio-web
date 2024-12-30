'use client';
import React, { useState, useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const calculateScrollProgress = () => {
            const totalHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const scrollPercentage =
                (window.scrollY / totalHeight) * 100;

            setScrollProgress(
                Math.max(0, Math.min(100, scrollPercentage))
            );
        };

        const optimizedScrollHandler = () => {
            requestAnimationFrame(calculateScrollProgress);
        };

        calculateScrollProgress();

        window.addEventListener('scroll', optimizedScrollHandler);
        window.addEventListener('resize', calculateScrollProgress);

        return () => {
            window.removeEventListener(
                'scroll',
                optimizedScrollHandler
            );
            window.removeEventListener(
                'resize',
                calculateScrollProgress
            );
        };
    }, []);

    return (
        <Progress.Root
            className="fixed top-0 left-0 w-full h-[5px] overflow-hidden bg-transparent z-[9999]"
            value={scrollProgress}
        >
            <Progress.Indicator
                className="h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-transform duration-150 ease-linear"
                style={{
                    transform: `translateX(-${
                        100 - scrollProgress
                    }%)`,
                }}
            />
        </Progress.Root>
    );
};

export default ScrollProgressBar;
