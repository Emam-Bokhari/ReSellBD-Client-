import Container from "@/components/shared/Container";
import ProductCardVariant from "@/components/ui/core/ProductCardVariant";
import { getProductsByCategory } from "@/services/Product";
import { TProduct } from "@/types";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const { data: products }: { data: TProduct[] } = await getProductsByCategory(
    category
  );

  return (
    <Container className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {products?.map((product) => (
          <ProductCardVariant key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
}
