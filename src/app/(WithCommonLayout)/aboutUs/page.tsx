"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import pattern from "@/assets/pattern.jpg";
import Container from "@/components/shared/Container";
import visionImage from "@/assets/vision.jpg";

export default function AboutUsPage() {
  return (
    <Container className="mt-4">
      <div className="w-full">
        {/* hero section */}
        <div
          className="relative w-full h-72 rounded-lg  text-white text-3xl font-bold flex items-center justify-center"
          style={{
            backgroundImage: `url(${pattern.src})`,
          }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

          {/* content */}
          <p className="relative z-10 text-center">
            <span className="text-[#F59E0B]">About Us </span>
            <br />
            <span className="text-lg font-light italic">
              ResellBD - Your Trusted Marketplace for Pre-Owned Tech & Gadgets.
            </span>
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* features section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Certified Quality",
              "Secure Transactions",
              "Fast Shipping",
              "Complete Transparency",
            ].map((feature, index) => (
              <Card key={index} className="text-center py-6">
                <CardContent>
                  <p className="font-semibold text-lg">{feature}</p>
                  <p className="text-gray-500 text-sm">
                    Ensuring the best experience for our users.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* vision section */}
          <div className="flex flex-col xl:flex-row gap-4 items-center ">
            <Image
              src={visionImage}
              alt="Our Vision"
              width={600}
              height={300}
              className="rounded-lg w-full xl:w-auto"
            />
            <div className="xl:ml-10 mt-6 md:mt-0">
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-gray-600 mt-3">
                At ResellBD, we envision a world where technology is more
                accessible, affordable, and sustainable. Our goal is to
                revolutionize the resale market in Bangladesh by providing a
                reliable platform for buying and selling pre-owned gadgets. We
                believe in a future where every device gets a second life,
                reducing electronic waste and making high-quality tech available
                to everyone at a fair price.
                <br />
                <br />
                Our platform bridges the gap between sellers looking to earn
                from their used devices and buyers seeking quality tech at
                affordable rates. We ensure secure transactions, verified
                product listings, and seamless logistics so that customers can
                shop with confidence.
                <br />
                <br />
                By embracing innovation and fostering trust within our
                community, ResellBD aims to set new standards in the resale
                industry. Our commitment to transparency, security, and customer
                satisfaction drives us to improve every aspect of our platform,
                making it the go-to destination for all your tech resale needs.
              </p>
              <Button className="mt-4 bg-[#F59E0B] hover:bg-[#D97706] cursor-pointer">
                Read More
              </Button>
            </div>
          </div>

          {/* testimonials section */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-6">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "ResellBD made it so easy to sell my old phone. The process was smooth, and I got a great price!",
                "I was hesitant to buy a used laptop, but ResellBD's verification process gave me confidence. Highly recommend!",
                "Fantastic experience! Secure payments and fast shipping. Will definitely use ResellBD again!",
              ].map((testimonial, id) => (
                <Card key={id}>
                  <CardContent className="p-6">
                    <p className="text-gray-600 italic">{testimonial}</p>
                    <p className="text-sm font-semibold mt-4">
                      Verified Customer
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* faq Section */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <Accordion type="single">
              {[
                {
                  question: "How does ResellBD verify listed products?",
                  answer:
                    "Every product listed on ResellBD goes through a verification process. Sellers must provide valid product images and details. Additionally, buyers can review seller ratings and feedback before making a purchase.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept payments via major mobile banking services like bKash, Nagad, Rocket, as well as debit/credit cards for secure transactions.",
                },
                {
                  question: "Is there a return policy?",
                  answer:
                    "Yes, we offer a return policy under specific conditions. If the received product does not match the listing description, buyers can request a return within 3 days of delivery.",
                },
                {
                  question: "How can I sell my device on ResellBD?",
                  answer:
                    "Selling is easy! Create an account, list your product with images and details, set a price, and wait for buyers to contact you. Once sold, you can arrange for secure delivery through our platform.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={String(index)}>
                  <AccordionTrigger className="cursor-pointer text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 text-base">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Container>
  );
}
