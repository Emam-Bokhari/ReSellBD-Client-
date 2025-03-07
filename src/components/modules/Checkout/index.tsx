"use client";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Checkout() {
  return (
    <Container className="mt-4">
      <div className=" mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* left section */}
        <div className="lg:col-span-2 space-y-4">
          {/* booking hold alert */}
          <Card className="bg-yellow-100 p-4">
            <p className="text-yellow-800 font-medium">
              ⚠️ Your Order is on Hold
            </p>
            <p className="text-sm text-gray-700">
              We are processing your order. If any updates occur, we will notify
              you.
            </p>
          </Card>

          {/* book information */}
          <Card>
            <CardContent className="p-4 space-y-2">
              <p className="text-green-600 font-medium">✔ Order Confirmed!</p>
              <p className="text-gray-700 text-sm">
                Your order details have been sent to the seller.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Full Name</Label>
                  <p className="text-gray-800">Ahmed Bin Ali</p>
                </div>
                <div>
                  <Label>Email</Label>
                  <p className="text-gray-800">ahmedbinali@gmail.com</p>
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <p className="text-gray-800">+221402040785</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* product information */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                <Image
                  src="https://shorturl.at/YSWvd"
                  alt="Product Image"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <div>
                  <p className="text-lg font-semibold">Product Title</p>
                  <p className="text-sm text-gray-600">Category: Electronics</p>
                  <p className="text-lg font-bold text-green-600">
                    Price: USD 1,850.00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* cancellation policy */}
          <Card className="bg-gray-100 p-4">
            <p className="text-gray-800 font-medium">
              ⚠️ Return & Refund Policy
            </p>
            <p className="text-sm text-gray-600">
              We offer returns and refunds based on seller policies. Ensure to
              check item descriptions before purchase.
            </p>
            <a href="#" className="text-blue-600 text-sm">
              See more details
            </a>
          </Card>
        </div>

        {/* right section - summary & pay button */}
        <div className="lg:col-span-1 space-y-4">
          {/* order summary */}
          {/* summary section */}
          <Card className="h-fit">
            <CardContent className="p-4 space-y-4">
              <p className="font-semibold text-lg">Order Summary</p>

              {/* total items & price */}
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Total Items:</strong> 1 Item
                </p>
                <p>
                  <strong>Price:</strong> USD 1,850.00
                </p>
              </div>

              <hr />

              {/* seller information */}
              <p className="font-semibold">Seller Information</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Name:</strong> John Doe
                </p>
                <p>
                  <strong>Email:</strong> john.doe@example.com
                </p>
              </div>

              <hr />

              {/* buyer information */}
              <p className="font-semibold">Buyer Information</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Name:</strong> Jane Smith
                </p>
                <p>
                  <strong>Email:</strong> jane.smith@example.com
                </p>
                <p>
                  <strong>Location:</strong> Dhaka, Bangladesh
                </p>
              </div>
            </CardContent>
          </Card>

          {/* agreement checkbox & pay button */}
          <Card>
            <CardContent>
              <div className="space-y-4">
                <Label className="flex items-center space-x-2 text-sm">
                  <Checkbox />
                  <span>
                    I agree to ResellBD Terms & Conditions and Privacy Policy
                  </span>
                </Label>
                <Button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white cursor-pointer">
                  Confirm & Pay
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
