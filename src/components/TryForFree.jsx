import logo from "../../public/logo.png";
import icon from "../../public/button_icon.svg";

function TryForFree() {
  return (
    <div className="h-[60vh] center flex-col space-y-12">
      <h1 className="text-7xl font-semibold font-space-grotesk">
        Try EliteBluPrint For Free
      </h1>
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

export default TryForFree;
