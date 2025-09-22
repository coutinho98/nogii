import CourseItem from './CourseItem';
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
    {
        image: WrestlingParaJiu,
        name: 'Wrestling para Jiu-Jitsu do Básico ao Avançado ',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/abTfgqv" }],
        price: 'R$197,00'
    },
    {
        image: WreslingGi,
        name: 'Wrestling Gi',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/cqY1a6g" }],
        price: 'R$197,00'
    },
    {
        image: ForçaDoWrestling,
        name: 'Força dos Wrestlers',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/YiDmPJe" }],
        price: 'R$97,00'
    },
    {
        image: WrestlingMMA,
        name: 'Wrestling para o MMA: total controle sobre o adversário',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/dV0dQUJ" }],
        price: 'R$197,00'
    },
    {
        image: DoubleLeg,
        name: 'Double Leg',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/vIETZ3s" }],
        price: 'R$97,00'
    },
    {
        image: WrestlingKids,
        name: 'Workshop Wrestling Kids',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/zz2g2jn" }],
        price: 'R$97,00'
    },
    {
        image: InglesJiu,
        name: 'Inglês para o BJJ',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/dvbphPo" }],
        price: 'R$197,00'
    },
    {
        image: AtaquePerna,
        name: 'Ataques de Perna: Heelhook, Leglock, Footlock e muito mais',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/UTm5Yso" }],
        price: 'R$147,00'
    },
    {
        image: Drill,
        name: ' Gênio dos Drills - Wrestling Gi',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/jvVBHKc" }],
        price: 'R$147,00'
    },
    {
        image: BodyLock1,
        name: 'Bodylock e Suplex - Avançado',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/12imJjT" }],
        price: 'R$147,00'
    },
    {
        image: DefesaPescoço,
        name: 'Masterclass Defesas de Pescoço',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/tNPhpfH" }],
        price: 'R$147,00'
    },
    {
        image: InstaProFighters,
        name: 'Insta Pro Fighters',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/g5J3Tbe" }],
        price: 'R$97,00'
    },
    {
        image: AtaquePescoco,
        name: 'Ataque de Pescoço',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/VNBFHYu" }],
        price: 'R$147,00'
    },

    {
        image: ArmDrag,
        name: 'Arm Drag - Avançado',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/NxdQjT1" }],
        price: 'R$147,00'
    },
    {
        image: Underhook,
        name: 'Underhook e Overhook - Avançado',
        links: [{ children: "Ir para o curso", href: "https://pay.kiwify.com.br/phhCZBt" }],
        price: 'R$147,00'
    }
];

const CourseCardsSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {cardsData.map((card, index) => (
                        <div key={index} className="flex justify-center">
                            <CourseItem
                                imageSrc={card.image}
                                buttonText={card.links[0].children}
                                href={card.links[0].href}
                                price={card.price}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-12 flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6 font-inter">
                        Compre todos os cursos
                    </h2>
                    <div className="flex justify-center w-full max-w-lg">

                       <div className="p-6 w-full flex flex-col items-center justify-center text-center font-inter">
                                <img src={TodosCursos} alt="Compre todos os cursos" className="w-full h-auto rounded-lg mb-4" />
                                <p className="mt-3 mb-2 text-gray-400 text-xl line-through">R$2.055</p>
                                <p className="text-white text-5xl font-extrabold">R$997</p>
                                <button
                                    onClick={() => window.open('https://pay.kiwify.com.br/6g9ayTN', '_blank', 'noopener,noreferrer')}
                                    className="mt-4 w-full flex items-center justify-center rounded-4xl
                                               bg-white text-black
                                               font-semibold py-2 shadow-lg cursor-pointer"
                                >
                                    Compre agora!
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCardsSection;