'use client';

import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function SwitchDemo() {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(theme === 'dark');

    useEffect(() => {
        setIsDark(theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(isDark ? 'dark' : 'light');
    };

    return (
        <div
            className='flex items-center space-x-2'
            suppressHydrationWarning
        >
            <Switch
                suppressHydrationWarning
                checked={isDark}
                onCheckedChange={toggleTheme}
                id='theme-toggle'
            />
        </div>
    );
}
