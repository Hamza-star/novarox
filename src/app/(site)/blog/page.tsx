import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest trends and insights in digital marketing from the Novaroxe team.",
};

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];
  return (
    <>
      <HeroSub
        title="Blog & Insights"
        description="Expert advice and the latest updates on Meta Ads, Google Ads, and conversion optimization to help your business thrive."
        breadcrumbLinks={breadcrumbLinks}
      />
      <BlogList />
    </>
  );
};

export default BlogPage;
