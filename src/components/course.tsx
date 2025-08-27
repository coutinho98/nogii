import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

interface TopicItem {
  title: string;
  points: string[];
}

const CourseContent = ({ className }: { className?: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggleContent = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const topics = t('course_content.topics', { returnObjects: true }) as TopicItem[];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col gap-10 items-start">
          <div className="w-full text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 dark:bg-gradient-to-r dark:from-yellow-200 dark:to-orange-500 dark:bg-clip-text dark:text-transparent">
              {t('course_content.title')}
            </h2>
          </div>
          <div className="w-full">
            {topics.map((item: TopicItem, index: number) => {
              const [number, ...restOfTitle] = item.title.split(' ');
              const titleWithoutNumber = restOfTitle.join(' ');
              
              return (
                <div 
                  key={index} 
                  className="bg-gray-100 dark:bg-gray-800 border border-gray-400 text-gray-900 dark:text-white font-bold mt-3 overflow-hidden rounded-lg transition-colors duration-300"
                >
                  <button
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors duration-300"
                    onClick={() => toggleContent(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white font-bold flex-shrink-0">
                        {number}
                      </div>
                      <h3 className="text-lg font-semibold flex-1">
                        {titleWithoutNumber}
                      </h3>
                    </div>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-gray-900 dark:text-white transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <ul className="p-6 pt-0 font-normal list-disc list-inside">
                        {item.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-gray-700 dark:text-gray-300">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;