import { useTranslation } from 'react-i18next';
import BasicMove from '../assets/images/movimentosbasicos.webp'
import Grappling from '../assets/images/entradasquetodograppler.webp'
import Clinch from '../assets/images/cinturadas e clinch.webp'
import Def from '../assets/images/defesas.webp'
import Drills from '../assets/images/drills.webp'
import Bonus from '../assets/images/bonus.webp'

interface Module {
    image: string;
    title: string;
    description: string;
    why_it_works?: string;
    why_it_works_description?: string;
    alt: string;
}

const CourseModulesSection = ({ className }: { className?: string }) => {
    const { t } = useTranslation();

    const modules: Module[] = [
        {
            image: BasicMove,
            title: t('course_modules.module1.title'),
            description: t('course_modules.module1.description'),
            alt: "Imagem do Módulo de Movimentos Básicos"
        },
        {
            image: Grappling,
            title: t('course_modules.module2.title'),
            description: t('course_modules.module2.description'),
            why_it_works: t('course_modules.module2.why_it_works'),
            why_it_works_description: t('course_modules.module2.why_it_works_description'),
            alt: "Imagem do Módulo de Entradas"
        },
        {
            image: Clinch,
            title: t('course_modules.module3.title'),
            description: t('course_modules.module3.description'),
            why_it_works_description: t('course_modules.module3.why_it_works_description'),
            alt: "Imagem do Módulo de Cinturadas e Clinch"
        },
        {
            image: Def,
            title: t('course_modules.module4.title'),
            description: t('course_modules.module4.description'),
            alt: "Imagem do Módulo de Defesas"
        },
        {
            image: Drills,
            title: t('course_modules.module5.title'),
            description: t('course_modules.module5.description'),
            alt: "Imagem do Módulo de Drills"
        },

    ];

    const bonusModule = {
        image: Bonus,
        title: t('course_modules.module6.title'),
        description: t('course_modules.module6.description'),
        alt: "Imagem do Módulo de Bônus"
    };

    const regularModules = modules.slice(0, 5);

    return (
        <section id="conteudo" className={`py-16 ${className}`}>
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-orange-600 dark:bg-gradient-to-r dark:from-yellow-200 dark:to-orange-500 dark:bg-clip-text dark:text-transparent">
                        {t('course_modules.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
                        {regularModules.map((module, index) => (
                            <article key={index} className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl shadow-lg group transition-all duration-300">
                                <img
                                    src={module.image}
                                    alt={module.alt}
                                    className="w-full h-auto rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500">
                                    {module.title}
                                </h3>
                                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                                    {module.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-20 relative group">
                        <div className="absolute inset-0 bg-orange-600 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

                        <article className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 shadow-2xl">

                            <div className="relative bg-zinc-950 rounded-[23px] p-8 md:p-14 flex flex-col md:flex-row items-center gap-10">

                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#ea580c33,transparent_50%)] pointer-events-none"></div>

                                <div className="w-full md:w-2/5 relative">
                                    <div className="absolute -top-6 -left-6 bg-yellow-500 text-black px-6 py-2 rounded-full font-black text-sm uppercase tracking-tighter shadow-[0_0_20px_rgba(234,88,12,0.5)] z-20">
                                        🚀 Exclusivo
                                    </div>
                                    <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-500">
                                        <img
                                            src={bonusModule.image}
                                            alt={bonusModule.alt}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-3/5 text-left relative z-10">
                                    <span className="text-orange-500 font-black tracking-[0.2em] uppercase text-sm">
                                        Upgrade de Carreira
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-black text-white mt-2 mb-6 tracking-tighter italic uppercase leading-none">
                                        {bonusModule.title}
                                    </h3>
                                    <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                                        {bonusModule.description}
                                    </p>

                                    <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                        <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(234,88,12,0.4)]">
                                            🎁
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm leading-none">Acesso Vitalício</p>
                                            <p className="text-zinc-500 text-xs mt-1">Disponível imediatamente após a compra</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseModulesSection;