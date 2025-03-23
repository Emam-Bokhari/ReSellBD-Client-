import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import BlogCard from "@/components/ui/core/BlogCard";
import { getAllBlogs } from "@/services/Blog";
import { TBlog } from "@/types";

export default async function BlogSection() {
  const { data: blogs }: { data: TBlog[] } = await getAllBlogs();
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <Container>
      <div className="mt-4">
        <SectionTitle title="Latest Blog" />

        <div className="mt-4">
          {/* blogs grid */}
          <div className="mt-4 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-4">
            {sortedBlogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
