import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="bg-primary md:py-24 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="">
            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-solid border-white border-opacity-50 pb-11">
              <div className="col-span-3">
                <h2 className="text-white max-w-56 text-[40px] leading-tight font-bold">
                  Lahore Head Office
                </h2>
              </div>
              <div className="col-span-3">
                <p className="sm:text-2xl text-xl text-IceBlue font-normal max-w-64 leading-7 text-white/50">
                  Gulnishan Society, Lahore, Pakistan
                </p>
              </div>
              <div className="col-span-3">
                <Link
                  href="mailto:headoffice@venus.com"
                  className="sm:text-2xl text-xl text-white font-medium underline"
                >
                  headoffice@venus.com
                </Link>
                <Link
                  href="tel:731-621-5503"
                  className="sm:text-2xl text-xl text-white/80 flex items-center gap-2 hover:text-opacity-100 w-fit"
                >
                  <span className="text-white/40!">Call</span>
                  731-621-5503
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 pt-12">
              <div className="col-span-3">
                <h2 className="text-white max-w-52 text-[40px] leading-tight font-bold">
                  Digital Branch
                </h2>
              </div>
              <div className="col-span-3">
                <p className="sm:text-2xl text-xl text-white/50 font-normal max-w-64 leading-7">
                  Serving Clients Globally from Lahore
                </p>
              </div>
              <div className="col-span-3">
                <Link
                  href="mailto:contact@novarox.com"
                  className="sm:text-2xl text-xl text-white font-medium underline"
                >
                  Sikandar.info5@gmail.com
                </Link>
                <Link
                  href="tel:+15551234567"
                  className="sm:text-2xl text-white/80 text-xl text-IceBlue flex items-center gap-2 hover:text-opacity-100 w-fit"
                >
                  <span className="text-white/40!">Call</span>
                  +92 (329) 986-5814
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
