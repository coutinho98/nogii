import { useState, useEffect } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'dark'
    );

    const toggleTheme = () => {
        setTheme(currentTheme => {
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            console.log('Current theme state:', currentTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;

        html.classList.remove('light', 'dark');
        body.classList.remove('light', 'dark');

        if (theme === 'dark') {
            html.classList.add('dark');
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.add('light');
            body.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const props = useSpring({
        transform: theme === 'dark' ? 'rotate(180deg)' : 'rotate(0deg)',
        config: config.gentle,
    });

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-white bg-gray-800 dark:bg-gray-200 transition-colors"
            aria-label="Toggle theme"
        >
            <animated.div style={props}>
                {theme === 'dark' ? (
                    <SunIcon className="w-6 h-6 text-yellow-400" />
                ) : (
                    <MoonIcon className="w-6 h-6 text-gray-800" />
                )}
            </animated.div>
        </button>
    );
};

export default ThemeSwitcher;