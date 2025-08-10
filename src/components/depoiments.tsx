import { motion, useMotionValue, animate } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    text: "Vlw professor!! O curso está tão bem explicado que não deixa dúvidas. Meus alunos estão muito empolgados, estão desenvolvendo em pouco tempo o que muitos levariam anos. Eu é que só tenho a agradecer!!! Depois vamos combinar para vc fazer um seminário aqui na cidade e região.",
  },
  {
    text: "Muito bom irmão. Você faz a parada ser muito simples ❤️. Os verdadeiros gênios (professores) pegam coisas complexas e tornam simples ❤️. Parabéns.",
  },
  {
    text: "Parabéns pela iniciativa do curso online, muitas cidades pequenas como a minha não tem especialistas na área! Mas com o conhecimento de jiu-jitsu um pouco avançado, já conseguimos aprender através de vídeos e se auto corrigir!",
  },
];

const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
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
    <section className="bg-[#090A0B] text-white py-10">
      <div className="container mx-auto px-6 max-w-7xl overflow-hidden relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
          Esses são alguns dos nossos alunos que começaram a derrubar seus oponentes
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
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#111] p-4 shadow-sm rounded-2xl flex-shrink-0 relative"
                style={{ width: 'clamp(300px, 40vw, 450px)' }}
              >
                <div className="flex-grow">
                  <p className="text-gray-300 italic mt-4 text-sm sm:text-base mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-sm sm:text-lg text-yellow-500">
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