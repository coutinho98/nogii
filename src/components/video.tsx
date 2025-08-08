  const VideoSection = () => {
  return (
    <div className="bg-[#090A0B] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div className="md:w-1/2 text-left">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent">
                Torne-se o lutador que sempre derruba!
              </h2>
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:items-end mt-2 md:mt-0">
              <p className="text-lg text-left md:text-xl text-gray-300 font-montserrat font-normal  md:text-right mb-6 leading-relaxed">
                Descubra como dominar as quedas e finalmente impor seu jogo no jiu-jitsu com o <span className="font-bold bg-gradient-to-r from-gray-200 to-yellow-500 bg-clip-text text-transparent">
                  Campeão Brasileiro de Wrestling em 2018
                </span>
              </p>
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 w-full max-w-xs md:max-w-none">
                <button
                  className="w-full md:min-w-[180px] cursor-pointer bg-yellow-500 text-gray-900 font-montserrat font-bold py-2 px-4 rounded-full shadow-md transition duration-400 transform hover:bg-yellow-600"
                  onClick={() => window.location.href = '#inscricao'}
                >
                  Virar uma máquina
                </button>
                <button
                  className="w-full md:min-w-[180px] cursor-pointer bg-neutral-900 text-white border-1 border-neutral-700 font-montserrat font-bold py-2 px-4 rounded-full shadow-md transition duration-400 transform hover:bg-neutral-700"
                  onClick={() => window.location.href = '#conteudo'}
                >
                  Conheça o conteúdo
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto overflow-hidden rounded-lg shadow-2xl mt-8">
            <video
              className="w-full"
              src="https://epwimagem.s3.us-east-2.amazonaws.com/products-variants/Aperte+o+Play!+NoGi.mp4"
              autoPlay
              controls
              loop
              muted
              playsInline
              preload="metadata"
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;