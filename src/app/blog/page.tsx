import { BlogIndexPage } from "@/components/BlogIndexPage";
import { createPageMetadata } from "@/lib/metadata";
import { blogRoutes } from "@/lib/routes";

export const metadata = createPageMetadata({
  title: "St. Augustine Water Guides",
  description:
    "Practical guides to help you choose, compare, and book the right St. Augustine water experience — from boat rental pricing to experience comparisons.",
  path: blogRoutes.index,
});

export default function BlogPage() {
  return <BlogIndexPage />;
}
