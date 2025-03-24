import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeatureAds() {
  return (
    <div className="bg-[#f3981b] mt-12">
      <Container className=" relative w-full h-auto">
        <div className="w-full  flex flex-col md:flex-row items-center justify-between py-6 rounded-lg  gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500 flex items-center justify-center rounded-lg">
              <span className="text-white text-2xl md:text-3xl">🛍️</span>
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-black">
              Post an ad in one click, reach buyers instantly!
            </h2>
          </div>
          <Link href="/user/dashboard/products/add-product">
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-full md:w-auto text-sm md:text-base cursor-pointer"
            >
              Post ads for free
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
