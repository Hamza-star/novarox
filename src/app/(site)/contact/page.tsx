import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with novarox to discuss your next big project and take your business to the next level.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Ready to scale your brand? Let's talk about your marketing goals and how novarox can help you achieve them."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
