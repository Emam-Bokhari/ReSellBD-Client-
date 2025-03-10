import AllProducts from "@/components/modules/Products";
import { getAllProducts } from "@/services/Product";
import { TProduct } from "@/types";
import { Fragment } from "react";

export default async function ProductsPage() {
  const { data: products }: { data: TProduct[] } = await getAllProducts();
  return (
    <Fragment>
      <AllProducts products={products} />
    </Fragment>
  );
}
