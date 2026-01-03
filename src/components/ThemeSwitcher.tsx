import { useEffect } from 'react';

const ThemeSwitcher = () => {
    useEffect(() => {
        // Garante que a classe 'dark' esteja no HTML e salva no localStorage
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }, []);

    // Retorna null para que o botão desapareça da interface
    return null;
};

export default ThemeSwitcher;