'use client';
import React, { useEffect } from 'react';

interface ViewCounterProps {
    className?: string;
}

const ViewCounter = ({ className = '' }: ViewCounterProps) => {
    const [views, setViews] = React.useState<number>(0);

    const fetchViews = async () => {
        try {
            const response = await fetch('/api/views', {
                method: 'GET',
            });
            const data = await response.json();
            setViews(data.views);
        } catch (error) {
            console.error('Error fetching views:', error);
        }
    };

    useEffect(() => {
        fetchViews();
    }, []);

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <span className="text-slate-400">
                👁️ {views.toLocaleString() || 200} views
            </span>
        </div>
    );
};

export default ViewCounter;
