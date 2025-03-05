"use client";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(
    "https://shorturl.at/EPSnR" // default image
  );

  const thumbnails = [
    "https://shorturl.at/EPSnR",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSOrIHIncvVwcn86Yj1lG2no3rymRPhF1AQ&s",
    "https://shorturl.at/EPSnR",
  ];

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
            {thumbnails.map((img, index) => (
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
            <h2 className="text-3xl font-bold text-[#1F2937]">Product Title</h2>
            <p className="text-[#1F2937]">Product Category</p>
            <p className="text-2xl text-[#1F2937] font-semibold">£995</p>
            <h3 className="text-2xl font-bold text-[#1F2937]">Description</h3>
            <p className="text-[#989BA4]">
              Taking cues from mid-century designs, this handcrafted armchair
              has a solid birch frame, deep seating, and feather-wrapped
              cushions. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Expedita corrupti pariatur optio, ipsum, asperiores
              doloremque sunt ut ea praesentium quibusdam deserunt dignissimos
              voluptatibus, modi consequatur beatae neque enim a? Asperiores
              suscipit ducimus voluptates deleniti nisi, doloremque, cum
              temporibus sapiente cumque consequatur distinctio sequi eligendi
              labore laudantium dolor excepturi possimus est.
            </p>
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
                  <p>New</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-medium">Brand:</p>
                  <p>Brand Name</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-medium">Location:</p>
                  <p>City, Country</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-medium">Negotiable:</p>
                  <p>Yes</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-medium">Warranty:</p>
                  <p>2 Years</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-medium">Contact Number:</p>
                  <p>+1234567890</p>
                </div>
              </div>
            </div>
          </div>

          {/* button */}
          <div className="flex gap-4">
            <Button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] font-bold text-base cursor-pointer">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
