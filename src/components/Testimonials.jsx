import twitter from "../../public/twitter.svg";
import person2 from "../../public/person2.png";

const data = [
  {
    
    name: "Zahee Basheer",
    role: "Senior Quantity Surveyor, HIT Management Consultants, Qatar",
    para1: "Elite Blueprint is a game-changer in the journey to designing a dream home. I'm amazed by how intuitive and user-friendly the platform is. With the power of AI, it's able to generate quality house plans in no time. Keep working on this and make changes accordingly based on latest trends.",

  },
  {
   
    name: "Salman Faris",
    role: "Quantity Surveyor, Almana Group of companies, Saudi Arabia",
    para1: "Elitebluprint emerges as a game-changer in the architectural platform landscape, offering users an easy and highly productive experience. With its innovative features and user-friendly interface, this application sets a new standard for architectural design platforms.",

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
              <div className="flex-1">
                <h3>{item.name}</h3>
                <p className="font-thin text-gray-400">{item.role}</p>
              </div>
            </div>
            <div className="space-y-8">
              <p>{item.para1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
