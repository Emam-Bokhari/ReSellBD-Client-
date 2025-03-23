import Container from "@/components/shared/Container";
import BlogCard from "@/components/ui/core/BlogCard";
import { TBlog } from "@/types";

export default function AllBlogs({ blogs }: { blogs: TBlog[] }) {
  return (
    <Container className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </Container>
  );
}
