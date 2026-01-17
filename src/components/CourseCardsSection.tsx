import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

import AtaquePerna from '../assets/images/banners/AtaquesPerna.jpeg';
import BodyLock1 from '../assets/images/banners/BODYLOCK.jpg';
import DefesaPescoço from '../assets/images/banners/DEFESA-DE-PESCOCO.jpg';
import DoubleLeg from '../assets/images/banners/DoubleLeg.jpeg';
import ForçaDoWrestling from '../assets/images/banners/ForçaDoWrestling.jpg';
import InglesJiu from '../assets/images/banners/InglesJiu.jpeg';
import InstaProFighters from '../assets/images/banners/InstaProFighters.jpeg';
import WreslingGi from '../assets/images/banners/WESTRELING-GI.jpg';
import WrestlingMMA from '../assets/images/banners/WrestlingMMA.jpeg';
import WrestlingParaJiu from '../assets/images/banners/WrestlingParaJiu.jpg';
import AtaquePescoco from '../assets/images/banners/AtaquePescoco.jpeg';
import WrestlingKids from '../assets/images/banners/WrestlingKids.jpeg';
import ArmDrag from '../assets/images/banners/ArmDrag.jpeg';
import Underhook from '../assets/images/banners/Underhook.jpeg';
import Drill from '../assets/images/banners/drills.jpg';
import TodosCursos from '../assets/images/banners/total.jpg';

const cardsData = [
    { image: WrestlingParaJiu, slug: 'wrestling_bjj', priceKey: 'course_cards.prices.tier_1' },
    { image: WreslingGi, slug: 'wrestling_gi', priceKey: 'course_cards.prices.tier_1' },
    { image: ForçaDoWrestling, slug: 'wrestling_strength', priceKey: 'course_cards.prices.tier_3' },
    { image: Drill, slug: 'drill_genius', priceKey: 'course_cards.prices.tier_4' },
    { image: WrestlingMMA, slug: 'wrestling_mma', priceKey: 'course_cards.prices.tier_1' },
    { image: DoubleLeg, slug: 'double_leg', priceKey: 'course_cards.prices.tier_2' },
    { image: WrestlingKids, slug: 'wrestling_kids', priceKey: 'course_cards.prices.tier_5' },
    { image: BodyLock1, slug: 'bodylock_suplex', priceKey: 'course_cards.prices.tier_5' },
    { image: DefesaPescoço, slug: 'neck_defenses', priceKey: 'course_cards.prices.tier_6' },
    { image: AtaquePescoco, slug: 'neck_attack', priceKey: 'course_cards.prices.tier_7' },
    { image: ArmDrag, slug: 'arm_drag', priceKey: 'course_cards.prices.tier_5' },
    { image: Underhook, slug: 'underhook_overhook', priceKey: 'course_cards.prices.tier_5' },
    { image: InglesJiu, slug: 'english_bjj', priceKey: 'course_cards.prices.tier_1' },
    { image: AtaquePerna, slug: 'leg_attacks', priceKey: 'course_cards.prices.tier_5' },
    { image: InstaProFighters, slug: 'insta_fighters', priceKey: 'course_cards.prices.tier_2' },
];

const getTags = (slug: string) => {
    switch (slug) {
        case 'wrestling_bjj': return ['Wrestling', 'Jiu-Jitsu', 'course_cards.tags.basic_advanced'];
        case 'drill_genius': return ['Drills', 'Wrestling', 'Gi'];
        case 'wrestling_strength': return ['Wrestling', 'course_cards.tags.training'];
        case 'wrestling_mma': return ['Wrestling', 'MMA', 'course_cards.tags.control'];
        case 'double_leg': return ['course_cards.tags.seminar', 'course_cards.tags.takedowns', 'Double Leg'];
        case 'wrestling_kids': return ['Workshop', 'Kids', 'course_cards.tags.methodology'];
        case 'bodylock_suplex': return ['course_cards.tags.technique', 'Avançado', 'Bodylock'];
        case 'neck_defenses': return ['Masterclass', 'course_cards.tags.defenses', 'Pescoço'];
        case 'neck_attack': return ['Ataque', 'course_cards.tags.headlocks', 'Avançado'];
        case 'arm_drag': return ['course_cards.tags.technique', 'Arm Drag', 'Avançado'];
        case 'underhook_overhook': return ['course_cards.tags.technique', 'Underhook', 'Overhook'];
        case 'english_bjj': return ['BJJ', 'Inglês', 'course_cards.tags.career'];
        case 'leg_attacks': return ['Leglocks', 'Heelhook', 'course_cards.tags.submissions'];
        case 'insta_fighters': return ['course_cards.tags.marketing', 'Fighters', 'course_cards.tags.growth'];
        default: return ['Wrestling'];
    }
};

