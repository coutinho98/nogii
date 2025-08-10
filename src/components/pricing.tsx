import { CheckBadgeIcon, ClockIcon, TrophyIcon, ShieldCheckIcon, QuestionMarkCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const PricingSection = () => {
  return (
    <section className="bg-[#090A0B] text-white relative overflow-hidden">

      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 relative z-10 max-w-5xl">

        <div className="text-center md:text-left flex-1 md:w-1/2">
          <p className="text-lg text-white">
            de <span className="line-through">R$ 497,00</span>
          </p>
          <p className="text-lg text-white">por apenas</p>
          <p className="text-3xl font-bold tracking-tight ">12x de</p>

          <p className="text-7xl font-extrabold bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            R$ 20
            <span className="align-top text-3xl">,37</span>
          </p>

          <p className="mt-2 text-lg">
            ou{" "}
            <span className="text-4xl font-bold bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent">
              R$ 197
            </span>
            <span className="align-top text-sm"> à vista</span>
          </p>

          <p className="mt-4 text-sm text-gray-400 italic">
            Oferta exclusiva — válida por tempo limitado
          </p>
        </div>

        <div className="bg-[#111] p-8 rounded-xl  shadow-lg max-w-sm w-full flex-1 md:w-1/2">
          <ul className="space-y-3 text-white text-sm md:text-base">
            <li className="flex items-center">
              <TrophyIcon className="h-5 w-5 text-yellow-300 mr-2" />
              Do básico ao avançado
            </li>
            <li className="flex items-center">
              <ClockIcon className="h-5 w-5 text-yellow-300 mr-2" />
              Acesso vitalício
            </li>
            <li className="flex items-center">
              <CheckBadgeIcon className="h-5 w-5 text-yellow-300 mr-2" />
              Certificado de conclusão
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="h-5 w-5 text-yellow-300 mr-2" />
              Garantia incondicional de 7 dias
            </li>
            <li className="flex items-center">
              <QuestionMarkCircleIcon className="h-5 w-5 text-yellow-300 mr-2" />
              Suporte para dúvidas
            </li>
            <li className="flex items-center">
              <ArrowPathIcon className="h-5 w-5 text-yellow-300 mr-2" />
              Atualizações grátis
            </li>
          </ul>

          <button
            onClick={() => window.location.href = "#inscricao"}
            className="cursor-pointer mt-6 w-full flex items-center justify-center gap-2 
             bg-gradient-to-r from-yellow-200 to-orange-500 text-black text-lg 
             font-bold py-4 px-8 rounded-lg shadow-lg 
             transition-all duration-500 ease-in-out 
             hover:from-yellow-300 hover:to-orange-500 hover:shadow-xl"
          >
            Quero aprender a derrubar!
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;