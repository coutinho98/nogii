import VideoSection from './components/video';
import PainPointsSection from './components/pain'
import BenefitsSection from './components/benefit'
import InstructorBioSection from './components/description'
import CourseModulesSection from './components/module'
import PricingSection from './components/pricing'
import WhatsApp from './components/whatsapp'
import FaqSection from './components/faq'
import TestimonialSection from './components/depoiments'
import Footer from './components/footer'
import LegalPage from './components/legal';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App min-h-screen transition-colors duration-300">
      <div className="flex-col  fixed top-6 right-6 z-50 flex items-center space-x-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      <VideoSection className="bg-white dark:bg-black" />
      <PainPointsSection className="bg-gray-100 dark:bg-gray-900" />
      <BenefitsSection className="bg-white dark:bg-black" />
      <TestimonialSection className="bg-gray-100 dark:bg-gray-900" />
      <InstructorBioSection className="bg-white dark:bg-black" />
      <CourseModulesSection className="bg-gray-100 dark:bg-gray-900" />
      <PricingSection className="bg-white dark:bg-black" />
      <WhatsApp className="bg-gray-100 dark:bg-gray-900 dark:text-white" />
      <FaqSection className="bg-white dark:bg-black" />
      <Footer />
    </div>
  );
}

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;