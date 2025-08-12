import { useTranslation } from 'react-i18next';

interface CourseModuleItem {
    title: string;
    description: string;
    image: string;
    why_it_works?: string;
    why_it_works_description?: string;
}

const CourseModulesSection = () => {
    const { t } = useTranslation();

    const modules = [
        {
            image: "https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-30-768x1024.png.webp",
            title: t('course_modules.module1.title'),
            description: t('course_modules.module1.description'),
            alt: "Imagem do Módulo de Movimentos Básicos"
        },
        {
            image: "https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-32-768x1024.png.webp",
            title: t('course_modules.module2.title'),
            description: t('course_modules.module2.description'),
            why_it_works: t('course_modules.module2.why_it_works'),
            why_it_works_description: t('course_modules.module2.why_it_works_description'),
            alt: "Imagem do Módulo de Entradas"
        },
        {
            image: "https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-31-1-768x1024.png.webp",
            title: t('course_modules.module3.title'),
            description: t('course_modules.module3.description'),
            why_it_works: t('course_modules.module3.why_it_works'),
            why_it_works_description: t('course_modules.module3.why_it_works_description'),
            alt: "Imagem do Módulo de Cinturadas e Clinch"
        },
        {
            image: "https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-33-768x1024.png.webp",
            title: t('course_modules.module4.title'),
            description: t('course_modules.module4.description'),
            alt: "Imagem do Módulo de Defesas"
        },
        {
            image: "https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-34-768x1024.png.webp",
            title: t('course_modules.module5.title'),
            description: t('course_modules.module5.description'),
            alt: "Imagem do Módulo de Drills"
        },
        {
            image: "https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-35.png.webp",
            title: t('course_modules.module6.title'),
            description: t('course_modules.module6.description'),
            alt: "Imagem do Módulo de Bônus"
        }
    ];

    return (
        <section className="bg-[#090A0B] text-white py-10">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                        {t('course_modules.title')}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
                        {modules.map((module, index) => (
                            <article key={index} className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden group">
                                <img 
                                    src={module.image}
                                    alt={module.alt}
                                    className="w-full h-auto rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105"
                                />
                                <h3 className="text-xl md:text-2xl font-bold text-yellow-500">
                                    {module.title}
                                </h3>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    {module.description}
                                </p>
                                {module.why_it_works && (
                                    <p className="mt-4 text-gray-300 leading-relaxed">
                                        <span className="font-bold text-white">{module.why_it_works}</span> {module.why_it_works_description}
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