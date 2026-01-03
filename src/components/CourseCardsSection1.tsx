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
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react'; 
import TotalImage from '../assets/images/BLACK-WILL.png';

const cardsData = [
    {
        image: WrestlingParaJiu,
        name: 'Wrestling para Jiu-Jitsu do Básico ao Avançado ',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/abTfgqv" }],
        oldPrice: 'R$197,00',
        price: 'R$157,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: WreslingGi,
        name: 'Wrestling Gi',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/cqY1a6g" }],
        oldPrice: 'R$197,00',
        price: 'R$157,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: ForçaDoWrestling,
        name: 'Força dos Wrestlers',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/YiDmPJe" }],
        oldPrice: 'R$97,00',
        price: 'R$77,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: Drill,
        name: ' Gênio dos Drills - Wrestling Gi',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/jvVBHKc" }],
        oldPrice: 'R$97,00',
        price: 'R$77,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: WrestlingMMA,
        name: 'Wrestling para o MMA: total controle sobre o adversário',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/dV0dQUJ" }],
        oldPrice: 'R$197,00',
        price: 'R$157,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: DoubleLeg,
        name: 'Double Leg',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/vIETZ3s" }],
        oldPrice: 'R$97,00',
        price: 'R$77,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: WrestlingKids,
        name: 'Workshop Wrestling Kids',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/zz2g2jn" }],
        oldPrice: 'R$97,00',
        price: 'R$77,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: BodyLock1,
        name: 'Bodylock e Suplex - Avançado',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/12imJjT" }],
        oldPrice: 'R$147,00',
        price: 'R$117,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: DefesaPescoço,
        name: 'Masterclass Defesas de Pescoço',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/tNPhpfH" }],
        oldPrice: 'R$147,00',
        price: 'R$117,60',
        coupon: 'Digite BLACK no checkout'
    },

    {
        image: AtaquePescoco,
        name: 'Ataque de Pescoço',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/VNBFHYu" }],
        oldPrice: 'R$147,00',
        price: 'R$117,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: ArmDrag,
        name: 'Arm Drag - Avançado',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/NxdQjT1" }],
        oldPrice: 'R$147,00',
        price: 'R$117,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: Underhook,
        name: 'Underhook e Overhook - Avançado',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/phhCZBt" }],
        oldPrice: 'R$147,00',
        price: 'R$117,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: InglesJiu,
        name: 'Inglês para o BJJ',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/dvbphPo" }],
        oldPrice: 'R$197,00',
        price: 'R$157,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: AtaquePerna,
        name: 'Ataques de Perna: Heelhook, Leglock, Footlock e muito mais',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/UTm5Yso" }],
        oldPrice: 'R$147,00',
        price: 'R$117,60',
        coupon: 'Digite BLACK no checkout'
    },
    {
        image: InstaProFighters,
        name: 'Insta Pro Fighters',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/g5J3Tbe" }],
        oldPrice: 'R$97,00',
        price: 'R$77,60',
        coupon: 'Digite BLACK no checkout'
    },
];

const getTags = (name: string) => {
    if (name.includes('Jiu-Jitsu')) return ['Wrestling', 'Jiu-Jitsu', 'Básico ao Avançado'];
    if (name.includes('Gi') && name.includes('Drills')) return ['Drills', 'Wrestling', 'Gi'];
    if (name.includes('Gi')) return ['Wrestling', 'Gi'];
    if (name.includes('Wrestling') && name.includes('Força')) return ['Wrestling', 'Força', 'Treino'];
    if (name.includes('MMA')) return ['Wrestling', 'MMA', 'Controle'];
    if (name.includes('Double Leg')) return ['Seminário', 'Quedas', 'Double Leg'];
    if (name.includes('Kids')) return ['Workshop', 'Kids', 'Metodologia'];
    if (name.includes('Bodylock') || name.includes('Suplex')) return ['Técnica', 'Avançado', 'Bodylock'];
    if (name.includes('Defesas de Pescoço')) return ['Masterclass', 'Defesas', 'Pescoço'];
    if (name.includes('Ataque de Pescoço')) return ['Ataque', 'Headlocks', 'Avançado'];
    if (name.includes('Arm Drag')) return ['Técnica', 'Arm Drag', 'Avançado'];
    if (name.includes('Underhook')) return ['Técnica', 'Underhook', 'Overhook'];
    if (name.includes('Inglês')) return ['BJJ', 'Inglês', 'Carreira'];
    if (name.includes('Perna')) return ['Leglocks', 'Heelhook', 'Finalização'];
    if (name.includes('Insta')) return ['Marketing', 'Fighters', 'Crescimento'];
    return ['Wrestling'];
};

