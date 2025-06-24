import React, { useState } from "react";
import { MessageCircle, X, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatWidgetProps {
  phoneNumber: string;
  formattedPhoneNumber: string;
  email: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({
  phoneNumber,
  formattedPhoneNumber,
  email,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Create a mailto link with the message
      const subject = "Construction Inquiry from Website";
      const body = `Hi, I have a question about your construction services:\n\n${message}`;
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      setMessage("");
      setIsOpen(false);
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
            <div className="space-y-3 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  Hi! How can we help you with your construction project today?
                </p>
              </div>
            </div>

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
