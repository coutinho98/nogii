import { useState, useEffect, type JSX } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

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

  const WHATSAPP_LINK = "https://chat.whatsapp.com/CehwexWdYgBIpT5epzemsR?mode=wwt";

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
      <p className="mt-9 text-4xl font-bold text-center mb-5 text-orange-400">
        Black Friday Wilgner Silva
      </p>
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 uppercase tracking-wider">
          {timeLeft.expired ? 'OFERTA ENCERRADA' : 'A BLACK FRIDAY COMEÇARÁ EM:'}
        </h2>
        <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6">
          {timerComponents.length ? timerComponents : (
            <p className="text-xl text-red-500 font-bold">O tempo expirou.</p>
          )}
        </div>

        {!timeLeft.expired && (
          <div className="mt-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
                                 px-10 py-4 rounded-lg font-bold text-lg 
                                 hover:from-green-600 hover:to-emerald-700 
                                 shadow-xl shadow-green-500/30 transition-all duration-300 transform hover:scale-[1.05]"
            >
              <FaWhatsapp className="w-10 h-10" />
              GARANTA SEU COMBO OU TIRE DÚVIDAS AGORA!
            </a>
          </div>
        )}

        {timeLeft.expired && (
          <p className="mt-8 text-xl text-red-500 font-bold">O tempo expirou. A oferta exclusiva de R$697,00 não está mais disponível.</p>
        )}
      </div>
    </section>
  );
};

export default CountdownTimer;