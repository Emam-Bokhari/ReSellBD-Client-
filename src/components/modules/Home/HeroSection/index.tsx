import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className=" mt-4 ">
      <section className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center  text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dvpqm6zct/image/upload/v1741017225/Banner-Image_ielnfx.jpg')] bg-cover bg-center"></div>

        {/* Black Overlay  */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text Content  */}
        <div className="relative z-10 space-y-2 px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#F59E0B] text-center">
            ReSellBD
          </h1>
          {/* <p className="text-lg">Smart Deals, Smarter Choices</p> */}
          <p className=" text-2xl lg:text-3xl text-center ">
            Buy and sell used items easily
          </p>

          <div className=" lg:w-[700px] ">
            <p className=" text-base lg:text-lg  text-white opacity-80 text-center">
              Sell your pre-loved products, or find great deals on second-hand
              items. A trusted platform for reselling your used products and
              purchasing quality second-hand items at affordable prices.
            </p>
          </div>

          {/* ShadCN UI Button */}
          <div className="mt-4 text-center">
            <Link href="/products" className="block">
              <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] cursor-pointer">
                Explore Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
