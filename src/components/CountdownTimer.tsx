import { useState, useEffect, type JSX } from 'react';

const calculateTimeLeft = () => {
  const startDate = new Date('2025-11-06T00:00:00').getTime();
  const endDate = new Date('2025-11-30T23:59:59').getTime();

  const now = new Date().getTime();

  let target: number;
  let isBeforeStart: boolean;

  if (now < startDate) {
    target = startDate;
    isBeforeStart = true;
  } else {
    target = endDate;
    isBeforeStart = false;
  }

  const difference = target - now;
  let timeLeft: { [key: string]: number | boolean } = {};

  if (difference > 0) {
    timeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
      isBeforeStart: isBeforeStart
    };
  } else {
    // Expirado
    timeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0, expired: true };
  }
  return timeLeft;
};


const CountdownTimer = ({ className }: { className?: string }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


  useEffect(() => {
    if (timeLeft.expired) return;

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.expired) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft.expired]);

  const timerComponents: JSX.Element[] = [];

  (Object.keys(timeLeft) as (keyof typeof timeLeft)[]).forEach((interval) => {
    if (interval === 'expired' || interval === 'isBeforeStart') return;

    const timeValue = timeLeft[interval] as number;
    const formattedValue = String(timeValue).padStart(2, '0');

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center p-3 sm:p-5 bg-gray-900/80 rounded-xl shadow-2xl backdrop-blur-sm border border-orange-500/50 min-w-[70px] sm:min-w-[90px]">
        <span className="text-4xl sm:text-5xl font-extrabold text-orange-500 dark:bg-gradient-to-r dark:from-yellow-200 dark:to-orange-500 dark:bg-clip-text dark:text-transparent">
          {formattedValue}
        </span>
        <span className="text-sm font-semibold uppercase text-gray-300 mt-1">
          {interval}
        </span>
      </div>
    );
  });

  const countdownTitle = timeLeft.isBeforeStart
    ? 'A BLACK FRIDAY COMEÇA EM:'
    : 'A BLACK FRIDAY TERMINARÁ EM:';

  return (
    <section className={`py-5 ${className}`}>
      
      {/* 1. Título Principal no Topo */}
      <p className="mt-4 text-4xl font-bold text-center mb-5 text-orange-400">
        Black Friday Wilgner Silva
      </p>

      <div className="container mx-auto px-6 max-w-5xl text-center">
        
        {/* 2. Texto "Terminará em" logo acima do contador */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 uppercase tracking-wider">
          {timeLeft.expired ? 'A PROMOÇÃO ENCERROU.' : countdownTitle}
        </h2>

        {/* 3. O Contador */}
        <div className="mb-10 flex justify-center space-x-3 sm:space-x-4 md:space-x-6">
            {timerComponents.length ? timerComponents : (
            <p className="text-xl text-red-500 font-bold">O tempo expirou.</p>
            )}
        </div>

        {/* 4. Seção do Cupom */}
        {!timeLeft.expired && (
          <div className="mt-10 flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 uppercase tracking-wider">
              Utilize o Cupom e Garanta Seu Desconto!
            </h3>

            <div className="bg-gray-800/80 p-6 sm:p-8 rounded-xl border-4 border-orange-500 shadow-2xl transition-all duration-300 transform hover:scale-[1.03] w-full max-w-sm">
              <p className="text-base font-bold text-gray-300 mb-3 uppercase tracking-widest">
                CUPOM EXCLUSIVO
              </p>
              <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 drop-shadow-lg leading-none block">
                BLACK
              </span>
              <p className="text-lg text-gray-400 mt-4">
                Aplique o código CUPOM <span className='text-orange-400 font-bold'>BLACK</span> no checkout.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountdownTimer;