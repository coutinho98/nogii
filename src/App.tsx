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
/* import Events from './pages/events'
import Home from './pages/home'
import Upsell from './pages/upsell'
import Blackfriday from './pages/blackfriday' */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseContent from './components/course';

function App() {
  return (
    <div className="App min-h-screen">
      <VideoSection className="bg-white dark:bg-black" />
      <PainPointsSection className="bg-gray-100 dark:bg-gray-900" />
      <BenefitsSection className="bg-white dark:bg-black" />
      <TestimonialSection className="bg-gray-100 dark:bg-gray-900" />
      <InstructorBioSection className="bg-white dark:bg-black" />
      <CourseModulesSection className="bg-gray-100 dark:bg-gray-900" />
      <CourseContent className="bg-gray-100 dark:bg-gray-900" />
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
 {/*        <Route path='/upsell' element={<Upsell />} />
        <Route path='/blackfriday' element={<Blackfriday />} />
        <Route path='/combo' element={<Home />} /> */}
        <Route path="/legal" element={<LegalPage />} />
{/*         <Route path='/eventos' element={<Events />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;