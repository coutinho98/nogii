import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">

        <div className="text-center md:text-left">
          <p className="text-sm">
            {t('footer.copyright')}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center space-x-4">
          <Link
            to="/legal#politica-privacidade"
            className="text-sm hover:text-white transition-colors duration-300"
          >
            {t('footer.privacy_policy')}
          </Link>
          <Link
            to="/legal#politica-cookies"
            className="text-sm hover:text-white transition-colors duration-300"
          >
            {t('footer.cookies_policy')}
          </Link>
          <Link
            to="/legal#termos-servicos"
            className="text-sm hover:text-white transition-colors duration-300"
          >
            {t('footer.terms_of_service')}
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;