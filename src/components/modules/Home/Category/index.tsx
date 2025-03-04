import Container from "@/components/shared/Container";
import property from "@/assets/property.png";
import home from "@/assets/home.png";
import vehicles from "@/assets/car.png";
import electronics from "@/assets/electronics.png";
import mobile from "@/assets/mobile.png";
import pets from "@/assets/pets.png";
import sports from "@/assets/sports.png";
import clothes from "@/assets/clothes.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import SectionTitle from "@/components/shared/SectionTitle";

// category data
const categories = [
  { name: "Property", image: property },
  { name: "Home", image: home },
  { name: "Vehicles", image: vehicles },
  { name: "Electronics", image: electronics },
  { name: "Mobile", image: mobile },
  { name: "Pets", image: pets },
  { name: "Sports", image: sports },
  { name: "Clothes", image: clothes },
];

export default function CategorySection() {
  return (
    <Container>
      <div className="mt-4">
        <SectionTitle title="Shop by Category" />

        {/* categories card */}
        <div className="mt-4">
          {/* card */}
          {/* Categories Grid */}
          <div className="mt-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className=" rounded-lg p-4 flex items-center gap-3"
              >
                <div className="w-[35px] h-[35px] relative">
                  <Image
                    src={category.image}
                    fill
                    alt={category.name}
                    className="object-contain"
                  />
                </div>
                <p className="text-xl font-medium text-[#F59E0B]">
                  {category.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
