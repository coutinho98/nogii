import { CheckBadgeIcon, ClockIcon, TrophyIcon, ShieldCheckIcon, QuestionMarkCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

const benefitIcons: { [key: string]: React.ElementType } = {
  "Do básico ao avançado": TrophyIcon,
  "Acesso vitalício": ClockIcon,
  "Certificado de conclusão": CheckBadgeIcon,
  "Garantia incondicional de 7 dias": ShieldCheckIcon,
  "Suporte para dúvidas": QuestionMarkCircleIcon,
  "Atualizações grátis": ArrowPathIcon,
};

const PricingSection = () => {
  const { t } = useTranslation();

  const benefitsList = (t('pricing_section.benefits_list', { returnObjects: true }) as string[]).map(benefit => ({
    icon: benefitIcons[benefit] || TrophyIcon,
    text: benefit,
  }));

  return (
    <section className="bg-[#090A0B] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 relative z-10 max-w-5xl">
        <div className="text-center md:text-left flex-1 md:w-1/2">
          <p className="text-lg text-white">
            {t('pricing_section.from_price')} <span className="line-through">R$ 497,00</span>
          </p>
          <p className="text-lg text-white">{t('pricing_section.to_price')}</p>
          <p className="text-3xl font-bold tracking-tight ">{t('pricing_section.installments_text')}</p>

          <p className="text-7xl font-extrabold bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            R$ 20
            <span className="align-top text-3xl">,37</span>
          </p>

          <p className="mt-2 text-lg">
            {t('pricing_section.or_text')}{" "}
            <span className="text-4xl font-bold bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent">
              R$ 197
            </span>
            <span className="align-top text-sm"> {t('pricing_section.cash_text')}</span>
          </p>

          <p className="mt-4 text-sm text-gray-400 italic">
            {t('pricing_section.limited_offer')}
          </p>
        </div>

        <div className="bg-[#111] p-8 rounded-xl  shadow-lg max-w-sm w-full flex-1 md:w-1/2">
          <ul className="space-y-3 text-white text-sm md:text-base">
            {benefitsList.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <li key={index} className="flex items-center">
                  <Icon className="h-5 w-5 text-yellow-300 mr-2" />
                  {t(`pricing_section.benefits_list.${index}`)}
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => window.location.href = "#inscricao"}
            className="cursor-pointer mt-6 w-full flex items-center justify-center gap-2 
             bg-gradient-to-r from-yellow-200 to-orange-500 text-black text-lg 
             font-bold py-4 px-8 rounded-lg shadow-lg 
             transition-all duration-500 ease-in-out 
             hover:from-yellow-300 hover:to-orange-500 hover:shadow-xl"
          >
            {t('pricing_section.button_text')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;