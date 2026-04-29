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
    <div className="bg-white dark:bg-darkmode py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/services"
            className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
          >
            <Icon icon="solar:arrow-left-outline" width="20" height="20" />
            Back to Services
          </Link>
        </div>

        <div className="bg-section dark:bg-darklight rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="bg-white dark:bg-darkmode overflow-hidden rounded-2xl shadow-sm w-full md:w-1/3">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-midnight_text dark:text-white mb-4">
                {service.title}
              </h1>
              <div className="h-1 w-20 bg-primary mx-auto md:mx-0"></div>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {service.description}
            </p>

            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              Why Choose Our {service.title}?
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-success mt-1 shrink-0"
                  width="24"
                  height="24"
                />
                <span className="text-gray-700 dark:text-gray-400">
                  Data-driven strategies tailored to your specific business
                  goals and audience.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-success mt-1 shrink-0"
                  width="24"
                  height="24"
                />
                <span className="text-gray-700 dark:text-gray-400">
                  Continuous optimization and A/B testing to ensure maximum ROI
                  on every dollar spent.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-success mt-1 shrink-0"
                  width="24"
                  height="24"
                />
                <span className="text-gray-700 dark:text-gray-400">
                  Transparent reporting and regular performance updates to keep
                  you in the loop.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-success mt-1 shrink-0"
                  width="24"
                  height="24"
                />
                <span className="text-gray-700 dark:text-gray-400">
                  Expert team with years of experience in {service.title} and
                  digital growth.
                </span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-white dark:bg-darkmode rounded-xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold dark:text-white mb-2">
                  Ready to scale your business?
                </h4>
                <p className="text-gray-500">
                  Contact our experts today for a free consultation.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-primary/30"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
