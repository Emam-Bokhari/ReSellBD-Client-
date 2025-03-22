import SectionTitle from "@/components/shared/SectionTitle";
import RelatedProductCard from "./RelatedProductCard";

export default function RelatedProducts() {
  return (
    <div className="mt-96">
      <SectionTitle title="Related Products" />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <RelatedProductCard key={index} />
        ))}
      </div>
    </div>
  );
}
