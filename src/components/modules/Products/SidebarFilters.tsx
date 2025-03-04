import { Card } from "@/components/ui/card";
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
  return (
    <Card className="w-72 p-4 shadow-lg rounded-lg bg-white max-h-screen overflow-y-auto ">
      {/* category filter */}
      <div>
        <h3 className="text-lg font-semibold text-[#1F2937]  mb-2">Category</h3>
        <ul className="text-gray-600 space-y-1">
          {categories.map((item, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* condition filter */}
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

      {/* districts filter */}
      <div className="overflow-y-auto">
        <h3 className="text-lg font-semibold text-[#1F2937]  mb-2">Location</h3>
        <ul className="text-gray-600 dark:text-gray-300 space-y-1">
          {districts.map((item, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* availability */}
      <div>
        <h3 className="text-lg font-semibold text-[#1F2937]  mb-2">
          Availability
        </h3>
        <ul className="text-gray-600  space-y-1">
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Available for sale
          </li>
        </ul>
      </div>
    </Card>
  );
}
