// src/components/PricingSection.jsx
import React from 'react';

const PricingSection = () => {
  return (
    <div className="bg-[#090A0B] text-white py-10 md:py-20">
      <div className="container mx-auto px-6 text-center">

        {/* Card de Preços */}
        <div className="max-w-md mx-auto bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Aproveite a oportunidade
          </h2>

          <div className="mt-8">
            <p className="text-xl text-gray-400 line-through">
              de R$ 497,00
            </p>

            <p className="mt-4 text-4xl md:text-6xl font-extrabold text-yellow-500">
              por: 12x de 29,37
            </p>

            <p className="mt-2 text-2xl md:text-4xl font-extrabold text-yellow-500">
              ou R$ 197,0 à vista
            </p>
          </div>

          <p className="mt-6 text-lg text-gray-300">
            Acesso vitalício, certificado de conclusão e garantia incondicional de 7 dias.
          </p>

          <a
            href="#inscricao"
            className="mt-8 inline-block bg-yellow-500 text-gray-900 font-bold py-4 px-12 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105 text-lg md:text-xl"
          >
            QUERO APRENDER A DERRUBAR
          </a>

        </div>
      </div>
    </div>
  );
};

export default PricingSection;