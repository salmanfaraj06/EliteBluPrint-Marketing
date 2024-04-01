import icon from "../../public/button_icon.svg";

function Hero() {
  return (
    <div className="min-h-screen center w-[50%] mx-auto text-center flex-col">
      <h1 className="text-7xl font-semibold font-space-grotesk mb-6">
        The first text based floor plan generator
      </h1>
      <p className="text-2xl text-gray-400 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <a
        href="https://elitebluprint.live/"
        target="_blank"
        className="bg-[#3887FD80] center space-x-3 p-3 px-5 rounded-full"
      >
        <img src={icon} alt="btn_icon" /> <span>Try It Now</span>
      </a>
    </div>
  );
}

export default Hero;
