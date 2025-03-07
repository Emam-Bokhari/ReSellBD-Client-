import { Fragment } from "react";
import Checkout from "@/components/modules/Checkout";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const productId = (await searchParams)?.id || "";
  console.log(productId);
  return (
    <Fragment>
      <Checkout />
    </Fragment>
  );
}
