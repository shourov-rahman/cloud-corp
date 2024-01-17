import Hero from "@/components/hero";
import homeImg from "../../public/home.jpg";

const Home = () => {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt="car factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
};

export default Home;
