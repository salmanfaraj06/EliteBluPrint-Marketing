import { HoverEffect } from "../ui/card-hover-effect";

export const pricing = [
  {
    title: "Standard Tier ($50/month)",
    description:
      "Ideal for Freelancers & Architects: This plan offers moderate monthly plan generation limits, perfect for individual users or small teams. Collaborate effectively with clients through features like client portals, shared project folders, and dedicated customer support.",
    
  },
  {
    title: "Premium Tier ($80/month)",
    description:
      "Caters to High-Volume Architects: Unleash your design potential with the highest plan generation limits. Optimize your workflow with premium collaboration tools, manage your clients effortlessly, and enjoy priority support from our expert team.",
    
  },
  {
    title: "On-Demand Payment",
    description:
      "Flexible Access for Individual Users: Maintain accessibility for casual users with our pay-as-you-go option. The On-Demand Package offers 6 plan generations for a one-time fee of $20.",
    
  },
];


function CardHoverEffectDemo() {
  return (
    <div
      id="price"
      className="max-w-5xl mx-auto px-8 min-h-[110vh] center flex-col"
    >
      <h1 className="text-7xl font-semibold text-center font-space-grotesk mb-2">
        Pricing
      </h1>
      <HoverEffect items={pricing} />
    </div>
  );
}

export default CardHoverEffectDemo;
