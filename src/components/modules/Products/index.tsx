import ProductCard from "@/components/ui/core/ProductCard";
import SidebarFilters from "./SidebarFilters";
import Container from "@/components/shared/Container";

export default function AllProducts() {
  return (
    <Container className="mt-4">
      <div className="flex gap-4">
        <SidebarFilters />
        <div className="grid grid-cols-3 gap-4 border-2 border-red-500 flex-1">
          {Array.from({ length: 16 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}
