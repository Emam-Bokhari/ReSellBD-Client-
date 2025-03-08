import { Fragment } from "react";
import Checkout from "@/components/modules/Checkout";
import { getProductById } from "@/services/Product";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const productId = (await searchParams)?.id || "";
  console.log(productId);
  const { data: product } = await getProductById(productId);
  console.log(product);
  return (
    <Fragment>
      <Checkout product={product} />
    </Fragment>
  );
}
