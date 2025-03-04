"use client";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Card, CardContent } from "../card";
import { Button } from "../button";

export default function ProductCard() {
  return (
    <Card className="w-full overflow-hidden shadow-lg rounded-lg p-0">
      <div className="w-full h-60 relative">
        {/* sold tag */}
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
        {/* title & price */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Product Title</h2>
          <span className="text-primary font-bold">BDT 1200</span>
        </div>

        {/* category & wishlist */}
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <span>Category Name</span>
          <button className="hover:text-red-500">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* action buttons */}
        <div className="mt-4 flex justify-between">
          {/* details button */}
          <button className="text-sm text-blue-500 hover:text-blue-700 font-semibold">
            Details
          </button>
          {/* buy now button */}
          <Button className="bg-[#F59E0B] text-white hover:bg-[#D97706]">
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
