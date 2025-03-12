export const dynamic = "force-dynamic";

import DashboardOverview from "@/components/modules/Dashboard";
import {
  getTotalProductsAdded,
  getTotalPurchases,
  getTotalSales,
} from "@/services/Analytics";

export default async function DashboardHomePage() {
  const { data: totalProductsAdded } = await getTotalProductsAdded();
  const { data: totalPurchases } = await getTotalPurchases();
  const { data: totalSales } = await getTotalSales();
  return (
    <DashboardOverview
      totalProductsAdded={totalProductsAdded}
      totalPurchases={totalPurchases}
      totalSales={totalSales}
    />
  );
}
