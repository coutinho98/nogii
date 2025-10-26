import { useState, useEffect, type JSX } from 'react';

const calculateTimeLeft = () => {
  const targetDate = new Date('2025-11-06T23:59:59').getTime(); 
  const now = new Date().getTime();
  const difference = targetDate - now;

  let timeLeft: { [key: string]: number | boolean } = {};

  if (difference > 0) {
    timeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0, expired: true };
  }
  return timeLeft;
};

const CountdownTimer = ({ className }: { className?: string }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft.expired) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft.expired]);

  const timerComponents: JSX.Element[] = [];

  (Object.keys(timeLeft) as (keyof typeof timeLeft)[]).forEach((interval) => {
    if (interval === 'expired') return;

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

  return (
    <section className={`py-10 ${className}`}>
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 uppercase tracking-wider">
          {timeLeft.expired ? 'OFERTA ENCERRADA' : 'A BLACK FRIDAY ACABA EM:'}
        </h2>
        <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6">
          {timerComponents.length ? timerComponents : (
            <p className="text-xl text-red-500 font-bold">O tempo expirou.</p>
          )}
        </div>
        {!timeLeft.expired && (
          <p className="mt-8 text-xl font-bold text-yellow-400 animate-pulse">
            Preço Exclusivo de R$697,00 — Não perca o desconto de 70%!
          </p>
        )}
      </div>
    </section>
  );
};

export default CountdownTimer;