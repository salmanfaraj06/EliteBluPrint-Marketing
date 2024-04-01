import logo from "../../../public/logo.svg";

function navbar() {
  return (
    <div className="p-2">
      <div className="flex items-center border border-[#cccccc]/25 rounded-xl px-4 py-2">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="flex-0" />
          <span className="text-[#cccccc]">EliteBluPrint</span>
        </div>
        <div className="flex-1 center space-x-8">
          <a href="#price">Pricing</a>
          <a>Features </a>
          <a>Testimonial</a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
