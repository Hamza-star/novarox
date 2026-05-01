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
    <section id="faq" className="py-32 bg-black">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
            <Icon
              icon="solar:question-square-bold"
              className="text-primary"
              width="20"
            />
            <span className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
              Support
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter mb-6">
            Common <span className="text-primary italic">Questions.</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Everything you need to know about our digital marketing services and
            how we help your business grow.
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`glass-card overflow-hidden transition-all duration-500 ${
                openIndex === index ? "bg-white/10 ring-1 ring-white/20" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-8 text-left transition-all"
              >
                <span
                  className={`text-xl md:text-2xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                    openIndex === index ? "text-primary" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${
                    openIndex === index
                      ? "rotate-180 bg-primary border-primary text-white"
                      : "text-gray-500"
                  }`}
                >
                  <Icon icon="solar:alt-arrow-down-bold" width="20" />
                </div>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-8 pt-0 text-lg text-gray-400 font-medium leading-relaxed border-t border-white/5 mt-4">
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
