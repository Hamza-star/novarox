import React from "react";
import { Servicebox } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return Servicebox.map((service) => ({
    slug: service.slug,
  }));
}

const ServiceDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const service = Servicebox.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto py-40 text-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <Link href="/services" className="text-primary mt-4 inline-block">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black py-24 md:py-40 relative overflow-hidden min-h-screen">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="glow-blob top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20"></div>
        <div
          className="glow-blob bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/services"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group font-bold uppercase tracking-widest text-xs"
          >
            <Icon
              icon="mdi:arrow-left"
              width="16"
              height="16"
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Services
          </Link>
        </div>

        <div className="glass-card p-8 md:p-16 space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative aspect-[16/10] w-full md:w-1/2 rounded-3xl overflow-hidden border border-white/10 group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="text-left flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight uppercase">
                {service.title}
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              <p className="text-xl text-gray-400 font-medium leading-relaxed italic">
                {service.description}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
            <div className="space-y-8">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Our Strategic Approach
              </h3>
              <ul className="space-y-6">
                {[
                  "Data-driven strategies tailored to your specific business goals and audience.",
                  "Continuous optimization and A/B testing to ensure maximum ROI on every dollar spent.",
                  "Transparent reporting and regular performance updates to keep you in the loop.",
                  "Expert team with years of experience in digital growth and scalability.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Icon icon="mdi:check-circle" width="14" />
                    </div>
                    <span className="text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-10 bg-white/5 border-white/10 flex flex-col items-center text-center justify-center space-y-8">
              <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Icon icon="mdi:star-face" width="40" />
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-black text-white uppercase">
                  Ready to Scale?
                </h4>
                <p className="text-gray-400 font-medium">
                  Partner with Novaroxe and experience the future of digital
                  marketing.
                </p>
              </div>
              <Link
                href="/contact"
                className="w-full py-5 bg-white text-black rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
