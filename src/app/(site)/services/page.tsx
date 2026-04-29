import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore novarox's wide range of digital marketing services, from social media advertising to web design and funnel optimization.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Our Digital Services"
        description="From Meta & Google Ads to UI/UX Design and Market Research, we provide a complete suite of services to grow your digital presence."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services />
    </>
  );
};

export default page;
