import { useTranslation } from 'react-i18next';

const VideoSection = () => {
  const { t } = useTranslation();

  return (
  <main className="bg-white dark:bg-[#090A0B] text-black dark:text-white py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-between mb-10">
            <div className="text-left w-full">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent">
                {t('video_section.title')}
              </h1>
            </div>
            <div className="w-full mt-2">
              <p className="text-lg text-left md:text-xl text-gray-300 font-montserrat font-normal leading-relaxed">
                {t('video_section.description_part1')} <span className="font-bold bg-gradient-to-r from-gray-200 to-yellow-500 bg-clip-text text-transparent">
                  {t('video_section.description_part2')}
                </span>
              </p>
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
              {t('video_section.video_not_supported')}
            </video>
          </div>

          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 w-full max-w-xs md:max-w-none mx-auto mt-6">
            <button
              className="w-full md:min-w-[180px] cursor-pointer bg-yellow-500 text-gray-900 font-montserrat font-bold py-2 px-4 rounded-full shadow-md transition duration-400 transform hover:bg-yellow-600"
              onClick={() => window.open("https://pay.kiwify.com.br/abTfgqv", "_blank", "noopener,noreferrer")}
            >
              {t('video_section.button_machine')}
            </button>
            <button
              className="w-full md:min-w-[180px] cursor-pointer bg-neutral-900 text-white border-1 border-neutral-700 font-montserrat font-bold py-2 px-4 rounded-full shadow-md transition duration-400 transform hover:bg-neutral-700"
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
    </main>
  );
};

export default VideoSection;