const CourseCardsSection = () => {
    const { t } = useTranslation();
    const INSTRUCTOR_NAME = 'Wilgner Silva';
    const TOTAL_PRICE_CROSSED = 'R$2.055';
    const TOTAL_PRICE_NEW = 'R$997';
    const COMBO_URL = 'https://pay.kiwify.com.br/6g9ayTN';

    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
                    {cardsData.map((card, index) => {
                        const nameKey = `course_cards.names.${card.slug}`;
                        const linkHref = t(`course_cards.links.${card.slug}`);

                        return (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 h-full flex flex-col hover:border-orange-500 transition-all duration-300 ease-in-out hover:shadow-orange-500/10 shadow-lg hover:scale-[1.02] cursor-pointer"
                                onClick={() => window.open(linkHref, '_blank', 'noopener,noreferrer')}
                            >
                                <div className="relative overflow-hidden aspect-square">
                                    <img src={card.image} alt={t(nameKey)} className="w-full h-full object-cover" />
                                </div>

                                <div className="p-6 flex-1 flex flex-col bg-gray-900/60">
                                    <h4 className="text-xl font-bold text-white mb-2">{t(nameKey)}</h4>

                                    <div className="flex-1">
                                        <p className="text-gray-400 text-sm mb-4">
                                            {t(nameKey)}. {t('course_cards.card_description')}
                                        </p>
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {getTags(card.slug).map((tag, idx) => (
                                                    <span key={idx} className="bg-orange-700/50 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">
                                                        {t(tag)}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-700 mt-auto">
                                        <div>
                                            <p className="text-gray-400 text-xs">{t('course_cards.instructor')}</p>
                                            <p className="text-white font-semibold">{INSTRUCTOR_NAME}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-orange-500">{t(card.priceKey)}</p>
                                            <a
                                                href={linkHref}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white mt-2 bg-gradient-to-r from-orange-500 to-yellow-600 px-6 py-2 rounded-lg font-bold flex items-center justify-center space-x-2"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <span>{t('course_cards.buy')}</span>
                                                <Zap className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                    
                <div className="mt-12 flex justify-center w-full">
                    <div
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 max-w-4xl w-full flex flex-col md:flex-row hover:border-orange-500 transition-all duration-300 ease-in-out hover:shadow-orange-500/10 shadow-lg hover:scale-[1.02] cursor-pointer hover:ring-2 hover:ring-orange-500/50 hover:ring-offset-2 hover:ring-offset-[#060010]"
                        onClick={() => window.open(COMBO_URL, '_blank', 'noopener,noreferrer')}
                    >
                        <div className="relative overflow-hidden aspect-square md:aspect-auto md:w-1/2">
                            <img
                                src={TodosCursos}
                                alt={t('course_cards.combo_title')}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6 flex-1 flex flex-col bg-gray-900/60 md:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-inter">
                                {t('course_cards.combo_title')}
                            </h2>
                            <h4 className="text-xl font-bold text-white mb-2">
                                {t('course_cards.combo_subtitle', { name: INSTRUCTOR_NAME })}
                            </h4>

                            <div className="flex-1 mt-4">
                                <p className="text-gray-400 text-base mb-4">
                                    {t('course_cards.combo_description')}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-700 mt-auto">
                                <div>
                                    <p className="text-gray-400 text-xs">{t('course_cards.list_price')}</p>
                                    <p className="text-gray-400 text-xl line-through">{TOTAL_PRICE_CROSSED}</p>
                                    <p className="text-white font-semibold">{t('course_cards.exclusive_combo_price')}</p>
                                </div>

                                <div className="text-right flex flex-col items-end">
                                    <motion.p
                                        className="text-5xl font-extrabold text-orange-500"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                    >
                                        {TOTAL_PRICE_NEW}
                                    </motion.p>
                                    <a
                                        href={COMBO_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer mt-2 bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white px-6 py-2 rounded-lg font-bold transition-all duration-200 flex items-center justify-center space-x-2"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span>{t('course_cards.buy_now')}</span>
                                        <Zap className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default CourseCardsSection;