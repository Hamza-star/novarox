import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";
import Portfolio from "@/components/SharedComponent/portfollio";
import Testimonial from "@/components/SharedComponent/Testimonial";
import Blog from "@/components/SharedComponent/Blog";
import FAQ from "@/components/Home/FAQ";
import Newsletter from "@/components/Layout/Newsletter";
import Contactform from "@/components/Home/Contact";
export const metadata: Metadata = {
  title: "Novaroxe | Strategic Digital Marketing Agency",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Blog />
      <Progresswork isColorMode={false} />
      <Testimonial />
      <Services />
      <Portfolio />
      <FAQ />
      {/* <Newsletter /> */}
      <Contactform />
    </main>
  );
}
