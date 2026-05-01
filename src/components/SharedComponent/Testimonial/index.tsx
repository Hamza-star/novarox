import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Testimonial = () => {
  return (
    <section className="bg-black py-32" id="testimonials">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="glass-card p-12 md:p-24 relative overflow-hidden text-center">
          <div className="relative z-10 space-y-12">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Icon icon="mdi:format-quote-open" width="40" />
              </div>
            </div>

            <p className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto uppercase italic">
              "novarox transformed our digital presence. Their{" "}
              <span className="text-primary">data-driven</span> approach is
              truly game-changing."
            </p>

            <div className="space-y-2">
              <strong className="text-2xl font-black text-white uppercase tracking-widest">
                Sarah Jenkins
              </strong>
              <p className="text-lg font-bold text-gray-500 uppercase tracking-[0.2em]">
                Marketing Director, TechFlow Solutions
              </p>
            </div>
          </div>

          {/* Background Glow */}
          <div className="glow-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
