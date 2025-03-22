import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { GiShoppingBag } from "react-icons/gi";
import { IoArrowRedo } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

export default function RelatedProductCard() {
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
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold capitalize">
            Dell inspiron 155593
          </h2>
          <span className="text-primary font-bold">BDT 1200</span>
        </div>
        {/* actions */}
        <div className="flex justify-between">
          <div>
            <button className=" cursor-pointer">
              <FaHeart className="w-6 h-6 text-red-600 " />
            </button>
            <button className=" cursor-pointer ml-4">
              <IoArrowRedo className="w-6 h-6 text-blue-600 " />
            </button>
          </div>

          <div>
            <button className=" cursor-pointer ml-4">
              <GiShoppingBag className="w-6 h-6 text-[#F59E0B]" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
