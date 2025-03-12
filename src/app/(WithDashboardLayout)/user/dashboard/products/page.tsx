export const dynamic = "force-dynamic";

import ManageProducts from "@/components/modules/Dashboard/Products";
import { getProductsByUser } from "@/services/Product";

export default async function ProductsManagementPage() {
  const { data } = await getProductsByUser();
  const products = data ?? [];
  return (
    <div className="p-4">
      <ManageProducts products={products} />
    </div>
  );
}
