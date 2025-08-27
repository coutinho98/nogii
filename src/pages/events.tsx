import { useState, useEffect } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaClock, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const words = [
    'resultados reais!',
    'método validado!',
    'engajamento real!'
];

const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    floating: {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
        }
    }
};

const Events = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex flex-col items-center min-h-screen bg-[#101011] p-4">
            <div className="h-full z-10 p-8 rounded-2xl shadow-xl bg-[#0A0A0A] text-center max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-inter font-bold text-white">
                    Cresça rápido no <FaInstagram className="inline-block ml-1 w-10 h-10 mb-3 lg:w-13 lg:h-13" />
                </h1>

                {/* Container da animação completamente isolado */}
                <div className="text-white font-inter mt-4 mb-6">
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                        <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-bold">
                            com
                        </span>
                        {/* Container fixo para animação - sem flex-1 */}
                        <div className="relative w-[280px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={words[index]}
                                    variants={textVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.5 }}
                                    className="text-[#FFC367] text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-kalam font-bold whitespace-nowrap absolute"
                                >
                                    {words[index]}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <p className="text-sm sm:text-sm md:text-sm text-gray-300 mt-4 mb-4 font-inter">
                    Vou te ensinar o método que eu utilizei para turbinar minha audiência e fazer meu <span className='font-semibold'>Instagram</span> virar uma máquina de captar clientes
                </p>

                <div className="w-full mx-auto overflow-hidden rounded-2xl shadow-2xl mt-2 max-w-2xl">
                    <video
                        className="w-full cursor-pointer"
                        src="https://epwimagem.s3.us-east-2.amazonaws.com/products-variants/Wilgner+-+Video+page.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        onClick={(e) => {
                            if (e.currentTarget.paused) {
                                e.currentTarget.play();
                            } else {
                                e.currentTarget.pause();
                            }
                        }}
                    >
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                </div>

                <div className="flex flex-col items-center mt-4">
                    <motion.button
                        className="px-4 py-2 bg-white text-black text-sm font-inter font-bold rounded-2xl transition-colors cursor-pointer"
                        whileHover={{ scale: 1.1, backgroundColor: "#FFC367" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => window.open("https://pay.kiwify.com.br/fThO9JS", "_blank", "noopener,noreferrer")}
                    >
                        Compre seu ingresso
                        <FaArrowRight className="ml-2 inline-block" />
                    </motion.button>
                    <p className='text-sm text-white mt-4 flex items-center font-inter'>
                        <FaClock className="mr-2 text-[#FFC367]" />
                        4 horas de duração
                    </p>
                    <p className='text-sm text-white mt-1 flex items-center font-inter'>
                        <FaCalendarAlt className="mr-2 text-[#FFC367]" />
                        sábado, 6 de setembro - 8h às 12h
                    </p>
                </div>

                <div className="relative z-10 w-full mt-12 px-4 flex flex-col md:flex-row justify-center items-center gap-8 max-w-2xl lg:max-w-4xl">
                    <motion.div
                        className="relative flex flex-col items-center p-8 rounded-2xl shadow-2xl bg-white text-black w-full md:w-1/2 cursor-pointer transition-shadow duration-300"
                        variants={cardVariants}
                        initial="hidden"
                        animate={["visible", "floating"]}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 5px #FFC367" }}
                        onClick={() => window.open("https://pay.kiwify.com.br/fThO9JS", "_blank", "noopener,noreferrer")}
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle, rgba(255,195,103,0.4) 0%, transparent 40%)',
                                zIndex: -1,
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                        />
                        <h2 className="text-2xl font-bold font-montserrat">2º Lote</h2>
                        <p className="text-4xl font-bold font-montserrat mt-2">R$137</p>
                        <p className="text-lg text-gray-900 mt-2 font-inter">até dia 30/08</p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center p-8 rounded-2xl shadow-2xl text-black w-full md:w-1/2 cursor-pointer border-2 border-transparent transition-colors duration-300"
                        variants={cardVariants}
                        initial="hidden"
                        animate={["visible", "floating"]}
                        whileHover={{ scale: 1.05, borderColor: "white" }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 10 }}
                        style={{
                            filter: 'grayscale(100%) blur(13px)',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            color: 'white'
                        }}
                    >
                        <h2 className="text-2xl font-bold font-montserrat">3º Lote</h2>
                        <p className="text-4xl font-bold font-montserrat mt-2">R$167</p>
                        <p className="text-lg text-gray-300 mt-2 font-inter">até dia 04/09</p>
                    </motion.div>
                </div>

                <div className="relative z-10 w-full text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-15 mb-12 md:mb-5">
                    <p className="flex items-center justify-center text-lg font-inter mb-2">
                        <span className="text-sm sm:text-lg text-white/90 font-inter">
                            Local: <strong className="text-sm font-semibold text-white">Barra Cowork - Avenida das Américas N° 1155 Sala 1711, Barra da Tijuca - Rio de Janeiro</strong>
                        </span>
                    </p>
                    <p className="flex items-center justify-center text-lg font-inter mb-2">
                        <span className="text-sm sm:text-lg text-white/90">
                            <strong className="text-sm font-semibold text-white">Enviar comprovante após pagamento</strong>
                        </span>
                    </p>
                    <p className="flex items-center justify-center text-base sm:text-lg text-white/90 font-inter underline underline-offset-4">
                        <FaWhatsapp className="mr-2 w-5 h-5 text-[#FFC367] flex-shrink-0" />
                        <a href="https://wa.me/5521979023250" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-gray-300">(21) 979023250</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Events;