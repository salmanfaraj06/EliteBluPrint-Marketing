import vs from "../../public/vs.png";
import lock from "../../public/lock.png";
import circle from "../../public/circle.png";
import innercircle from "../../public/innercircle.png";

const data = [
  {
    pic: vs,
    topic: "Architects - Streamline Your Workflow",
    para: "Simplify floor plan creation, collaborate seamlessly with clients, and generate variations in seconds. Elevate your design process with EliteBlueprint.",
  },
  {
    pic: lock,
    topic: "Homeowners - Design Your Dream Home",
    para: "Describe your dream layout in plain English and see it come to life on screen. Generate professional-looking floor plans in seconds with EliteBlueprint!",
  },
];

function UserFriendly() {
  return (
    <div className="min-h-screen center flex-col">
      <h1 className="text-7xl font-semibold font-space-grotesk mb-2">
        User Friendly and Simple
      </h1>
      <p className="text-2xl text-gray-400 mb-20">
        One click to generate your desired house plans.
      </p>
      <div className="center space-x-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden flex flex-col items-start h-[60vh] w-[35vw] border border-[#243063] p-8 bg-[#101624] rounded-xl"
          >
            <img
              src={circle}
              alt=""
              className="absolute top-[0vh] right-[0vw] opacity-20"
            />
            <img
              src={innercircle}
              alt=""
              className="absolute top-[-.5vh] right-[-.5vw] opacity-50"
            />
            <div className="flex items-start space-x-4 z-20">
              <img src={item.pic} alt="logo" />
              <div className="space-y-4">
                <p className="text-2xl">{item.topic}</p>
                <p className="text-md text-gray-500 font-semibold">
                  {item.para}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserFriendly;
