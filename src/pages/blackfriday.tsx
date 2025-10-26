import Aurora from '../components/ui/Aurora';
import FighterBioSection from '../components/FighterBioSection';
import CourseCardsSection1 from '../components/CourseCardsSection1';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#060010] relative">
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#0A0A0A", "#87420E", "#1d1d1d"]}
          blend={1}
          amplitude={0.5}
          speed={1}
        />
      </div>

      <div className="relative z-10">
        <FighterBioSection />
        <CourseCardsSection1 />
      </div>

    </div>
  )
}

export default Home;