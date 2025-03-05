import { Fragment } from "react";
import ProductDetails from "@/components/modules/Products/ProductDetails";
import { getProductById } from "@/services/Product";
import { TProduct } from "@/types";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: product }: { data: TProduct } = await getProductById(id);

  return (
    <Fragment>
      <ProductDetails product={product} />
    </Fragment>
  );
}
