import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import aboutUsImage from "@/assets/about-us-banner.jpg";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <Container className="mt-12">
      <div className="space-y-4">
        <SectionTitle title="About ResellBD" />
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 mt-4">
          <Card className="bg-gradient-to-r from-[#F59E0B] to-[#F8C06D] p-4 h-auto">
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-800">
                Sell Your Used Items with Ease!
              </h3>
              <p className="mt-2 text-gray-900">
                Turn your old or unused products into cash quickly. List your
                items now and connect with buyers instantly!
              </p>
              <Link
                href="/user/dashboard/products/add-product"
                className="block"
              >
                <Button className="mt-4 cursor-pointer" variant="outline">
                  Sell Now
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-blue-100 p-4 h-auto">
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-800">
                Find Great Deals on Pre-Owned Items
              </h3>
              <p className="mt-2 text-gray-900">
                Discover high-quality second-hand products at unbeatable prices.
                Save money while shopping for your favorite items!
              </p>
              <Link href="/products" className="block">
                <Button className="mt-1 cursor-pointer p-0 " variant="link">
                  Browse Products
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="h-[230px] ">
            <Image
              src={aboutUsImage}
              alt="Featured Project"
              sizes="100vw"
              width={1200}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* <section>
          <h2 className="text-lg font-semibold">KEY FEATURES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Card className="p-6">
              <CardContent>
                <h3 className="text-lg font-semibold">Buy & Sell with Ease</h3>
                <p className="mt-2 text-gray-600">
                  Effortlessly sell your used products or find great deals on
                  second-hand items.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h3 className="text-lg font-semibold">Verified Listings</h3>
                <p className="mt-2 text-gray-600">
                  Browse verified product listings to ensure a safe and reliable
                  shopping experience.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h3 className="text-lg font-semibold">Secure Transactions</h3>
                <p className="mt-2 text-gray-600">
                  Enjoy a secure buying and selling process with trusted users
                  and safe payment options.
                </p>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-6  ">
            <CardContent>
              <h3 className="text-3xl font-bold text-green-500">10k+</h3>
              <p className="text-gray-900">Successful Resellers</p>
            </CardContent>
          </Card>

          <Card className="p-6  ">
            <CardContent>
              <h3 className="text-3xl font-bold text-blue-500">99%</h3>
              <p className="text-gray-900">Customer Satisfaction</p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </Container>
  );
}
