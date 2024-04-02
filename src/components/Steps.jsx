import { useEffect, useState } from "react";
import step1 from "../../public/step1.png";
import step2 from "../../public/step2.png";
import step3 from "../../public/step3.png";

const data = [
  {
    topic: "Describe your floor plan idea in simple text",
    img: step1,
  },
  {
    topic: "Generate ,View and Download Your Plans",
    img: step2,
  },
  {
    topic: "Connect with Reliable Architects",
    img: step3,
  },
];

function Steps() {
  const [imageBackground, setImageBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const imageThreshold = windowHeight * 0.5;

      data.forEach((_, index) => {
        const imageElement = document.getElementById(`image-${index}`);
        if (imageElement) {
          const { top } = imageElement.getBoundingClientRect();
          if (top <= imageThreshold) {
            setImageBackground(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen py-20 flex flex-col items-center justify-center">
      <h1 className="text-7xl font-semibold font-space-grotesk mb-12">Steps</h1>
      {data.map((item, index) => (
        <div key={index} className="center">
          <div className="flex space-x-25">
            <div className="w-[40vw] space-y-4  ">
              <h1 className="text-3xl ">{item.topic}</h1>
            </div>

            <div className="center flex-col">
              <img
                id={`image-${index}`}
                src={item.img}
                alt="image"
                className={`cursor-pointer ease-out rounded-full ${
                  imageBackground === index && "box-shadow scale-110"
                }`}
              />
              {index !== data.length - 1 && (
                <hr className="border-none h-[20vh] box-shadow bg-[#3B82F6] w-[1px]" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Steps;
