import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-darkmode relative z-1 border-t border-dark_border px-6">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12 py-16">
          <div className="md:col-span-4 sm:col-span-6 col-span-12">
            <div className="sm:text-start text-center sm:w-auto w-full">
              <Link
                href="/"
                className="md:block flex justify-center sm:justify-start mb-6"
              >
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">N</span>
                  </div>
                  <span className="text-2xl font-bold text-white">
                    Nova<span className="text-blue-500">rox</span>e
                  </span>
                </div>
              </Link>
              <p className="text-white/70 text-base pb-6 max-w-sm mx-auto sm:mx-0">
                Your trusted partner for comprehensive digital marketing
                solutions. We help businesses grow through data-driven
                strategies and creative excellence.
              </p>
              <div className="flex items-center gap-4 mt-6 sm:justify-start justify-center">
                <a
                  href="#"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition-all"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="white"
                    className="group-hover:fill-white"
                  >
                    <path d="M22.9128 0.769043H2.06165C1.34768 0.769472 0.7689 1.34854 0.769043 2.0628V22.9139C0.769472 23.6279 1.34854 24.2067 2.0628 24.2065H13.2889V15.1428H10.2448V11.5952H13.2889V8.98433C13.2889 5.95665 15.1372 4.3087 17.838 4.3087C19.1317 4.3087 20.2433 4.40512 20.5673 4.44818V7.61261H18.7049C17.2355 7.61261 16.951 8.31084 16.951 9.33566V11.5952H20.4643L20.0066 15.1428H16.951V24.2065H22.9128C23.6272 24.2067 24.2064 23.6278 24.2065 22.9134C24.2065 22.9132 24.2065 22.9131 24.2065 22.9128V2.06165C24.2063 1.34768 23.627 0.7689 22.9128 0.769043Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition-all"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 23 23"
                    fill="white"
                    className="group-hover:fill-white"
                  >
                    <path d="M21.3412 0H1.65878C0.742615 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.742615 23 1.65878 23H21.3412C22.2574 23 23 22.2574 23 21.3412V1.65878C23 0.742615 22.2574 0 21.3412 0ZM16.7508 8.96648C16.7559 9.07966 16.7583 9.19337 16.7583 9.3076C16.7583 12.7955 14.1034 16.8176 9.24812 16.8178H9.24829H9.24812C7.75745 16.8178 6.37031 16.3809 5.20216 15.6321C5.4087 15.6565 5.61892 15.6686 5.83177 15.6686C7.06853 15.6686 8.20667 15.2468 9.11019 14.5387C7.95468 14.5173 6.98044 13.7542 6.64423 12.7053C6.80514 12.7362 6.97061 12.7531 7.1403 12.7531C7.38123 12.7531 7.61461 12.7206 7.83641 12.6601C6.62861 12.4183 5.71877 11.3508 5.71877 10.0727C5.71877 10.0607 5.71877 10.05 5.71912 10.039C6.07481 10.2367 6.48156 10.3557 6.91463 10.3691C6.20589 9.89615 5.74 9.08773 5.74 8.17192C5.74 7.68831 5.87073 7.23523 6.09744 6.84515C7.39912 8.44233 9.34445 9.49273 11.5383 9.6031C11.493 9.40973 11.4696 9.20828 11.4696 9.00122C11.4696 7.54407 12.6518 6.36189 14.1095 6.36189C14.8688 6.36189 15.5546 6.68283 16.0362 7.19592C16.6376 7.0773 17.2023 6.8576 17.7124 6.55526C17.515 7.17136 17.0966 7.68831 16.5516 8.01522C17.0856 7.95135 17.5945 7.80974 18.0674 7.59952C17.7141 8.12893 17.2661 8.59394 16.7508 8.96648Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition-all"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 23"
                    fill="white"
                    className="group-hover:fill-white"
                  >
                    <path d="M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0ZM7.80353 17.3848H5.12453V8.95858H7.80353V17.3848ZM6.46411 7.80798H6.44666C5.54767 7.80798 4.96625 7.161 4.96625 6.35241C4.96625 5.52557 5.56546 4.89648 6.4819 4.89648C7.39835 4.89648 7.96231 5.52557 7.97977 6.35241C7.97977 7.161 7.39835 7.80798 6.46411 7.80798ZM17.4634 17.3848H14.7848V12.877C14.7848 11.7441 14.3969 10.9715 13.4276 10.9715C12.6875 10.9715 12.2468 11.4926 12.0531 11.9957C11.9822 12.1758 11.965 12.4274 11.965 12.6792V17.3848H9.28612C9.28612 17.3848 9.3212 9.7491 9.28612 8.95858H11.965V10.1516C12.321 9.57748 12.9579 8.76082 14.3793 8.76082C16.1418 8.76082 17.4634 9.96511 17.4634 12.5532V17.3848Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition-all"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="group-hover:fill-white"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 sm:col-span-6 col-span-12 sm:mt-0 mt-8">
            <h3 className="text-white font-bold text-lg mb-6 sm:text-start text-center">
              Services
            </h3>
            <ul className="space-y-3 sm:text-start text-center">
              <li>
                <Link
                  href="/services#meta-ads"
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services#google-ads"
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  Google Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ui-ux"
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#graphic-design"
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#email-marketing"
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#social-media"
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  Social Media
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 sm:col-span-6 col-span-12 sm:mt-0 mt-8">
            <h3 className="text-white font-bold text-lg mb-6 sm:text-start text-center">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:text-start text-center">
              <li>
                <Link
                  href="/about"
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 sm:col-span-6 col-span-12 sm:mt-0 mt-8">
            <h3 className="text-white font-bold text-lg mb-6 sm:text-start text-center">
              Get In Touch
            </h3>
            <div className="space-y-4 sm:text-start text-center">
              <div className="flex items-center gap-3 sm:justify-start justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#3b82f6"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <Link
                  href="mailto:contact@novarox.com"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Sikandar.info5@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3 sm:justify-start justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#3b82f6"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <Link
                  href="tel:+1234567890"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  +92 (329) 986-5814
                </Link>
              </div>
              <div className="flex items-start gap-3 sm:justify-start justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#3b82f6"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span className="text-white/50">
                  Digital Marketing Agency
                  <br />
                  Lahore, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-dark_border py-6">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-white/50 text-center md:text-start">
              © {new Date().getFullYear()} novarox. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-base text-white/50 hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-base text-white/50 hover:text-blue-500 transition-colors"
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
