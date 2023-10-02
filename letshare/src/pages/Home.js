import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import Statistics from '../components/Stats/Statistic';
import Question from '../components/Questions/Questions';
import Teams from '../components/Teams/Team';
import Cta from '../components/Cta/Cta';

const Home = () => {
  return (
    <div>
      <Hero />
      <Header />
      <Cta />
      <Statistics />
      <Features />
      <Teams />
      <Question />
    </div>
  );
};
export default Home;