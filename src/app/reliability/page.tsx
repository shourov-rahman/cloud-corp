import Hero from "@/components/hero";
import reliabilityImg from "../../../public/reliability.jpg";

const ReliabilityPage = () => {
  return (
    <div>
      <Hero
        imgData={reliabilityImg}
        imgAlt="working on factory"
        title="Reliability is our number priority"
      />
    </div>
  );
};

export default ReliabilityPage;
