const CourseModulesSection = () => {
  return (
    <section className="bg-[#090A0B] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
             Seguindo este caminho que eles conseguiram chegar nesse resultado
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            
            <article className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden group">
              <img 
                src="https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-30-768x1024.png.webp"
                alt="Imagem do Módulo de Movimentos Básicos"
                className="w-full h-auto rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105"
              />
              <h3 className="text-xl md:text-2xl font-bold text-yellow-500">
                MOVIMENTOS BÁSICOS
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Este módulo te ensina as quedas mais eficazes do wrestling moderno com uma metodologia única: cada técnica é quebrada em seus componentes essenciais para garantir execução perfeita. Você dominará as duas quedas que resolvem 80% das situações - Single Leg e Double Leg - além de suas variações mais letais e as defesas que te tornarão impossível de derrubar.
              </p>
            </article>
            
            {/* Módulo 2: Entradas */}
            <article className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden group">
              <img 
                src="https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-32-768x1024.png.webp"
                alt="Imagem do Módulo de Entradas"
                className="w-full h-auto rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105"
              />
              <h3 className="text-xl md:text-2xl font-bold text-yellow-500">
                ENTRADAS QUE TODO GRAPPLER DEVE SABER
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Dominar quedas sem saber criar oportunidades é inútil. Este módulo ensina os setups e entradas que transformam qualquer situação defensiva em chance de queda garantida. Você aprenderá a "enxergar" aberturas onde outros só veem guardas fechadas.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                <span className="font-bold text-white">Por que funciona:</span> Enquanto 90% força quedas contra adversários preparados, você criará suas próprias oportunidades, fazendo suas quedas parecerem "fáceis demais."
              </p>
            </article>
            
            {/* Módulo 3: Cinturadas e Clinch */}
            <article className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden group">
              <img 
                src="https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-31-1-768x1024.png.webp"
                alt="Imagem do Módulo de Cinturadas e Clinch"
                className="w-full h-auto rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105"
              />
              <h3 className="text-xl md:text-2xl font-bold text-yellow-500">
                CINTURADAS E CLINCH
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Quando a luta fica grudada, quem domina o clinch domina tudo. Você aprenderá as cinturadas e técnicas que fazem adversários se sentirem presos em uma morsa - impossíveis de escapar.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                <span className="font-bold text-white">Por que funciona:</span> No clinch, técnica vence força. Mesmo sendo menor, você controlará adversários maiores através de alavancas e pressão inteligente.
              </p>
            </article>
            
            {/* Módulo 4: Defesas */}
            <article className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden group">
              <img 
                src="https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-33-768x1024.png.webp"
                alt="Imagem do Módulo de Defesas"
                className="w-full h-auto rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105"
              />
              <h3 className="text-xl md:text-2xl font-bold text-yellow-500">
                DEFESAS
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Uma defesa sólida é sua arma secreta para vencer qualquer adversário. Aqui você aprende que é muito mais desgastante atacar do que defender - e como usar isso a seu favor. Enquanto seus oponentes se esgotam tentando te derrubar, você conserva energia e espera o momento perfeito para atacar.
              </p>
            </article>

            {/* Módulo 5: Drills */}
            <article className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden group">
              <img 
                src="https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-34-768x1024.png.webp"
                alt="Imagem do Módulo de Drills"
                className="w-full h-auto rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105"
              />
              <h3 className="text-xl md:text-2xl font-bold text-yellow-500">
                DRILLS
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Conhecer as técnicas é apenas o começo - dominar é sobre repetição inteligente. Este módulo te ensina os drills específicos que gravam os movimentos na sua memória muscular até se tornarem automáticos. É a diferença entre saber fazer e fazer sem pensar.
              </p>
            </article>

            {/* Módulo 6: Bônus */}
            <article className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden group">
              <img 
                src="https://wilgnersilva.com.br/wp-content/webp-express/webp-images/uploads/2025/05/Design-sem-nome-35.png.webp"
                alt="Imagem do Módulo de Bônus"
                className="w-full h-auto rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105"
              />
              <h3 className="text-xl md:text-2xl font-bold text-yellow-500">
                BÔNUS
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                As técnicas que poucos conhecem e ainda menos dominam. Este módulo bônus revela movimentos de elite que combinam wrestling com judô, defesas avançadas contra finalizações e quedas espetaculares que deixam adversários sem reação. São as cartas na manga que transformam bons lutadores em imbatíveis.
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseModulesSection;