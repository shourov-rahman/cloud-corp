import Hero from "@/components/hero";
import performanceImg from "../../../public/performance.jpg";

const PerformancePage = () => {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="sparking"
        title="Blazing fast performance"
      />
    </div>
  );
};

export default PerformancePage;
