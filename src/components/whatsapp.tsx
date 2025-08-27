import { useTranslation } from 'react-i18next';

const WhatsApp = ({ className }: { className?: string }) => {
    const { t } = useTranslation();
    return (
        <section className={`w-full py-16 ${className}`}>
            <div className="max-w-5xl mx-auto text-center px-4">
                <div className="flex justify-center items-center gap-3 mb-6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        className="w-20 h-20"
                    />
                    <h2 className="text-3xl font-bold">{t('whatsapp_section.title')}</h2>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    {t('whatsapp_section.description')}
                </p>

                <a
                    href="https://api.whatsapp.com/send?phone=5561981292064&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20curso%20de%20%20Wrestling%20%20para%20%20o%20%20Jiu-J%C3%ADtsu"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        className="w-5 h-5"
                    />
                    {t('whatsapp_section.button_text')}
                </a>
                
                <div className="mt-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {t('guarantee_text.title')}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default WhatsApp;
