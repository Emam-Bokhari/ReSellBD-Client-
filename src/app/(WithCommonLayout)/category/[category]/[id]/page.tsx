import { Fragment } from "react";
import { getProductById } from "@/services/Product";
import { TProduct } from "@/types";
import CategoryWiseProductDetails from "@/components/modules/Category";

export default async function CategoryWiseProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: product }: { data: TProduct } = await getProductById(id);

  return (
    <Fragment>
      <CategoryWiseProductDetails product={product} />
    </Fragment>
  );
}
