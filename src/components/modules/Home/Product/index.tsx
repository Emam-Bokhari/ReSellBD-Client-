import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function ProductSection() {
  return (
    <Container className="mt-4">
      <div className="flex justify-between">
        <SectionTitle title="Products" />
        <div>
          <Button variant="link" className="text-[#F59E0B] cursor-pointer">
            Sell All Products
          </Button>
        </div>
      </div>
      {/* cards */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <Card
            key={index}
            className="w-full max-w-sm overflow-hidden shadow-lg rounded-lg p-0"
          >
            <div className="w-full h-60 relative">
              {/* Sold Tag */}
              <div className="absolute top-3 left-3 bg-red-500 text-white py-1 px-3 text-xs font-bold rounded-br-lg z-10">
                SOLD
              </div>

              <Image
                src="https://img.freepik.com/free-vector/beautiful-cosmetic-ad_23-2148471068.jpg"
                alt="product image"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg "
              />
            </div>
            <CardContent className="p-4 space-y-2 mt-0">
              {/* Title & Price */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Product Title</h2>
                <span className="text-primary font-bold">BDT 1200</span>
              </div>

              {/* Category & Wishlist */}
              <div className="flex justify-between items-center text-gray-600 text-sm">
                <span>Category Name</span>
                <button className="hover:text-red-500">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-between">
                {/* Details Button */}
                <button className="text-sm text-blue-500 hover:text-blue-700 font-semibold">
                  Details
                </button>
                {/* Buy Now Button */}
                <Button className="bg-[#F59E0B] text-white hover:bg-[#D97706]">
                  Buy Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
