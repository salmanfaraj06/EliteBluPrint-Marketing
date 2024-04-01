import twitter from "../../public/twitter.svg";
import person2 from "../../public/person2.png";

const data = [
  {
    pic: person2,
    name: "Logan Kilpatrick",
    role: "OpenAI",
    para1:
      "I started using Cursor this morning, the AI-first Code Editor, and I am blown away. 🤯",
    para2:
      "If you want to see what the future of software engineering will look like, try Cursor, created by the @anysphere team.",
  },
  {
    pic: person2,
    name: "Logan Kilpatrick",
    role: "OpenAI",
    para1:
      "I started using Cursor this morning, the AI-first Code Editor, and I am blown away. 🤯",
    para2:
      "If you want to see what the future of software engineering will look like, try Cursor, created by the @anysphere team.",
  },
  {
    pic: person2,
    name: "Logan Kilpatrick",
    role: "OpenAI",
    para1:
      "I started using Cursor this morning, the AI-first Code Editor, and I am blown away. 🤯",
    para2:
      "If you want to see what the future of software engineering will look like, try Cursor, created by the @anysphere team.",
  },
];

function Testimonials() {
  return (
    <div
      id="testi"
      className="center flex-col space-y-20 w-[80vw] mx-auto min-h-screen"
    >
      <h1 className="text-7xl font-semibold text-center font-space-grotesk mb-2">
        Testimonials
      </h1>
      <div className="center space-x-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#101521] to-transparent rounded-3xl p-4 px-8 space-y-4"
          >
            <div className="flex items-center justify-between space-x-4">
              <img src={item.pic} alt={item.name} className="flex-0" />
              <div className="flex-1">
                <h3>{item.name}</h3>
                <p className="font-thin text-gray-400">{item.role}</p>
              </div>

              <img src={twitter} alt="twitter logo" className="flex-0" />
            </div>
            <div className="space-y-8">
              <p>{item.para1}</p>
              <p>{item.para2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
