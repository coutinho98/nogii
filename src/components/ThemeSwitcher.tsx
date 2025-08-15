import { useState, useEffect } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeSwitcher = () => {
    // Verifica o tema inicial baseado no localStorage ou preferência do sistema
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return false;

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    useEffect(() => {
        const html = document.documentElement;

        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

    }, [isDark]);

    const props = useSpring({
        transform: isDark ? 'rotate(180deg)' : 'rotate(0deg)',
        config: config.gentle,
    });

    return (
        <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
            <animated.div style={props}>
                {isDark ? (
                    <SunIcon className="w-6 h-6 text-yellow-500" />
                ) : (
                    <MoonIcon className="w-6 h-6 text-gray-100" />
                )}
            </animated.div>
        </button>
    );
};

export default ThemeSwitcher;