"use client";
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
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AllProducts({ products }: { products: TProduct[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredProducts = products
    ?.filter((product) =>
      [product.title, product.category, product.location].some((field) =>
        field?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    ?.filter((product) =>
      selectedCategories.length === 0
        ? true
        : selectedCategories.includes(product.category)
    )
    ?.filter((product) =>
      selectedConditions.length === 0
        ? true
        : selectedConditions.includes(product.condition)
    )
    ?.filter((product) =>
      selectedDistricts.length === 0
        ? true
        : selectedDistricts.includes(product.location)
    )
    ?.filter((product) => (isAvailable ? product.status === "available" : true))
    ?.sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  //  pagination
  const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);
  const paginatedProducts = filteredProducts?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container className="mt-4">
      <div className="flex gap-4">
        <SidebarFilters
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedConditions={selectedConditions}
          setSelectedConditions={setSelectedConditions}
          selectedDistricts={selectedDistricts}
          setSelectedDistricts={setSelectedDistricts}
          setIsAvailable={setIsAvailable}
        />
        <div className="flex-1">
          {/* search & sort bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <Input
              type="text"
              placeholder="Search products by title, category & location..."
              className="w-full md:w-1/2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select onValueChange={setSortOrder}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Sort by Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low-to-high">Low to High</SelectItem>
                <SelectItem value="high-to-low">High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 flex-1">
            {paginatedProducts?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
          {/* pagination actions */}
          <div className="flex justify-end items-center gap-2 mt-4">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              size="sm"
              className="bg-blue-600 hover:bg-blue-500 cursor-pointer"
            >
              Previous
            </Button>
            <span className="text-sm font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              size="sm"
              className="bg-blue-600 hover:bg-blue-500 cursor-pointer"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
