import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function BlogCard() {
  return (
    <Card className="w-full overflow-hidden  rounded-lg p-0">
      <div className="w-full h-60 relative">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSOrIHIncvVwcn86Yj1lG2no3rymRPhF1AQ&s"
          alt="product image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg "
        />
      </div>
      <CardContent className="pb-4 space-y-2 mt-0">
        <h2 className="text-lg  font-semibold text-center capitalize">
          Valentine flower shop
        </h2>
        <div className="py-4">
          <Separator />
        </div>
        <p className="text-center text-gray-600 text-sm">
          25 September 2025\Moshfiqur Rahman
        </p>
        <p className="text-gray-800 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          perferendis perspiciatis eum ad esse beatae nisi error dolore, sed
          accusamus.
        </p>
        <div className="text-center">
          <Button className="bg-[#F59E0B] text-white hover:bg-[#D97706] cursor-pointer">
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
