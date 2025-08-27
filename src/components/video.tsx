import { useTranslation } from 'react-i18next';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

const VideoSection = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <section className={`py-10 relative ${className}`}>
      <div className="relative">
        <div className="absolute right-2  z-[9999] flex flex-col items-center space-y-1">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-between mb-10">
              <div className="text-left w-full">
                <h1 className="font-montserrat uppercase font-bold text-4xl md:text-5xl leading-tight text-orange-600 dark:bg-gradient-to-r dark:from-yellow-200 dark:to-orange-500 dark:bg-clip-text dark:text-transparent">
                  {t('video_section.title')}
                </h1>
              </div>
              <div className="w-full mt-2">
                <p className="text-lg text-left md:text-xl text-gray-600 dark:text-gray-300 font-montserrat font-normal leading-relaxed">
                  {t('video_section.description_part1')}{' '}
                  <span className="font-bold bg-gradient-to-r from-gray-700 dark:from-gray-200 to-yellow-500 bg-clip-text text-transparent">
                    {t('video_section.description_part2')}
                  </span>
                </p>
              </div>
            </div>
<div className="w-full mx-auto overflow-hidden rounded-lg shadow-2xl mt-8">
              <iframe
                className="w-full h-90"
                src="https://www.youtube.com/embed/1CIdvaeZ_40?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 w-full max-w-xs md:max-w-none mx-auto mt-6">
              <button
                className="w-full md:min-w-[180px] cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-montserrat font-bold py-2 px-4 rounded-full shadow-md transition duration-400 transform hover:scale-105"
                onClick={() => {
                  const targetElement = document.getElementById('pricing');
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('video_section.button_machine')}
              </button>
              <button
                className="w-full md:min-w-[180px] cursor-pointer bg-gray-100 hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-neutral-700 text-gray-900 dark:text-white border border-gray-300 dark:border-neutral-700 font-montserrat font-bold py-2 px-4 rounded-full shadow-md transition duration-400 transform hover:scale-105"
                onClick={() => {
                  const targetElement = document.getElementById('conteudo');
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('video_section.button_content')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
