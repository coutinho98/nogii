import {
    TrophyIcon,
    ArrowDownOnSquareStackIcon,
    ArrowsRightLeftIcon,
    FireIcon,
    UserGroupIcon
} from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import type { ElementType } from 'react';

interface BenefitItem {
    title: string;
    text: string;
}

const benefitIcons: { [key: string]: ElementType } = {
    "Dominar": ArrowsRightLeftIcon,
    "Derrubar": ArrowDownOnSquareStackIcon,
    "Controlar": FireIcon,
    "Impor": FireIcon,
    "Ganhar respeito": UserGroupIcon,
    "Competir": TrophyIcon,
};

const BenefitsSection = ({ className }: { className?: string }) => {
    const { t } = useTranslation();

    const benefits = t('benefits_section.points', { returnObjects: true }) as BenefitItem[];

    return (
        <section className={`py-10 ${className}`}>
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">

                    <p className="text-xl sm:text-2xl font-bold text-orange-600 dark:bg-gradient-to-r dark:from-yellow-200 dark:to-orange-500 dark:bg-clip-text dark:text-transparent px-4">
                        {t('benefits_section.subtitle')}
                    </p>

                    <div className="text-center md:text-left mt-10 md:mt-10">
                        <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold leading-tight text-orange-600 dark:bg-gradient-to-r dark:from-yellow-200 dark:to-orange-500 dark:bg-clip-text dark:text-transparent bg-clip-text">
                            {t('benefits_section.title')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full">
                        {benefits.map((item: BenefitItem, index: number) => {
                            const Icon = benefitIcons[item.title] || TrophyIcon;
                            return (
                                <div key={index} className="bg-gray-100 dark:bg-[#1A1D1F] rounded-lg p-8 text-left transition-colors duration-300">
                                    <div className="flex items-start">
                                        {Icon && <Icon className="h-6 w-6 mr-4 mt-1 text-gray-700 dark:text-white" />}
                                        <p className="text-gray-900 dark:text-white">
                                            <span className="font-bold">{item.title}</span> {item.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;