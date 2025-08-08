const InstructorBioSection = () => {
  return (
    <div className="bg-[#090A0B] text-white py-10 md:py-40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-xl md:text-2xl font-bold text-gray-300">
              Muito prazer! Sou
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent mt-2">
              Wilgner Silva
            </h2>
            <p className="mt-2 text-lg md:text-xl font-bold text-gray-400">
              Campeão brasileiro em 2018
            </p>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Sou uma das <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">maiores referências no Wrestling Nacional.</span> Atleta <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">campeão nacional, nº1 do Brasil em 2018</span> e diversas vezes medalhista nacional na modalidade, dentre outros títulos.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Sou <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">professor de vários atletas de ponta no Jiu-Jítsu</span> e ensino quedas para os líderes das maiores academias no Brasil.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Todos os meus alunos tiveram uma <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">mudança notória</span> através dos meus ensinamentos em Luta Olímpica.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              A <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">evolução rápida e a didática de ensino</span> para os mais variados tipos de alunos são a minha marca pessoal.
            </p>
            <p className="mt-6 text-yellow-500 font-bold text-xl md:text-2xl">
              Venha fazer parte deste time você também!
            </p>
          </div>
          
          {/* Lado Direito - Imagem do Instrutor */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/08/WhatsApp-Image-2025-08-05-at-18.01.05-951x1024.jpeg.webp" 
              alt="Wilgner Silva, campeão brasileiro de Wrestling"
              className="w-96 h-96 rounded-lg shadow-xl object-cover transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorBioSection;