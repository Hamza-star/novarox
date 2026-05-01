"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-black overflow-hidden flex flex-col justify-center">
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="glow-blob top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20"></div>
        <div
          className="glow-blob bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-10" data-aos="fade-right">
            <div className="space-y-6">
              <h3 className="text-5xl md:text-7xl lg:text-[70px] font-black text-white leading-[1] tracking-tight uppercase whitespace-nowrap">
                SCALING BRANDS <br />
                <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent italic">
                  DRIVING GROWTH
                </span>
              </h3>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-medium">
                Novarox transforms your digital presence into a growth engine
                through data-driven strategies and high-impact creatives.
              </p>
            </div>

            {/* CTA Group */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-col sm:flex-row items-center gap-6 pt-8"
            >
              <Link
                href="/contact"
                className="group relative px-12 py-6 bg-white text-black rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="px-12 py-6 text-white font-bold text-xl rounded-full border border-white/20 hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                Our Expertise
              </Link>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div
            className="relative lg:ml-auto w-full max-w-[500px] lg:mt-16"
            data-aos="fade-left"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group">
              <Image
                src="https://images.pexels.com/photos/6476785/pexels-photo-6476785.jpeg"
                alt="Digital Excellence"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Stat Cards */}
            <div className="absolute -top-6 -right-6 glass-card bg-[#d9f99d]/90 p-6 shadow-2xl animate-float z-20">
              <p className="text-3xl font-black text-black">98%</p>
              <p className="text-[10px] font-bold text-black/60 uppercase tracking-widest">
                Client Satisfaction
              </p>
            </div>

            {/* Meta Ads Card */}
            <div
              className="absolute top-[-5%] -left-12 glass-card p-5 shadow-2xl animate-float z-20"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <Icon icon="logos:meta-icon" className="text-xl" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">Meta Ads</p>
                  <p className="text-[10px] font-bold text-indigo-400 uppercase flex items-center gap-1">
                    Optimized <Icon icon="solar:bolt-bold" />
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram Ads Card */}
            <div
              className="absolute top-[35%] -left-16 glass-card p-5 shadow-2xl animate-float z-20"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-xl flex items-center justify-center">
                  <Icon icon="mdi:instagram" className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">Instagram</p>
                  <p className="text-[10px] font-bold text-purple-400 uppercase flex items-center gap-1">
                    Growth <Icon icon="solar:graph-up-bold" />
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Ads Card */}
            <div
              className="absolute bottom-[5%] -left-10 glass-card p-5 shadow-2xl animate-float z-20"
              style={{ animationDelay: "2.5s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#0077b5] rounded-xl flex items-center justify-center">
                  <Icon
                    icon="logos:linkedin-icon"
                    className="text-white brightness-200"
                  />
                </div>
                <div>
                  <p className="text-sm font-black text-white">LinkedIn</p>
                  <p className="text-[10px] font-bold text-blue-400 uppercase flex items-center gap-1">
                    B2B Lead <Icon icon="solar:user-bold" />
                  </p>
                </div>
              </div>
            </div>

            {/* Google Ads Card */}
            <div
              className="absolute top-1/2 -right-12 glass-card p-6 shadow-2xl animate-float z-20"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Icon icon="logos:google-ads" className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">Google Ads</p>
                  <p className="text-[10px] font-bold text-green-500 uppercase flex items-center gap-1">
                    Certified <Icon icon="solar:check-circle-bold" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
