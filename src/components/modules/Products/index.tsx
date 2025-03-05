import ProductCard from "@/components/ui/core/ProductCard";
import SidebarFilters from "./SidebarFilters";
import Container from "@/components/shared/Container";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TProduct } from "@/types";

export default function AllProducts({ products }: { products: TProduct[] }) {
  return (
    <Container className="mt-4">
      <div className="flex gap-4">
        <SidebarFilters />
        <div className="flex-1">
          {/* Search & Sort Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full md:w-1/2"
            />
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Sort by Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low-to-high">Low to High</SelectItem>
                <SelectItem value="high-to-low">High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 border-2 border-red-500 flex-1">
            {products.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
