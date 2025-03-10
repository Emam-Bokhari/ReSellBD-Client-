import AboutUsSection from "@/components/modules/Home/AboutUs";
import FeatureAds from "@/components/modules/Home/Ads";
import CategorySection from "@/components/modules/Home/Category";
import HeroSection from "@/components/modules/Home/HeroSection";
import ProductSection from "@/components/modules/Home/Product";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <AboutUsSection />
      <CategorySection />
      <ProductSection />
      <FeatureAds />
    </Fragment>
  );
}
