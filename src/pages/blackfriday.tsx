import CourseCardsSection1 from '../components/CourseCardsSection1';
import CountdownTimer from '../components/CountdownTimer';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#060010] relative">
      <div className="relative z-10">
        <CountdownTimer className="bg-[#060010]" />
        <CourseCardsSection1 />
      </div>

    </div>
  )
}

export default Home;