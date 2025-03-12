import DashboardOverview from "@/components/modules/Dashboard";
import { getTotalProductsAdded } from "@/services/Analytics";

export default async function DashboardHomePage() {
  const { data: totalProductsAdded } = await getTotalProductsAdded();
  console.log(totalProductsAdded);
  return <DashboardOverview totalProductsAdded={totalProductsAdded} />;
}
