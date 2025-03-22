import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductOffer() {
  return (
    <div
      className="relative flex items-center justify-between p-10 h-[350px] lg:h-[450px] xl:h-[550px] bg-cover bg-center mt-4"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dvpqm6zct/image/upload/v1742627421/product-offer_hyalvd.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 blur-sm"></div>

      <Container className="z-10">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F59E0B]">
          Exclusive Offers of 2025
        </h1>
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
            ResellBD Product Deals
          </h2>
          <p className="text-lg  text-white">
            Get up to 30% OFF on Exclusive Used Products at ResellBD!
            <br /> Buy and sell used products with ResellBD.
          </p>
          <Link href="/products" className="block">
            <Button className=" bg-[#F59E0B] hover:bg-[#D97706] text-white cursor-pointer">
              Shop Now
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
