import { useTranslation } from 'react-i18next';

const PainPointsSection = ({ className }: { className?: string }) => {
    const { t } = useTranslation();
    const painPoints = t('pain_points.points', { returnObjects: true }) as string[];

    return (
        <section className={`relative w-full py-10 ${className}`}>
            <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center md:text-left">
                        <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                            {t('pain_points.title')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full">
                        {painPoints.map((text: string, index: number) => (
                            <div
                                key={index}
                                className="bg-[#FAF3E0] dark:bg-gray-800 font-semibold p-8 text-left rounded-lg shadow-lg transition-colors duration-300"
                            >
                                <p className="text-gray-900 dark:text-white">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto mt-10 text-center">
                    <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent px-4">
                        {t('pain_points.recognition_text')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PainPointsSection;