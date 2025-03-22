import AboutUsSection from "@/components/modules/Home/AboutUs";
import FeatureAds from "@/components/modules/Home/Ads";
import BlogSection from "@/components/modules/Home/Blog";
import CategorySection from "@/components/modules/Home/Category";
import HeroSection from "@/components/modules/Home/HeroSection";
import HowItWorksSection from "@/components/modules/Home/HowItWorks";
import NewsletterSection from "@/components/modules/Home/NewsLetter";
import ProductSection from "@/components/modules/Home/Product";
import ProductOffer from "@/components/modules/Home/ProductOffer";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <AboutUsSection />
      <HowItWorksSection />
      <CategorySection />
      <ProductSection />
      <FeatureAds />
      <ProductOffer />
      <BlogSection />
      <NewsletterSection />
    </Fragment>
  );
}
