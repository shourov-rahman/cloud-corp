import Hero from "@/components/hero";
import scaleImg from "../../../public/scale.jpg";

const ScalePage = () => {
  return (
    <div>
      <Hero imgData={scaleImg} imgAlt="factory" title="Scale to infinity" />
    </div>
  );
};

export default ScalePage;
