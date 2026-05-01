"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { Icon } from "@iconify/react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="overflow-x-hidden bg-black py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10" data-aos="fade-right">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
                Contact Us
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase">
              Let's build <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
                Something Great.
              </span>
            </h2>

            <div className="space-y-8 pt-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon icon="mdi:phone" width="24" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Phone
                  </p>
                  <p className="text-xl font-bold text-white">
                    +92 (329) 986-5814
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon icon="mdi:email" width="24" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="text-xl font-bold text-white">
                    Sikandar.info5@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon icon="solar:map-point-bold" width="24" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-xl font-bold text-white">
                    Gulnishan Society, Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="glass-card p-10 md:p-16 relative"
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-6 bg-white text-black rounded-full font-black text-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Background Glow */}
            <div className="glow-blob -bottom-20 -right-20 w-64 h-64 bg-primary/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
