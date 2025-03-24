"use client";
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
import Link from "next/link";

// category data
const categories = [
  { name: "property", image: property },
  { name: "home", image: home },
  { name: "vehicles", image: vehicles },
  { name: "electronics", image: electronics },
  { name: "mobile", image: mobile },
  { name: "pets", image: pets },
  { name: "sports", image: sports },
  { name: "clothes", image: clothes },
];

export default function CategorySection() {
  return (
    <Container>
      <div className="mt-12">
        <SectionTitle title="Shop by Category" />

        {/* categories card */}
        <div className="mt-4">
          {/* card */}
          {/* Categories Grid */}
          <div className="mt-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Link
                href={`/category/${category.name}`}
                key={index}
                className="block"
              >
                <Card className=" rounded-lg p-4 flex items-center gap-3 cursor-pointer">
                  <div className="w-[35px] h-[35px] relative">
                    <Image
                      src={category.image}
                      fill
                      alt={category.name}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xl font-medium text-[#F59E0B] capitalize">
                    {category.name}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
