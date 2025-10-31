import { useState, useEffect, type JSX, useRef, useLayoutEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const GROUP_CODE = "CehwexWdYgBIpT5epzemsR"; 
const WHATSAPP_LINK = `https://chat.whatsapp.com/${GROUP_CODE}`;

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
  
  const [formFeedback, setFormFeedback] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const formContainerRef = useRef<HTMLDivElement>(null);

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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    
    if (form.checkValidity()) {
        
        e.preventDefault(); 
        
        const submitButton = form.querySelector('input[type="submit"]') as HTMLInputElement;
        if (submitButton) {
            submitButton.value = 'ENVIADO... AGUARDE!';
            submitButton.disabled = true;
        }

        setFormFeedback('submitting'); 

        setTimeout(() => {
             setFormFeedback('submitted');
             form.submit(); 
        }, 800);

    } else {
        setFormFeedback('error');
    }
  };

  useLayoutEffect(() => {
    if (formContainerRef.current) {
        if (!formContainerRef.current.querySelector('form')) {
            
            const formWrapper = document.createElement('form');
            formWrapper.method = 'post';
            formWrapper.action = 'https://webhook.sellflux.app/v2/webhook/form/206ce63403638d7733b13d95e9ba4741?not_query=true&redirect_url=https%3A%2F%2Fwilgnersilva.com.br%2Fblackfriday';
            formWrapper.setAttribute('name', 'sellflux_form_backup'); 
            formWrapper.innerHTML = sellFluxFormHtmlContent; 

            formWrapper.onsubmit = (e) => handleFormSubmit(e as unknown as React.FormEvent<HTMLFormElement>);

            formContainerRef.current.innerHTML = '';
            formContainerRef.current.appendChild(formWrapper);
        }
    }
  }, [formFeedback]); 

  const handleWhatsappClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    
    const userAgent = navigator.userAgent;
    const isAndroid = /Android/i.test(userAgent);
    const isInApp = /(Instagram|FBAN|FBAV|FB_IAB|Messenger)/i.test(userAgent);
    
    const intentUrl = `intent://chat.whatsapp.com/${GROUP_CODE}#Intent;scheme=https;package=com.whatsapp;end`;

    if (isAndroid && isInApp) {
        window.location.href = intentUrl;
    } else {
        window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer"); 
    }
  };

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
  
  const sellFluxFormHtmlContent = `
    <div class="container_html" style="width: 100%;">
                  <div style="margin-bottom:1rem;">
                    <input type="text" id="name-2" name="name" value="" placeholder="Insira seu nome" required class="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" />
                  </div>
            
                  <div style="margin-bottom:1rem;" >
                    <input type="email" id="email-2" name="email" value="" placeholder="Insira seu melhor e-mail" required class="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" />
                  </div>
            
                  <div style="margin-bottom:1rem;">
                    <input
                      type="tel"
                      id="tel-2"
                      name="phone"
                      maxlength="15"
                      placeholder="(00) 00000-0000"
                      required
                      class="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      style="
                          width: 100%;
                          padding: .375rem .75rem; 
                          font-size: 1rem; 
                          font-weight: 400; 
                          line-height: 1.5; 
                          color: #fff; 
                          background-color: #1f2937 !important;
                          border: 1px solid #4b5563; 
                          border-radius: .5rem;
                          box-sizing: border-box;
                      "
                    />
                  </div>
            
            <input type="submit" value="CONTINUAR" 
              class="w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 shadow-lg text-white" 
              style="display:block; width:100%; line-height:1.5; text-align:center; text-decoration:none; vertical-align:middle; cursor:pointer; font-size:1rem; margin-top: 20px; font-weight: 700; text-transform: uppercase; text-shadow: 0 0 2px rgb(0 0 0 / 80%); padding: 13px; background-color: #16b763; color: #fff; border-radius: 15px; box-shadow: 0 -1px 24px 0 #16b763; border:1px solid transparent" >
            
            <style>
              .form-group-2 {
                width: 100%;
                margin-bottom: 1rem;
              }
              .form-group-2 select,
              .form-group-2 input[type="tel"] {
                  font-size: 1rem;
                  font-weight: 400;
                  line-height: 1.5;
                  color: #fff !important; 
                  background-color: #1f2937 !important;
                  padding: .370rem .75rem !important;
                  height: calc(2.25rem + 2px) !important;
                  border: 1px solid #4b5563 !important; 
                  box-sizing: border-box !important; 
              }
              .form-group-2 input[type="tel"] {
                  width: 100% !important;
                  height: 100%; 
                  border-radius: .5rem !important; 
              }
              .container_html {
              transition: width 0.5s;
              }
              @media (max-width: 600px) {
                .container_html {
                    width: 100% !important
                }
              }
            </style>
          </div>
  `;
  
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
              onClick={handleWhatsappClick}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
                           px-10 py-4 rounded-lg font-bold text-lg 
                           hover:from-green-600 hover:to-emerald-700 
                           shadow-xl shadow-green-500/30 transition-all duration-300 transform hover:scale-[1.05]"
            >
              <FaWhatsapp className="w-10 h-10" />
              Entre para o grupo de WhatsApp
            </a>
            
            <div className="mt-8 pt-6 border-t border-gray-700 max-w-sm mx-auto">
              <p className="text-sm text-gray-400 mb-4">
                {formFeedback === 'submitted' || formFeedback === 'submitting' ? (
                    <span className="text-green-400 font-bold">SUCESSO! Seus dados foram enviados. Você será redirecionado em breve.</span>
                ) : formFeedback === 'error' ? (
                    <span className="text-red-500 font-bold">Por favor, preencha todos os campos obrigatórios e tente novamente.</span>
                ) : (
                    'Se não conseguir entrar no grupo, deixe seus dados e te enviaremos o link:'
                )}
              </p>
              
              <div ref={formContainerRef} /> 

            </div>
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