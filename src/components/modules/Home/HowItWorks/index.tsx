import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, CheckCircle, ShieldCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: <ShoppingBag className="w-12 h-12 text-yellow-500" />,
    title: "Find Your Product",
    description:
      "Browse through pre-owned items and select the one that fits your needs.",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-green-500" />,
    title: "Connect & Confirm",
    description:
      "Contact the seller, discuss details, and finalize your purchase.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
    title: "Secure Payment",
    description: "Make safe transactions through our trusted payment options.",
  },
  {
    icon: <Truck className="w-12 h-12 text-red-500" />,
    title: "Get It Delivered",
    description: "Receive your product through a reliable delivery service.",
  },
];

export default function HowItWorksSection() {
  return (
    <Container className="mt-4">
      <SectionTitle title="How It Works" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="shadow-lg rounded-lg hover:shadow-xl transition-all"
          >
            <CardContent className="flex flex-col items-center space-y-4">
              {step.icon}
              <h3 className="text-xl font-semibold text-[#1F2937]">
                {step.title}
              </h3>
              <p className="text-gray-800 text-md text-center">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
