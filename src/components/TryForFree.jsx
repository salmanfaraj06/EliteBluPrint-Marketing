import arrow from "../../public/arrow_head.svg";
import icon from "../../public/button_icon.svg";

function TryForFree() {
  return (
    <div className="min-h-screen center flex-col space-y-12">
      <img src={arrow} alt="arrow" />
      <h1 className="text-7xl font-semibold font-space-grotesk">
        Try EliteBluPrint For Free
      </h1>
      <button className="bg-[#3887FD80] center space-x-3 p-3 px-5 rounded-full">
        <img src={icon} alt="btn_icon" /> <span>Try It Now</span>
      </button>
    </div>
  );
}

export default TryForFree;
