import Container from "@/components/shared/Container";
import Image from "next/image";
import bannerImage from "@/assets/Banner.png";

export default function HeroSection() {
  return (
    <Container>
      <div className=" mt-4">
        <Image
          src={bannerImage}
          alt="Banner image"
          width={1200}
          height={400}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </Container>
  );
}
