import UpdateBlogForm from "@/components/modules/Dashboard/Blogs/UpdateBlog/page";
import { getBlogById } from "@/services/Blog";
import { Fragment } from "react";

export default async function UpdateBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: blog } = await getBlogById(id);
  return (
    <Fragment>
      <UpdateBlogForm blog={blog} />
    </Fragment>
  );
}
