import Container from "@/components/shared/Container";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import { Separator } from "@/components/ui/separator";

export default function FaqPage() {
  return (
    <Container className="mt-4">
      <div className="space-y-8">
        <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
          <h1 className="text-2xl font-bold">Help/FAQ</h1>
          <div>
            <Image src={logo} alt="logo" width={50} height={50} />
          </div>
        </div>

        {/* tabs */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            <a
              href="#what-you-should-know"
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              What you should know
            </a>
            <a
              href="#product-identification"
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Product Identification
            </a>
            <a
              href="#how-it-works"
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              How it works
            </a>
            <a href="#need-help" className="px-4 py-2 bg-gray-200 rounded-lg">
              Need help?
            </a>
            <a href="#disclaimer" className="px-4 py-2 bg-gray-200 rounded-lg">
              Disclaimer
            </a>
          </div>
        </div>

        {/* what you should know */}
        <section id="what-you-should-know">
          <h2 className="text-xl font-bold mb-2">What you should know</h2>
          <p className="mb-4">
            ResellBD offers a marketplace for resellers to buy and sell products
            with ease. We strive to provide a wide range of products at
            competitive prices to help you grow your business. Make sure to
            check product listings and their details before making any purchase.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <Card className="p-4 bg-blue-100">
              <h3 className="font-bold">What are verified products?</h3>
              <p>
                Verified products are those that have been authenticated by our
                team for quality and reliability. You can trust that they meet
                our standards for sale.
              </p>
            </Card>
            <Card className="p-4 bg-red-100">
              <h3 className="font-bold">What does best price mean?</h3>
              <p>
                Best price refers to products that offer the highest value for
                money, with discounts or deals that provide the most competitive
                pricing in the market.
              </p>
            </Card>
          </div>
        </section>

        {/*what is a product code? */}
        <section id="product-identification">
          <h2 className="text-xl font-bold mb-2">What is a Product Code?</h2>
          <p>
            A Product Code is a unique identifier assigned to each item listed
            on ResellBD. It helps track the product’s origin, verify its
            authenticity, and ensure that it meets the quality standards of our
            marketplace. You can use this code to check product details and make
            informed purchasing decisions.
          </p>
        </section>

        {/* if you can't find a product */}
        <section id="if-you-cant-find-a-product">
          <h2 className="text-xl font-bold mb-2">
            If you can not find a product
          </h2>
          <p>
            Try searching for the product by its SKU, Name, or Category. If you
            still can not find it, feel free to reach out to our customer
            support team for assistance.
          </p>
        </section>

        <div>
          <Separator />
        </div>

        {/* how it works */}
        <section id="how-it-works">
          <h2 className="text-xl font-bold mb-2">How it works</h2>
          <p>
            Simply browse through our marketplace, find the products you are
            interested in, and contact sellers directly for pricing and shipping
            details. We also offer secure payment options to ensure a safe
            transaction experience for all users.
          </p>
        </section>

        {/* need help? */}
        <section id="need-help">
          <h2 className="text-xl font-bold mb-2">Need help?</h2>
          <p>
            If you need assistance, please contact our support team via email or
            phone.
          </p>
        </section>

        {/* disclaimer */}
        <section id="disclaimer">
          <h2 className="text-xl font-bold mb-2">Disclaimer</h2>
          <p>
            ResellBD is a marketplace for resellers and does not guarantee the
            quality of products sold by third-party vendors. Always verify the
            product details and vendor information before making a purchase.
          </p>
        </section>
      </div>
    </Container>
  );
}
