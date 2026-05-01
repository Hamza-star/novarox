"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Progress as ProgressData } from "@/app/api/data";
import { Icon } from "@iconify/react";

// Define the interface for ProgressItem
interface ProgressItem {
  title: string;
  Progress: number;
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([]);

  useEffect(() => {
    setProgressValues(ProgressData);
  }, []);

  return (
    <section className="bg-black py-32" id="about">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10" data-aos="fade-right">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
                Our Impact
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase">
              Measurable <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
                Excellence.
              </span>
            </h2>

            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
              We translate complex data into clear growth trajectories. Our
              performance metrics speak louder than words.
            </p>

            <div className="space-y-10 pt-6">
              {progressValues.map((item, index) => (
                <div key={index} className="group space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xl font-bold text-white uppercase tracking-wider">
                      {item.title}
                    </span>
                    <span className="text-2xl font-black text-primary">
                      {item.Progress}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                      style={{ width: `${item.Progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="glass-card p-4 overflow-hidden group">
              <Image
                src="https://scontent.flhe5-1.fna.fbcdn.net/v/t39.35426-6/455794416_504476008838142_4657405128886131941_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=107&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=uWh9n39bme0Q7kNvwERXiH7&_nc_oc=AdrczQIkMPC55Vt8Xghit76a6gTAxpFuGF9A7-Fl3xH2b_5g4CzxJeH9c3iOt-iFvDc&_nc_zt=14&_nc_ht=scontent.flhe5-1.fna&_nc_gid=J2JEuacfYcvNs7T5MKoDiQ&_nc_ss=7b289&oh=00_Af48Kg51ah1q8XkRd2mfnKMTZJoA3d97NwZMMHGyFSKGyQ&oe=69FA9D3C"
                alt="Novarox Strategy"
                width={600}
                height={600}
                quality={100}
                className="w-full h-auto rounded-[1.5rem] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Floating Stat Card */}
              <div className="absolute bottom-10 left-10 glass-card p-8 space-y-2 animate-float">
                <p className="text-4xl font-black text-white">4.5x</p>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
                  Average ROI
                </p>
              </div>
            </div>

            {/* Background Glow */}
            <div className="glow-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progresswork;
