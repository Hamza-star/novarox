import React from "react";
import Link from "next/link";
import { Servicebox } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-section dark:bg-darklight py-20" id="services">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-baseline justify-between flex-wrap mb-10">
          <h2
            className="text-4xl font-bold text-midnight_text dark:text-white"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Our Expert Services
          </h2>
          <Link
            href="/services"
            className="flex items-center gap-3 text-base text-midnight_text dark:text-white dark:hover:text-primary font-medium hover:text-primary sm:pb-0 pb-3"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            View All Services
            <span>
              <Icon icon="solar:arrow-right-outline" width="30" height="30" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-7">
          {Servicebox.map((item, index) => (
            <div
              key={index}
              className="w-full md:col-span-4 sm:col-span-6 col-span-12 group"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              data-aos-duration="1000"
            >
              <div className="group mb-0 relative">
                <div className="mb-8 overflow-hidden rounded-sm">
                  <Link href={`/services/${item.slug}`} aria-label="service cover" className="block">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full transition group-hover:scale-110 duration-500"
                      width={408}
                      height={272}
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      quality={100}
                    />
                  </Link>
                </div>
                <div className="absolute top-0 bg-primary py-2 ml-4 mt-4 px-5 rounded-sm">
                  <span className="text-white font-medium text-sm">
                    Service
                  </span>
                </div>
                <div>
                  <h3>
                    <Link
                      href={`/services/${item.slug}`}
                      className="mb-4 inline-block font-semibold text-dark text-black hover:text-primary dark:text-white dark:hover:text-primary text-[22px] leading-tight transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
                    {item.description}
                  </p>
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-primary font-semibold flex items-center gap-1 group/link hover:text-blue-700 transition-colors"
                  >
                    Explore Service
                    <Icon icon="ei:chevron-right" width="24" height="24" className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
