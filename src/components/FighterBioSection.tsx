import Wilgner from '../assets/images/wilgnersilva.webp';

const FighterBioSection = ({ className }: { className?: string }) => {
    return (
        <section className={`py-2 md:py-20 ${className}`}>
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                    <div className="md:w-1/2 text-center md:text-left text-white font-inter">
                        <h2 className="text-6xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent">
                            Wilgner Silva
                        </h2>
                        <p className="mt-2 text-lg md:text-xl">
                            Campeão brasileiro em 2018 e uma das maiores referências no Wrestling Nacional.
                        </p>
                        <p className="mt-2 text-lg leading-relaxed">
                            Professor de diversos atletas de ponta no Jiu-Jítsu, com uma didática focada na <span className="">evolução rápida e resultados notórios.</span>
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center mt-8">
                        <img
                            src={Wilgner}
                            alt="Wilgner Silva"
                            className="w-120 h-120 rounded-lg object-cover transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-6 mb-6 md:mt-24 flex-col items-center">
                    <span className="text-orange-300 text-sm tracking-widest uppercase">
                        Conheça meus cursos
                    </span>
                    <svg
                        className="size-8 text-orange-300 animate-bounce mt-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default FighterBioSection;