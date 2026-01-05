import { CheckBadgeIcon, ClockIcon, TrophyIcon, ShieldCheckIcon, QuestionMarkCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import type { ElementType } from 'react';

interface BenefitItem {
  icon: ElementType;
  text: string;
}

const benefitIcons: { [key: string]: ElementType } = {
  "Do básico ao avançado": TrophyIcon,
  "Acesso vitalício": ClockIcon,
  "Certificado de conclusão": CheckBadgeIcon,
  "Garantia incondicional de 7 dias": ShieldCheckIcon,
  "Suporte para dúvidas": QuestionMarkCircleIcon,
  "Atualizações grátis": ArrowPathIcon,
  "From basic to advanced": TrophyIcon,
  "Lifetime access": ClockIcon,
  "Certificate of completion": CheckBadgeIcon,
  "7-day unconditional guarantee": ShieldCheckIcon,
  "Support for questions": QuestionMarkCircleIcon,
  "Free updates": ArrowPathIcon,
  "De lo básico a lo avanzado": TrophyIcon,
  "Acceso de por vida": ClockIcon,
  "Certificado de finalización": CheckBadgeIcon,
  "Garantía incondicional de 7 días": ShieldCheckIcon,
  "Soporte para dudas": QuestionMarkCircleIcon,
  "Actualizaciones gratuitas": ArrowPathIcon,
};

const currencyMap: Record<string, { currency: string; locale: string }> = {
  pt: { currency: "BRL", locale: "pt-BR" },
  en: { currency: "USD", locale: "en-US" },
  es: { currency: "USD", locale: "en-US" },
};

const formatPrice = (value: number, lang: string) => {
  const config = currencyMap[lang] || currencyMap.en;
  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency
  }).format(value);
};

const splitPriceParts = (value: number, lang: string) => {
  const formatted = formatPrice(value, lang);

  const match = formatted.match(/^([^0-9]*)([\d.,]+)([.,]\d{2})?([^0-9]*)$/);

  return {
    symbolBefore: match?.[1] || "",
    integerPart: match?.[2] || "0",
    decimalPart: match?.[3] || "",
    symbolAfter: match?.[4] || ""
  };
};

const PricingSection = ({ className }: { className?: string }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split("-")[0];

  const benefitsList = (t('pricing_section.benefits_list', { returnObjects: true }) as string[]).map(benefitText => ({
    icon: benefitIcons[benefitText] || TrophyIcon,
    text: benefitText,
  }));

  let productUrl = "https://pay.kiwify.com/VFQHYeA";
  let installmentsPrice = 20.37;
  let fullPrice = 197;

  if (lang === 'pt') {
    productUrl = "https://pay.kiwify.com.br/abTfgqv";
    installmentsPrice = 20.37;
    fullPrice = 197;
  } else if (lang === 'en') {
    productUrl = "https://pay.hotmart.com/D100922357U?checkoutMode=10";
    installmentsPrice = 47;
    fullPrice = 47;
  } else if (lang === 'es') {
    productUrl = "https://pay.hotmart.com/O100799323A?checkoutMode=10";
    installmentsPrice = 47;
    fullPrice = 47;
  }

  const priceParts = splitPriceParts(installmentsPrice, lang);

  const showFullPrice = fullPrice !== installmentsPrice;

  return (
    <section id="pricing" className={`relative overflow-hidden py-16 ${className}`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 relative z-10 max-w-5xl">

        <div className="text-center md:text-left flex-1 md:w-1/2">
          <p className="text-lg dark:text-white">
            {t('pricing_section.from_price')}{" "}
            <span className="line-through dark:text-white">{formatPrice(497, lang)}</span>
          </p>
          <p className="text-lg dark:text-white">{t('pricing_section.to_price')}</p>
          <p className="text-3xl dark:text-white font-bold tracking-tight">{t('pricing_section.installments_text')}</p>

          <p className="relative inline-flex items-start text-7xl font-extrabold text-orange-600 dark:bg-gradient-to-r dark:from-yellow-200 dark:to-orange-500 dark:bg-clip-text dark:text-transparent leading-tight drop-shadow-lg">
            {priceParts.symbolBefore}{priceParts.integerPart}
            {priceParts.decimalPart && (
              <span className="absolute top-1 text-3xl">{priceParts.decimalPart}</span>
            )}
            {priceParts.symbolAfter}
          </p>

          {showFullPrice && (
            <p className="mt-2 text-lg text-black dark:text-white">
              {t('pricing_section.or_text')}{" "}
              <span className="text-4xl font-bold text-orange-600 dark:bg-gradient-to-r dark:from-yellow-200 dark:to-orange-500 dark:bg-clip-text dark:text-transparent">
                {formatPrice(fullPrice, lang)}
              </span>
              <span className="align-top text-sm "> {t('pricing_section.cash_text')}</span>
            </p>
          )}

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
            {t('pricing_section.limited_offer')}
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-xl shadow-lg max-w-sm w-full flex-1 md:w-1/2 transition-colors duration-300">
          <ul className="space-y-3 text-gray-900 dark:text-white text-sm md:text-base">
            {benefitsList.map((benefit: BenefitItem, index: number) => {
              const Icon = benefitIcons[benefit.text] || TrophyIcon;
              return (
                <li key={index} className="flex items-center">
                  <Icon className="h-5 w-5 text-yellow-500 dark:text-yellow-300 mr-2" />
                  {benefit.text}
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => window.open(productUrl, "_blank", "noopener,noreferrer")}
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