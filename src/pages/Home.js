import Hero from "../components/Hero/Hero";
import Mading from "../components/Mading";
import madingData from "../components/utils/constants/data";

function Home() {

  return (
    <>
      <Hero />
      <Mading madingData={madingData} />
    </>
  );
}

export default Home;