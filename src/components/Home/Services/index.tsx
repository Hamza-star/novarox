import React from "react";
import Link from "next/link";
import { Servicebox } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-black py-32" id="services">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <h2
              className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter"
              data-aos="fade-right"
            >
              Expertise <br />
              <span className="text-primary italic">Redefined.</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium">
              We don't just provide services; we engineer growth engines for the
              digital age.
            </p>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-4 text-xl text-white font-bold hover:text-primary transition-all"
            data-aos="fade-left"
          >
            View All Services
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
              <Icon icon="mdi:arrow-top-right" width="24" />
            </div>
          </Link>
        </div>

        {/* Grid Layout - Blog Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Servicebox.map((item, index) => (
            <Link
              href={`/services/${item.slug}`}
              key={index}
              className="group glass-card overflow-hidden flex flex-col h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-once="true"
            >
              {/* Image Container - Blog Like */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <Icon
                      icon="mdi:star"
                      width="64"
                      className="text-primary/20"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Floating Icon */}
                <div className="absolute bottom-6 left-6 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl">
                  <Icon icon="mdi:web" width="30" />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-grow flex flex-col space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {item.features && (
                  <ul className="space-y-3 pt-6 border-t border-white/5 mt-auto">
                    {item.features.slice(0, 3).map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  View Details <Icon icon="mdi:arrow-right" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
