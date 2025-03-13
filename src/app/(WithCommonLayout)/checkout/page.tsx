import { Fragment } from "react";
import Checkout from "@/components/modules/Checkout";
import { getProductById } from "@/services/Product";
import { getMe } from "@/services/User";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const params = await searchParams;

  const productId = params?.id || "";

  const { data: product } = await getProductById(productId);
  const { data: profile } = await getMe();

  return (
    <Fragment>
      <Checkout product={product} profile={profile} />
    </Fragment>
  );
}
