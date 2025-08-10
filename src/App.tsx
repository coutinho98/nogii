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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LegalPage from './components/legal';

function App() {
  return (
    <div className="App">
      <VideoSection />
      <PainPointsSection />
      <BenefitsSection />
      <TestimonialSection />
      
      <InstructorBioSection />
      <CourseModulesSection />
      <PricingSection />
      <WhatsApp />
      <FaqSection />
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