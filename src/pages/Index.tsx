import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Building2,
  Menu,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  CheckCircle2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Index = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yjzaj1f",
        "template_e6fnz9r",
        form.current,
        "RTIKWC4cp5K0QiMh1"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({
            first_name: "",
            last_name: "",
            user_email: "",
            company: "",
            message: "",
          });
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="dark-section section-container">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info Side */}
        <div>
          <h2 className="text-section lg:text-display-md font-semibold text-white mb-8">
            Let's Build Something
            <br />
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-body text-gray-300 mb-12 leading-relaxed">
            Ready to start your commercial construction project? Get in touch
            with our team of construction experts.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <a
                  href="tel:240-739-9223"
                  className="text-white font-semibold hover:underline"
                >
                  240-739-9223
                </a>
                <div className="text-gray-400">Diego Hagans</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <a
                  href="mailto:agcontractservice@gmail.com"
                  className="text-white font-semibold hover:underline"
                >
                  agcontractservice@gmail.com
                </a>
                <div className="text-gray-400">Send us an email</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <div className="text-white font-semibold">Bethesda, MD</div>
                <div className="text-gray-400">Visit our office</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="minimal-card">
          <h3 className="text-2xl font-semibold text-black mb-6">
            Start Your Project
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-gray-50 border-gray-200 rounded-xl py-4 text-black"
              />
              <Input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-gray-50 border-gray-200 rounded-xl py-4 text-black"
              />
            </div>
            <Input
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Email Address"
              type="email"
              className="bg-gray-50 border-gray-200 rounded-xl py-4 text-black"
            />
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="bg-gray-50 border-gray-200 rounded-xl py-4 text-black"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows={4}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary text-black"
            />
            <Button type="submit" className="w-full brand-button text-lg py-4">
              Send Message
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Index;
