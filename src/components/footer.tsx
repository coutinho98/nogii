import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        
        <div className="text-center md:text-left">
          <p className="text-sm">
            © 2023 Wilgner Silva. Todos os direitos reservados.
          </p>
        </div>
        
        <nav className="flex flex-wrap justify-center space-x-4">
          <Link
            to="/legal#politica-privacidade"
            className="text-sm hover:text-white transition-colors duration-300"
          >
            Política de Privacidade
          </Link>
          <Link
            to="/legal#politica-cookies"
            className="text-sm hover:text-white transition-colors duration-300"
          >
            Política de Cookies
          </Link>
          <Link
            to="/legal#termos-servicos"
            className="text-sm hover:text-white transition-colors duration-300"
          >
            Termos de Serviço
          </Link>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;