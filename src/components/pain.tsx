const PainPointsSection = () => {
    return (
        <div className="relative w-full">
            <div className="bg-[#090A0B] text-white py-10 w-full relative z-10">
                <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">

                        <div className="text-center md:text-left">
                            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold leading-tight">
                                Se sentindo frustrado no tatame?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full">
                            {[
                                "Cansado de depender só de puxar pra guarda e nunca conseguir impor seu jogo?",
                                "Sempre por baixo, sendo dominado pelos adversários mais experientes?",
                                "Frustrado por não conseguir derrubar ninguém, mesmo treinando há meses?",
                                "Envergonhado quando todos ficam olhando e você simplesmente não consegue tirar o cara do pé?",
                                "Perdendo lutas que poderia ganhar se soubesse como controlar a luta em pé?"
                            ].map((text, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1A1D1F] border border-gray-700 p-8 text-left rounded-lg shadow-lg"
                                >
                                    <p className="text-gray-200">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto mt-10 text-center">
                        <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent px-4">
                            Se você se sente assim, calma, eu sei como é passar por tudo isso e eu sei como resolver o seu problema.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PainPointsSection;
