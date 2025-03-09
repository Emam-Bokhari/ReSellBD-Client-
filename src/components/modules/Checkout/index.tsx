"use client";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getToken } from "@/redux/features/getToken";
import { IUser, TProduct } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

export default function Checkout({ product }: { product: TProduct }) {
  const [profile, setProfile] = useState<IUser | undefined>(undefined);
  const token = getToken();

  // fetch products from API
  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/users/me`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }
        const result = await response.json();
        setProfile(result?.data);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchProfile();
  }, [token]);

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
                  <p className="text-gray-800">{profile?.name}</p>
                </div>
                <div>
                  <Label>Email/Phone</Label>
                  <p className="text-gray-800">{profile?.identifier}</p>
                </div>
                {profile?.city && (
                  <div>
                    <Label>Location</Label>
                    <p className="text-gray-800">{profile?.city}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* product information */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                {product?.images && (
                  <Image
                    src={product?.images?.[0]}
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                )}
                <div>
                  <p className="text-lg font-semibold">{product?.title}</p>
                  <p className="text-sm text-gray-600">
                    Category: {product?.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    Location: {product?.location}
                  </p>
                  <p className="text-lg font-bold text-green-600">
                    Price: BDT {product?.price}
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
                  <strong>Price:</strong> BDT {product?.price}
                </p>
              </div>

              <hr />

              {/* seller information */}
              <p className="font-semibold">Seller Information</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Name:</strong> {product?.userID?.name}
                </p>
                <p>
                  <strong>Contact:</strong> {product?.userID?.identifier}
                </p>
              </div>

              <hr />

              {/* buyer information */}
              <p className="font-semibold">Buyer Information</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Name:</strong> {profile?.name}
                </p>
                <p>
                  <strong>Contact:</strong> {profile?.identifier}
                </p>
                {profile?.city && (
                  <p>
                    <strong>Location:</strong> {profile?.city}
                  </p>
                )}
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
