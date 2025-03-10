"use client";
import Container from "@/components/shared/Container";
import ProductCard from "@/components/ui/core/ProductCard";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Wishlist() {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  return (
    <Container className="mt-4">
      {/* empty wishlist message */}
      {wishlistItems.length === 0 && (
        <p className="text-center w-full  ">Your wishlist is empty.</p>
      )}
      {/* product cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {wishlistItems.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
}
