import Image, { StaticImageData } from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

const Hero = ({ imgData, imgAlt, title }: HeroProps) => {
  return (
    <>
      <div>
        <div className="absolute inset-0 -z-10">
          <Image
            src={imgData}
            alt={imgAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl font-extrabold">{title}</h1>
      </div>
    </>
  );
};

export default Hero;
