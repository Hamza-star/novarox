import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Portfolio from "@/components/SharedComponent/portfollio";
import Testimonial from "@/components/SharedComponent/Testimonial";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about novarox, our mission, and how we help businesses scale with data-driven digital marketing strategies.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title="About novarox"
        description="We are a team of digital marketing experts dedicated to scaling businesses through innovative ad strategies, user-centric design, and data-driven insights."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Counter isColorMode={true} />
      <div className="py-20">
        <Progresswork isColorMode={false} />
      </div>
      <Portfolio />
      <Testimonial />
    </>
  );
};

export default page;
