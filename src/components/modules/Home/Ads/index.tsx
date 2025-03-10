import Image from "next/image";
import featureAdsBanner from "@/assets/Add-Banner-01.png";
import Container from "@/components/shared/Container";

export default function FeatureAds() {
  return (
    <Container className="mt-4 relative w-full h-auto">
      <div className="relative w-full h-[250px]">
        <Image
          src={featureAdsBanner}
          alt="Feature ads"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </Container>
  );
}
