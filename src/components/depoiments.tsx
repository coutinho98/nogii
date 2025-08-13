import { motion, useMotionValue, animate } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface TestimonialItem {
  text: string;
}

const TestimonialSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);

  const testimonials = t('testimonials_section.items', { returnObjects: true }) as TestimonialItem[];
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const animationControls = useRef<any>(null);

  const startAnimation = () => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth;
      const scrollDuration = 30;
      
      animationControls.current = animate(x, -totalWidth / 2, {
        ease: 'linear',
        duration: scrollDuration,
        repeat: Infinity,
        repeatType: 'loop',
      });
    }
  };

  useEffect(() => {
    startAnimation();
    
    return () => {
      if (animationControls.current) {
        animationControls.current.stop();
      }
    };
  }, [x]);

  const handleDragEnd = () => {
    if (animationControls.current) {
      animationControls.current.stop();
    }
    startAnimation();
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-6 max-w-7xl overflow-hidden relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
          {t('testimonials_section.title')}
        </h2>

        <div className="relative overflow-hidden w-full">
          <motion.div
            ref={containerRef}
            className="flex gap-8 cursor-grab"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }} 
            onDragEnd={handleDragEnd}
          >
            {duplicatedTestimonials.map((testimonial: TestimonialItem, index: number) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-[#111] p-4 shadow-sm rounded-2xl flex-shrink-0 relative transition-colors duration-300"
                style={{ width: 'clamp(300px, 40vw, 450px)' }}
              >
                <div className="flex-grow">
                  <p className="text-gray-700 dark:text-gray-300 italic mt-4 text-sm sm:text-base mb-4">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="absolute top-3 right-3 flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-500" />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;