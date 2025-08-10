import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const faqItems = [
  {
    question: "Quanto tempo de acesso eu tenho?",
    answer: "O acesso ao curso é vitalício, portanto, você pagará apenas uma vez e poderá acessar o conteúdo quando quiser."
  },
  {
    question: "Tem certificado?",
    answer: "Sim, ao finalizar todo o conteúdo do curso, você conseguirá emitir o certificado."
  },
  {
    question: "Por onde poderei acessar o curso?",
    answer: "Seu acesso será pela Kiwify."
  },
  {
    question: "Como vou receber meu acesso?",
    answer: "Você receberá um e-mail no seu e-mail cadastrado no ato da compra com todas as informações de acesso."
  },
  {
    question: "As aulas são online?",
    answer: "Sim, todo o conteúdo do curso é 100% online."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#090A0B] text-white py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center md:text-left mb-6 md:mb-0 bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent">
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="md:w-2/3">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-200 to-orange-500 text-black font-bold mt-3 overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors duration-300"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="text-lg font-semibold ">
                    {item.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-black transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-black font-bold">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;