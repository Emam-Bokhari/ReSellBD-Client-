import Container from "@/components/shared/Container";

export default function Wishlist() {
  return (
    <Container className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* <ProductCard  /> */}
        <div>Wishlist product</div>
      </div>
    </Container>
  );
}
