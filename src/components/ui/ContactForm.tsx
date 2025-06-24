import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser"; // <-- Correct import here

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [typing, setTyping] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (submitted) {
      audioRef.current?.play();
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_yjzaj1f",  // your EmailJS service ID
        "template_e6fnz9r", // your EmailJS template ID
        form.current,
        "RTIKWC4cp5K0QiMh1" // your EmailJS public key
      )
      .then(
        () => {
          setSubmitted(true);
          form.current?.reset();
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return submitted ? (
    <div className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-xl">
      <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
      <h4 className="text-lg font-semibold text-green-700 mb-2">Thank you!</h4>
      <p className="text-green-700 text-center">
        Your message has been sent successfully. We will contact you soon.
      </p>
      <audio ref={audioRef} src="/success.mp3" preload="auto" />
    </div>
  ) : (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="first_name" // changed to match template variables
          placeholder="First Name"
          required
          className={`bg-gray-50 border-gray-200 rounded-xl py-4 ${
            typing ? "text-gray-900" : "text-gray-700"
          }`}
          onFocus={() => setTyping(true)}
          onBlur={() => setTyping(false)}
          onChange={() => setTyping(true)}
        />
        <Input
          name="last_name" // changed to match template variables
          placeholder="Last Name"
          required
          className={`bg-gray-50 border-gray-200 rounded-xl py-4 ${
            typing ? "text-gray-900" : "text-gray-700"
          }`}
          onFocus={() => setTyping(true)}
          onBlur={() => setTyping(false)}
          onChange={() => setTyping(true)}
        />
      </div>
      <Input
        name="user_email" // changed to match template variables
        type="email"
        placeholder="Email Address"
        required
        className={`bg-gray-50 border-gray-200 rounded-xl py-4 ${
          typing ? "text-gray-900" : "text-gray-700"
        }`}
        onFocus={() => setTyping(true)}
        onBlur={() => setTyping(false)}
        onChange={() => setTyping(true)}
      />
      <Input
        name="company"
        placeholder="Company Name"
        className={`bg-gray-50 border-gray-200 rounded-xl py-4 ${
          typing ? "text-gray-900" : "text-gray-700"
        }`}
        onFocus={() => setTyping(true)}
        onBlur={() => setTyping(false)}
        onChange={() => setTyping(true)}
      />
      <textarea
        name="message"
        placeholder="Tell us about your project"
        rows={4}
        required
        className={`w-full bg-gray-50 border border-gray-200 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary ${
          typing ? "text-gray-900" : "text-gray-700"
        }`}
        onFocus={() => setTyping(true)}
        onBlur={() => setTyping(false)}
        onChange={() => setTyping(true)}
      />
      <Button type="submit" className="w-full brand-button text-lg py-4">
        Send Message
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
      <audio ref={audioRef} src="/success.mp3" preload="auto" />
    </form>
  );
};

export default ContactForm;