const CourseCardsSection = () => {
    const INSTRUCTOR_NAME = 'Wilgner Silva';
    const TOTAL_PRICE_CROSSED = 'R$2.055';
    const TOTAL_PRICE_NEW = 'R$797';
    const COMBO_URL = 'https://pay.kiwify.com.br/6g9ayTN';

    return (
        <section className="py-5">
            <div className="container mx-auto px-6">
                <div className="mt-12 flex justify-center w-full">
                    <div
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl mb-10 overflow-hidden border border-gray-700/50 max-w-4xl w-full flex flex-col md:flex-row hover:border-orange-500 transition-all duration-300 ease-in-out hover:shadow-orange-500/10 shadow-lg hover:scale-[1.02] cursor-pointer hover:ring-2 hover:ring-orange-500/50 hover:ring-offset-2 hover:ring-offset-[#060010]"
                        onClick={() => window.open(COMBO_URL, '_blank', 'noopener,noreferrer')}
                    >
                        <div className="relative overflow-hidden md:aspect-auto md:w-1/2">
                            <img
                                src={TotalImage}
                                alt="Combo Completo: Todos os Cursos"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6 flex-1 flex flex-col bg-gray-900/60 md:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-inter">
                                Combo Completo
                            </h2>
                            <h4 className="text-xl font-bold text-white mb-2">Todos os Cursos de {INSTRUCTOR_NAME}</h4>

                            <div className="flex-1 mt-4">
                                <ul className="text-gray-400 text-base mb-4 list-none p-0 space-y-1">
                                    <li>🔸 Wrestling No Gi (Sem Kimono)</li>
                                    <li>🔸 Wrestling Gi (Com Kimono)</li>
                                    <li>🔸 Força dos Wrestlers</li>
                                    <li>🔸 Gênio dos Drills</li>
                                    <li>🔸 Seminário Double Leg</li>
                                    <li>🔸 Wrestling para MMA</li>
                                    <li>🔸 Wrestling Kids</li>
                                    <li>🔸 Ataques de Pé e Perna (Leg Locks)</li>
                                    <li>🔸 Defesa de Pescoço</li>
                                    <li>🔸 Headlocks</li>
                                    <li>🔸 Arm Drag</li>
                                    <li>🔸 UnderHook e OverHook</li>
                                    <li>🔸 Body Lock & Suplex</li>
                                    <li>🔸 Inglês para Jiu-Jitsu</li>
                                    <li>🔸 Insta Pro Fighter</li>
                                </ul>

                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {['Wrestling', 'BJJ', 'MMA', 'Drills', 'Defesas', '15 Cursos'].map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-orange-700/50 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-700 mt-auto">
                                <div>
                                    <p className="text-gray-400 text-xs">Preço de Tabela</p>
                                    <p className="text-gray-400 text-xl line-through">{TOTAL_PRICE_CROSSED}</p>
                                    <p className="text-white font-semibold">Preço Combo Exclusivo</p>
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
                                        onClick={(e) => e.stopPropagation()}
                                        className="cursor-pointer mt-4 w-full md:w-auto bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-black px-8 py-3 md:px-6 md:py-2 rounded-lg text-lg md:text-base font-bold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                                    >
                                        <span>Compre agora!</span>
                                        <Zap className="w-5 h-5 md:w-4 md:h-4" />
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-xl  mb-10 text-center sm:text-2xl font-extrabold text-white uppercase tracking-wider">
                    Black Friday liberada: 20% OFF em tudo do site!
                </h3>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 h-full flex flex-col hover:border-orange-500 transition-all duration-300 ease-in-out hover:shadow-orange-500/10 shadow-lg hover:scale-[1.02] cursor-pointer hover:ring-2 hover:ring-orange-500/50 hover:ring-offset-2 hover:ring-offset-[#060010]"
                            onClick={() => window.open(card.links[0].href, '_blank', 'noopener,noreferrer')}
                        >
                            <div className="relative overflow-hidden aspect-square">
                                <img
                                    src={card.image}
                                    alt={card.name.trim()}
                                    className="w-full h-full object-cover"
                                />
                                {/* Opcional: Badge de Desconto na Imagem */}
                                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                                    20% OFF
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col bg-gray-900/60">
                                <h4 className="text-xl font-bold text-white mb-2">{card.name.trim()}</h4>

                                <div className="flex-1">
                                    <p className="text-gray-400 text-sm mb-4">
                                        {card.name.trim()}. Aprenda as técnicas essenciais e estratégias avançadas para levar sua performance de grappling para o próximo nível.
                                    </p>

                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {getTags(card.name).map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-orange-700/50 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-700 mt-auto">
                                    <div>
                                        <p className="text-gray-400 text-xs">Instrutor</p>
                                        <p className="text-white font-semibold">{INSTRUCTOR_NAME}</p>
                                    </div>
                                    <div className="text-right flex flex-col items-end">
                                        <span className="text-[10px] md:text-xs font-bold text-yellow-300 bg-red-900/40 border border-red-500/30 px-2 py-0.5 rounded mb-1 animate-pulse">
                                            {card.coupon}
                                        </span>

                                        <span className="text-sm text-gray-400 line-through font-medium">
                                            {card.oldPrice}
                                        </span>

                                        <p className="text-2xl font-extrabold text-orange-500">
                                            {card.price}
                                        </p>

                                        <a
                                            href={card.links[0].href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cursor-pointer mt-2 bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-black px-6 py-2 rounded-lg font-bold transition-all duration-200 flex items-center justify-center space-x-2 w-full md:w-auto"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span>Comprar</span>
                                            <Zap className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default CourseCardsSection;