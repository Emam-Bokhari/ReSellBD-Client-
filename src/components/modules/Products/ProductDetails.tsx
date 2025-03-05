"use client";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetails({ product }: { product: TProduct }) {
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <Container className="mt-4">
      <div className="mx-auto grid lg:grid-cols-2 gap-8">
        {/* left: product images */}
        <div>
          <div className="relative w-full" style={{ height: "500px" }}>
            <Image
              src={selectedImage}
              alt="Product Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex gap-2 mt-4">
            {product?.images?.map((img, index) => (
              <div
                key={index}
                className="relative w-[100px] h-[100px] cursor-pointer"
              >
                <Image
                  src={img}
                  alt="Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg border hover:border-black"
                  onClick={() => handleThumbnailClick(img)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* right: product info */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-[#1F2937] capitalize">
              {product?.title}
            </h2>
            <p className="text-[#1F2937] capitalize">{product?.category}</p>
            <p className="text-2xl text-[#1F2937] font-semibold">
              BDT {product?.price}
            </p>
            <p className="text-2xl text-red-500 font-semibold uppercase">
              {product?.status}
            </p>
            <h3 className="text-2xl font-bold text-[#1F2937]">Description</h3>
            <p className="text-[#989BA4]">{product?.description}</p>
          </div>

          {/* additional information */}
          <div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#1F2937]">
                Additional Information
              </h3>
              <div className="space-y-2 text-[#1F2937]">
                <div className="flex gap-2">
                  <p className="font-medium">Condition:</p>
                  <p>{product?.condition}</p>
                </div>
                {product?.brand && (
                  <div className="flex gap-2">
                    <p className="font-medium">Brand:</p>
                    <p className="capitalize">{product?.brand}</p>
                  </div>
                )}
                <div className="flex gap-2">
                  <p className="font-medium">Location:</p>
                  <p className="capitalize">{product?.location}</p>
                </div>
                {product?.negotiable && (
                  <div className="flex gap-2">
                    <p className="font-medium">Negotiable:</p>
                    <p>{product?.negotiable}</p>
                  </div>
                )}
                {product?.warranty && (
                  <div className="flex gap-2">
                    <p className="font-medium">Warranty:</p>
                    <p>{product?.warranty}</p>
                  </div>
                )}
                {product?.contactNumber && (
                  <div className="flex gap-2">
                    <p className="font-medium">Contact Number:</p>
                    <p>{product?.contactNumber}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* button */}
          <div className="flex gap-4">
            <Button
              disabled={product?.status === "sold"}
              className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] font-bold text-base cursor-pointer"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
