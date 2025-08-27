import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = ({ className }: { className?: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = t('faq_section.items', { returnObjects: true }) as FaqItem[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className={`py-16 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center md:text-left mb-6 md:mb-0 text-orange-600 dark:bg-gradient-to-r dark:from-yellow-200 dark:to-orange-500 dark:bg-clip-text dark:text-transparent">
              {t('faq_section.title')}
            </h2>
          </div>
          <div className="md:w-2/3">
            {faqItems.map((item: FaqItem, index: number) => (
              <div 
                key={index} 
                // Atualizado para usar classes dark:
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold mt-3 overflow-hidden rounded-lg transition-colors duration-300"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors duration-300"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="text-lg font-semibold ">
                    {item.question}
                  </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-900 dark:text-white transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 font-bold">
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