import Container from "@/components/shared/Container";

import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";

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
          <ProductCard key={index} />
        ))}
      </div>
    </Container>
  );
}
