import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  X,
  Phone,
  Mail,
  Send,
  Clock,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatWidgetProps {
  phoneNumber: string;
  formattedPhoneNumber: string;
  email: string;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({
  phoneNumber,
  formattedPhoneNumber,
  email,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Check if currently in business hours (9 AM - 5 PM EST)
  const isBusinessHours = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    return day >= 1 && day <= 5 && hour >= 9 && hour < 17; // Monday-Friday, 9 AM - 5 PM
  };

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const businessHours = isBusinessHours();
      const initialMessage: Message = {
        id: 1,
        text: businessHours
          ? "Hi there! 👋 I'm here to help with your construction needs. We're currently online (9 AM - 5 PM EST). How can I assist you today?"
          : "Hi there! 👋 Thanks for visiting AGCC! We're currently offline (business hours: 9 AM - 5 PM EST, Monday-Friday), but I can still help answer some questions or you can leave a message!",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([initialMessage]);
    }
  }, [isOpen]);

  const commonQuestions = [
    {
      id: "services",
      text: "What services do you offer?",
      answer:
        "We provide comprehensive general contracting services including commercial construction, renovations, remodeling, electrical work, plumbing, roofing, and project management. We handle both residential and commercial projects.",
    },
    {
      id: "quote",
      text: "How do I get a quote?",
      answer:
        "Getting a quote is easy! You can call us at " +
        formattedPhoneNumber +
        ", email us at " +
        email +
        ", or describe your project here and we'll get back to you within 24 hours with a detailed estimate.",
    },
    {
      id: "timeline",
      text: "How long do projects take?",
      answer:
        "Project timelines vary depending on scope and complexity. Small renovations typically take 1-3 weeks, while larger commercial projects can take 2-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      id: "licensed",
      text: "Are you licensed and insured?",
      answer:
        "Yes! AGCC is fully licensed, bonded, and insured. We carry comprehensive liability insurance and all our work is performed by certified professionals following local building codes.",
    },
    {
      id: "area",
      text: "What areas do you serve?",
      answer:
        "We primarily serve the greater Bethesda, MD area including Montgomery County, Prince George's County, and surrounding Washington DC metropolitan areas.",
    },
    {
      id: "emergency",
      text: "Do you handle emergencies?",
      answer:
        "Yes, we provide emergency construction services for urgent issues like storm damage, structural problems, or emergency repairs. Call us immediately at " +
        formattedPhoneNumber +
        " for emergency situations.",
    },
  ];

  const handleQuickQuestion = (questionData: (typeof commonQuestions)[0]) => {
    // Add user question
    const userMessage: Message = {
      id: messages.length + 1,
      text: questionData.text,
      isBot: false,
      timestamp: new Date(),
    };

    // Add bot response
    const botMessage: Message = {
      id: messages.length + 2,
      text: questionData.answer,
      isBot: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Add user message to chat
      const userMessage: Message = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date(),
      };

      const responseMessage: Message = {
        id: messages.length + 2,
        text: isBusinessHours()
          ? "Thanks for your message! We'll review your inquiry and get back to you shortly. For immediate assistance, please call us at " +
            formattedPhoneNumber +
            "."
          : "Thanks for your message! Since we're currently outside business hours (9 AM - 5 PM EST), we'll respond first thing during our next business day. For urgent matters, please call " +
            formattedPhoneNumber +
            ".",
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage, responseMessage]);

      // Also create mailto link for backup
      const subject = "Construction Inquiry from Website";
      const body = `Hi, I have a question about your construction services:\n\n${message}\n\nSent via website chat at ${new Date().toLocaleString()}`;
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, "_blank");

      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in-50 slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-brand-primary text-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Chat with us</h3>
                <p className="text-sm opacity-90">We're here to help!</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Business Hours Status */}
            <div
              className={`mb-4 p-3 rounded-lg border ${isBusinessHours() ? "bg-green-50 border-green-200" : "bg-orange-50 border-orange-200"}`}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <div>
                  <p className="text-sm font-medium">
                    {isBusinessHours()
                      ? "🟢 We're Online"
                      : "🟠 Currently Offline"}
                  </p>
                  <p className="text-xs text-gray-600">
                    Business Hours: Mon-Fri, 9 AM - 5 PM EST
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`rounded-lg p-3 ${
                    msg.isBot
                      ? "bg-gray-50 border-l-4 border-brand-primary"
                      : "bg-brand-primary text-white ml-4"
                  }`}
                >
                  <p
                    className={`text-sm ${msg.isBot ? "text-gray-700" : "text-white"}`}
                  >
                    {msg.text}
                  </p>
                  {msg.isBot && (
                    <p className="text-xs text-gray-500 mt-1">AGCC Assistant</p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="mb-4">
                <p className="text-sm font-medium mb-2 text-gray-700">
                  Quick Questions:
                </p>
                <div className="space-y-1">
                  {commonQuestions.slice(0, 3).map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuickQuestion(q)}
                      className="w-full text-left p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded border transition-colors"
                    >
                      {q.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="space-y-2 mb-4">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                Call us: {formattedPhoneNumber}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-brand-primary" />
                Email us
              </a>
            </div>

            {/* Message Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-2 border border-gray-200 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                rows={3}
              />
              <Button
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
                disabled={!message.trim()}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
        size="icon"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
};

export default ChatWidget;
