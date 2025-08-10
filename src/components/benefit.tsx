import {
    TrophyIcon,
    ArrowDownOnSquareStackIcon,
    ArrowsRightLeftIcon,
    FireIcon,
    UserGroupIcon
} from '@heroicons/react/24/solid';

const BenefitsSection = () => {
    return (
        <div className="bg-[#090A0B] text-white py-10 ">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">

                    <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent px-4">
                        O único método no Brasil que transforma lutadores de Jiu-Jitsu em máquinas de derrubar.
                    </p>

                    <div className="text-center md:text-left mt-10 md:mt-10">
                        <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold leading-tight">
                            Aqui você vai aprender
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full">

                        <div className="border border-[#1A1D1F] p-8 text-left">
                            <div className="flex items-start">
                                <ArrowsRightLeftIcon className="h-6 w-6 mr-4 mt-1" />
                                <p className="text-white">
                                    <span className="font-bold">Dominar</span> a luta desde o primeiro contato;
                                </p>
                            </div>
                        </div>

                        <div className="border border-[#1A1D1F] p-8 text-left">
                            <div className="flex items-start">
                                <ArrowDownOnSquareStackIcon className="h-6 w-6 mr-4 mt-1" />
                                <p className="text-white">
                                    <span className="font-bold">Derrubar</span> qualquer adversário com confiança total;
                                </p>
                            </div>
                        </div>

                        <div className="border border-[#1A1D1F] p-8 text-left">
                            <div className="flex items-start">
                                <FireIcon className="h-6 w-6 mr-4 mt-1" />
                                <p className="text-white">
                                    <span className="font-bold">Controlar</span> onde a luta acontece – em pé ou no chão;
                                </p>
                            </div>
                        </div>

                        <div className="border border-[#1A1D1F] p-8 text-left">
                            <div className="flex items-start">
                                <FireIcon className="h-6 w-6 mr-4 mt-1" />
                                <p className="text-white">
                                    <span className="font-bold">Impor</span> seu ritmo e sua estratégia desde o início;
                                </p>
                            </div>
                        </div>

                        <div className="border border-[#1A1D1F] p-8 text-left">
                            <div className="flex items-start">
                                <UserGroupIcon className="h-6 w-6 mr-4 mt-1" />
                                <p className="text-white">
                                    <span className="font-bold">Ganhar respeito</span> de todos na academia pelo seu wrestling;
                                </p>
                            </div>
                        </div>

                        <div className="border border-[#1A1D1F] p-8 text-left">
                            <div className="flex items-start">
                                <TrophyIcon className="h-6 w-6 mr-4 mt-1" />
                                <p className="text-white">
                                    <span className="font-bold">Competir</span> com vantagem real sobre 90% dos adversários.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;