"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative md:pt-44 pt-28 pb-20 bg-white dark:bg-darklight bg-cover text-white">
      <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">
        <div
          className="p-4 md:px-4 px-0 space-y-6 flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="flex gap-2 items-center mt-[-28px] justify-center">
            <span className="w-3 h-3 rounded-full bg-success"></span>
            <span className="font-medium text-midnight_text text-sm dark:text-white/50">
              Digital Marketing Excellence
            </span>
          </div>
          <h1 className="text-midnight_text font-bold dark:text-white text-4xl md:text-6xl md:leading-[1.15] max-w-3xl">
            Scale Your Brand with Novaroxe
          </h1>
          <p className="text-grey dark:text-white/70 text-xl font-semibold max-w-2xl">
            We provide high-ROI digital solutions, from Meta & Google Ads to
            UI/UX design and full-scale funnel optimization.
          </p>
          <a
            href="#learn-more"
            className="py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-10 text-lg font-bold shadow-lg hover:shadow-blue-600/30"
          >
            Get Started
          </a>
          <div className="flex flex-col items-center mt-12 gap-4">
            <div className="flex items-center">
              <Image
                src="/images/hero/hero-profile-1.jpg"
                alt="hero-image"
                width={40}
                height={40}
                quality={100}
                className="w-10! h-10! rounded-full border border-solid border-white -ml-0"
              />
              <Image
                src="/images/hero/hero-profile-2.jpg"
                alt="hero-image"
                width={40}
                height={40}
                quality={100}
                className="w-10! h-10! rounded-full border border-solid border-white -ml-3"
              />
              <Image
                src="/images/hero/hero-profile-3.jpg"
                alt="hero-image"
                width={40}
                height={40}
                quality={100}
                className="w-10! h-10! rounded-full border border-solid border-white -ml-3"
              />
            </div>
            <div>
              <p className="text-sm font-normal text-grey max-w-56">
                Need help?{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:text-blue-700 font-bold"
                >
                  Contact our experts
                </Link>{" "}
                Tell us about your project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
