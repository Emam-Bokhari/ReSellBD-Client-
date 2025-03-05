import Container from "@/components/shared/Container";
import ProductCard from "@/components/ui/core/ProductCard";

export default function Wishlist() {
  return (
    <Container className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </Container>
  );
}
