import VideoSection from './components/video';
import PainPointsSection from './components/pain'
import BenefitsSection from './components/benefit'
import InstructorBioSection from './components/description'
import CourseModulesSection from './components/module'
import PricingSection from './components/pricing'
import WhatsApp from './components/whatsapp'
import FaqSection from './components/faq'

function App() {
  return (
    <div className="App">
      <VideoSection />
      <PainPointsSection />
      <BenefitsSection />
      <InstructorBioSection />
      <CourseModulesSection />
      <PricingSection />
      <WhatsApp />
      <FaqSection />
    </div>
  );
}

export default App;