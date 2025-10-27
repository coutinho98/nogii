import FighterBioSection from '../components/FighterBioSection';
import CourseCardsSection1 from '../components/CourseCardsSection1';


const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#060010] relative">
      <div className="relative z-10">
        <FighterBioSection />
        <CourseCardsSection1 />
      </div>

    </div>
  )
}

export default Home;