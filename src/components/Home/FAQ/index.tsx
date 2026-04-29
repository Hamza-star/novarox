"use client";
import React, { useState } from "react";
import { faqData } from "@/app/api/data";
import { Icon } from "@iconify/react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-darkmode">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-grey dark:text-white/70 text-lg">
            Everything you need to know about our digital marketing services and
            how we help your business grow.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-border dark:border-dark_border rounded-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-midnight_text dark:text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Icon
                    icon="heroicons:chevron-up-20-solid"
                    className="text-primary w-6 h-6"
                  />
                ) : (
                  <Icon
                    icon="heroicons:chevron-down-20-solid"
                    className="text-grey w-6 h-6"
                  />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-5 pt-0 text-grey dark:text-white/70 border-t border-border dark:border-dark_border mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
