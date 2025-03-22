import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import BlogCard from "@/components/ui/core/BlogCard";

export default function BlogSection() {
  return (
    <Container>
      <div className="mt-4">
        <SectionTitle title="Latest Blog" />

        <div className="mt-4">
          {/* blogs grid */}
          <div className="mt-4 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <BlogCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
