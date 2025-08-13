import { useTranslation } from 'react-i18next';
import BasicMove from '../assets/images/movimentosbasicos.webp'
import Grappling from '../assets/images/entradasquetodograppler.webp'
import Clinch from '../assets/images/cinturadas e clinch.webp'
import Def from '../assets/images/defesas.webp'
import Drills from '../assets/images/drills.webp'
import Bonus from '../assets/images/bonus.webp'

const CourseModulesSection = () => {
    const { t } = useTranslation();

    const modules = [
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
            why_it_works: t('course_modules.module2.why_it_works', 'Por que funciona'),
            why_it_works_description: t('course_modules.module2.why_it_works_description', ''),
            alt: "Imagem do Módulo de Entradas"
        },
        {
            image: Clinch,
            title: t('course_modules.module3.title'),
            description: t('course_modules.module3.description'),
            why_it_works: t('course_modules.module3.why_it_works', 'Por que funciona'),
            why_it_works_description: t('course_modules.module3.why_it_works_description', ''),
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
        {
            image: Bonus,
            title: t('course_modules.module6.title'),
            description: t('course_modules.module6.description'),
            alt: "Imagem do Módulo de Bônus"
        }
    ];

    return (
        <section id="conteudo" className="py-10">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                        {t('course_modules.title')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
                        {modules.map((module, index) => (
                            <article key={index} className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden group transition-colors duration-300">
                                <img
                                    src={module.image}
                                    alt={module.alt}
                                    className="w-full h-auto rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105"
                                />
                                <h3 className="text-xl md:text-2xl font-bold text-yellow-600 dark:text-yellow-500">
                                    {module.title}
                                </h3>
                                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {module.description}
                                </p>
                                {(module.why_it_works && module.why_it_works !== 'Por que funciona') && module.why_it_works_description && (
                                    <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                        <span className="font-bold text-gray-900 dark:text-white">{module.why_it_works}:</span> {module.why_it_works_description}
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseModulesSection;