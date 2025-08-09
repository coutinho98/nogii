const WhatsApp = () => {
    return (
        <section className="bg-[#090A0B] w-full py-16  text-white">
            <div className="max-w-5xl mx-auto text-center px-4">
                <div className="flex justify-center items-center gap-3 mb-6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        className="w-20 h-20"
                    />
                    <h2 className="text-3xl font-bold">Ainda tem dúvidas se o curso é para você?</h2>
                </div>

                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Fale agora no WhatsApp com a minha equipe e vamos tirar todas as dúvidas que você ainda tem sobre o curso.
                </p>

                <a
                    href="https://wa.me/5599999999999"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        className="w-5 h-5"
                    />
                    Falar no WhatsApp
                </a>
            </div>
        </section>
    );
};

export default WhatsApp;
