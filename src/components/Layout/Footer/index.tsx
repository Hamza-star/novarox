import React, { FC } from "react";
import Link from "next/link";
import Logo from "../Header/Logo";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";

const Footer: FC = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/5 relative z-1">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center space-y-12">
          <Logo />
          <nav className="flex flex-wrap justify-center gap-10">
            {headerData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/Novarox"
              target="_blank"
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Icon
                icon="mdi:facebook"
                width="28"
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/novarox/"
              target="_blank"
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Icon
                icon="mdi:linkedin"
                width="28"
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.instagram.com/novarox.global?igsh=N3IzOXBobXozZHBz"
              target="_blank"
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Icon
                icon="mdi:instagram"
                width="28"
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>

          <div className="pt-12 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-sm font-medium">
              © {new Date().getFullYear()} Novarox. Engineering the future of
              digital marketing.
            </p>
            <div className="flex gap-8">
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-white transition-all"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-white transition-all"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
