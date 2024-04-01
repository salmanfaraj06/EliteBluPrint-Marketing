import vs from "../../public/vs.png";
import lock from "../../public/lock.png";
import circle from "../../public/circle.png";
import innercircle from "../../public/innercircle.png";

const data = [
  {
    pic: vs,
    topic: "One-click migration",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat",
  },
  {
    pic: lock,
    topic: "Keep your code private",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ",
  },
];

function UserFriendly() {
  return (
    <div className="min-h-screen center space-x-12">
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
              <p className="text-md text-gray-500 font-semibold">{item.para}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserFriendly;
