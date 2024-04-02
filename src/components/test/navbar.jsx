import logo from "../../../public/logo.png";

function navbar() {
  return (
    <div className="p-2">
      <div className="flex items-center border border-[#cccccc]/25 rounded-xl px-6 py-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="flex-0 h-8" />
          <span className="text-[#cccccc] font-bold italic font-inter">EliteBluPrint</span>
        </div>
        <div className="flex-1 center space-x-14 -ml-20">
          <a href="#features" className="cursor-pointer">
            Features
          </a>
          <a href="#price" className="cursor-pointer">
            Pricing
          </a>
          <a href="#testi" className="cursor-pointer">
            Testimonial
          </a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
