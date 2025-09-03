import React from 'react';
import CourseItem from './CourseItem';
import AtaquePerna from '../assets/images/banners/AtaquesPerna.jpeg';
import BodyLock1 from '../assets/images/banners/BODYLOCK.jpg';
import DefesaPescoço from '../assets/images/banners/DEFESA-DE-PESCOCO.jpg';
import DoubleLeg from '../assets/images/banners/DoubleLeg.jpeg';
import ForçaDoWrestling from '../assets/images/banners/ForçaDoWrestling.jpg';
import InglesJiu from '../assets/images/banners/InglesJiu.jpeg';
import InstaProFighters from '../assets/images/banners/InstaProFighters.jpeg';
import Instrucional from '../assets/images/banners/Instrucional.jpg';
import WreslingGi from '../assets/images/banners/WESTRELING-GI.jpg';
import WrestlingMMA from '../assets/images/banners/WrestlingMMA.jpeg';
import WrestlingParaJiu from '../assets/images/banners/WrestlingParaJiu.jpg';
import TodosCursos from '../assets/images/banners/TodosCursos.png';
import ElectricBorder from '../components/ui/ElectricBorder';

const cardsData = [
    {
        image: AtaquePerna,
        name: 'Ataque Perna',
        links: [{ children: "Ir para o curso", href: "#" }]
    },
    {
        image: BodyLock1,
        name: 'Body Lock',
        links: [{ children: "Ir para o curso", href: "#" }]
    },
    {
        image: DefesaPescoço,
        name: 'Defesa de Pescoço',
        links: [{ children: "Ir para o curso", href: "#" }]
    },
    {
        image: DoubleLeg,
        name: 'Double Leg',
        links: [{ children: "Ir para o curso", href: "#" }]
    },
    {
        image: ForçaDoWrestling,
        name: 'Força do Wrestling',
        links: [{ children: "Ir para o curso", href: "#" }]
    },
    {
        image: InglesJiu,
        name: 'Inglês para Jiu-Jitsu',
        links: [{ children: "Ir para o curso", href: "#" }]
    },
    {
        image: InstaProFighters,
        name: 'Insta Pro Fighters',
        links: [{ children: "Ir para o curso", href: "#" }]
    },
    {
        image: Instrucional,
        name: 'Instrucional',
        links: [{ children: "Ir para o curso", href: "#" }]
    },
    {
        image: WreslingGi,
        name: 'Wrestling Gi',
        links: [{ children: "Ir para o curso", href: "#" }]
    },
    {
        image: WrestlingMMA,
        name: 'Wrestling MMA',
        links: [{ children: "Ir para o curso", href: "#" }]
    },
    {
        image: WrestlingParaJiu,
        name: 'Wrestling para Jiu-Jitsu',
        links: [{ children: "Ir para o curso", href: "#" }]
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
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-12 flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6 font-inter">
                        Compre todos os cursos
                    </h2>
                    <div className="flex justify-center w-full max-w-sm">
                        <ElectricBorder
                            color="#FFA200"
                            speed={0.8}
                            chaos={1}
                            thickness={2}
                            style={{ borderRadius: 16 }}
                        >
                            <div className="p-6 w-full flex flex-col items-center justify-center text-center font-inter">
                                <h3 className="text-white text-2xl font-bold mb-4">Oferta Especial</h3>
                                <p className="text-white text-lg mb-2">Todos os Cursos</p>
                                <p className="text-white text-4xl font-extrabold">R$997</p>
                                <button
                                    onClick={() => {}}
                                    className="mt-6 w-full flex items-center justify-center  rounded-4xl
                                               bg-white text-black 
                                               font-semibold  py-1 shadow-lg cursor-pointer"
                                >
                                    Compre agora!
                                </button>
                            </div>
                        </ElectricBorder>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCardsSection;