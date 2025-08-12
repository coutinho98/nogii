import { useTranslation } from 'react-i18next';
import { useSpring, animated, config } from '@react-spring/web';
import { useState } from 'react';
import flagPT from '../assets/flags/br.svg';
import flagEN from '../assets/flags/us.svg';
import flagES from '../assets/flags/es.svg';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isContainerHovered, setIsContainerHovered] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        { code: 'pt', flag: flagPT, label: 'Português' },
        { code: 'en', flag: flagEN, label: 'English' },
        { code: 'es', flag: flagES, label: 'Español' }
    ];

    const containerSpring = useSpring({
        from: { opacity: 0, y: -20 },
        to: { opacity: 1, y: 0 },
        config: config.gentle,
        delay: 500 
    });

    return (
        <div className="fixed top-6 right-6 z-50">
            <animated.div
                style={containerSpring}
                onMouseEnter={() => setIsContainerHovered(true)}
                onMouseLeave={() => setIsContainerHovered(false)}
                className="w-max p-1 pointer-events-auto relative flex items-center bg-white/70 backdrop-blur-lg backdrop-saturate-150 rounded-full border border-white/10 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black/40 dark:backdrop-blur-lg dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            >
                {languages.map((lang, index) => {
                    const isActive = i18n.language === lang.code;
                    const isHovered = hoveredIndex === index;

                    const getDispersionOffset = (index: number) => {
                        if (!isContainerHovered) return { x: 0, y: 0 };
                        
                        const dispersions = [
                            { x: -2, y: -1 },
                            { x: 0, y: -1.5 },
                            { x: 2, y: -1 }
                        ];
                        
                        return dispersions[index] || { x: 0, y: 0 };
                    };

                    const dispersion = getDispersionOffset(index);

                    const FlagButton = () => {
                        const buttonSpring = useSpring({
                            backgroundColor: isActive 
                                ? 'rgba(59, 130, 246, 0.2)' 
                                : isHovered 
                                    ? 'rgba(156, 163, 175, 0.1)' 
                                    : 'rgba(156, 163, 175, 0)',
                            config: { tension: 300, friction: 20 },
                        });

                        const organicSpring = useSpring({
                            transform: isContainerHovered
                                ? `translateX(${dispersion.x}px) translateY(${dispersion.y}px)`
                                : 'translateX(0px) translateY(0px)',
                            filter: isHovered 
                                ? 'brightness(1.1) saturate(1.1)' 
                                : 'brightness(1) saturate(1)',
                            config: { 
                                tension: 120, 
                                friction: 14,
                                mass: 0.6 
                            },
                        });
                        
                        const flagScale = useSpring({
                            scale: isHovered ? 1.05 : (isActive ? 1.1 : 1),
                            config: config.gentle,
                        });

                        const glowSpring = useSpring({
                            opacity: isActive ? 0.6 : 0,
                            config: config.gentle,
                        });

                        return (
                            <button
                                onClick={() => changeLanguage(lang.code)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative mx-1 rounded-full overflow-hidden p-2"
                                title={lang.label}
                            >
                                <animated.div style={buttonSpring} className="absolute inset-0 rounded-full" />
                                
                                <animated.div style={glowSpring} className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-blue-600/30" />
                                
                                <animated.div style={organicSpring} className="relative z-10">
                                    <animated.img 
                                        src={lang.flag} 
                                        alt={lang.label}
                                        style={flagScale}
                                        className={`
                                            w-6 h-6 rounded-full
                                            ${isActive 
                                                ? 'ring-2 ring-blue-400/60 shadow-lg shadow-blue-500/25' 
                                                : 'ring-1 ring-black/10 dark:ring-white/20'
                                            }
                                        `}
                                    />
                                </animated.div>
                                
                                {isActive && (
                                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                                )}
                            </button>
                        );
                    };

                    return <FlagButton key={`flag-${lang.code}`} />;
                })}
            </animated.div>
        </div>
    );
};

export default LanguageSwitcher;