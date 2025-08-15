import { useTranslation } from 'react-i18next';
import Wilgner from '../assets/images/wilgnersilva.webp'

const InstructorBioSection = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <section className={`py-10 md:py-40 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-300">
              {t('instructor_bio.greeting')}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent mt-2">
              {t('instructor_bio.name')}
            </h2>
            <p className="mt-2 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-400">
              {t('instructor_bio.title')}
            </p>
            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('instructor_bio.description_part1')} <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">{t('instructor_bio.description_highlight1')}</span> {t('instructor_bio.description_part2')} <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">{t('instructor_bio.description_highlight2')}</span> {t('instructor_bio.description_part3')}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('instructor_bio.description_part4')} <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">{t('instructor_bio.description_highlight3')}</span> {t('instructor_bio.description_part5')}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('instructor_bio.description_part6')} <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">{t('instructor_bio.description_highlight4')}</span> {t('instructor_bio.description_part7')}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('instructor_bio.description_part8')} <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">{t('instructor_bio.description_highlight5')}</span> {t('instructor_bio.description_part9')}
            </p>
            <p className="mt-6 text-yellow-500 font-bold text-xl md:text-2xl">
              {t('instructor_bio.call_to_action')}
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={Wilgner}
              alt={t('instructor_bio.name')}
              className="w-96 h-96 rounded-lg shadow-xl object-cover transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorBioSection;