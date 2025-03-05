"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react"; // Close icon
import { districts } from "@/constants/districts";

const categories = [
  "Property",
  "Home",
  "Vehicles",
  "Electronics",
  "Mobile",
  "Pets",
  "Sports",
  "Clothes",
];

const condition = ["New", "Like New", "Used", "Refurbished"];

export default function SidebarFilters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Small devices - Show only button */}
      <div className="hidden">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsOpen(true)}
        >
          Filters
        </Button>
      </div>

      {/* Sidebar for large devices */}
      <div className="hidden lg:block">
        <SidebarContent />
      </div>

      {/* Small devices - Sidebar overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          {/* Sidebar Panel */}
          <div className="w-72 bg-white shadow-lg p-4 overflow-y-auto max-h-screen relative animate-slide-in">
            {/* Close button */}
            <Button
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>

            <SidebarContent />
          </div>

          {/* Click Outside to Close */}
          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </>
  );
}

function SidebarContent() {
  return (
    <Card className="p-4 w-72 lg:shadow-lg rounded-none lg:rounded-lg   bg-transparent lg:bg-white max-h-screen overflow-y-auto">
      {/* Category filter */}
      <div>
        <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Category</h3>
        <ul className="text-gray-600 space-y-1">
          {categories.map((item, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Condition filter */}
      <div>
        <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Condition</h3>
        <ul className="text-gray-600 space-y-1">
          {condition.map((item, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Districts filter */}
      <div className="overflow-y-auto">
        <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Location</h3>
        <ul className="text-gray-600 dark:text-gray-300 space-y-1">
          {districts.map((item, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
          Availability
        </h3>
        <ul className="text-gray-600 space-y-1">
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Available for sale
          </li>
        </ul>
      </div>
    </Card>
  );
}
