import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Building2,
  Menu,
  ChevronDown,
  Play,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-black">
                A General Construction Company
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <nav className="hidden lg:flex items-center space-x-8 ml-auto">
                <a
                  href="#services"
                  className="text-black hover:text-brand-primary transition-colors font-medium text-sm"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="text-black hover:text-brand-primary transition-colors font-medium text-sm"
                >
                  Projects
                </a>
              </nav>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-gray-200"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen bg-white flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            <div className="animate-fade-in">
              <h1 className="text-hero lg:text-display-lg font-medium text-black mb-8 leading-tight">
                Commercial Projects
                <br />
                <span className="text-gradient">
                  Let's Get Your Project Moving
                </span>
              </h1>
              <p className="text-body text-gray-600 max-w-2xl mb-12 leading-relaxed">
                Let's get your project moving and build long lasting
                relationships. We deliver exceptional construction solutions for
                commercial and business projects of all sizes.
              </p>
            </div>
          </div>
        </div>

        {/* Get In Touch Button - Middle Bottom */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <Button className="brand-button">Get In Touch</Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm mb-2">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-section lg:text-display-md font-semibold text-black mb-8 leading-tight">
              Transform your
              <br />
              commercial project
            </h2>
            <p className="text-body text-gray-600 mb-8 leading-relaxed">
              We help businesses build exceptional commercial spaces that
              showcase their brand, attract customers, and drive business growth
              through expert construction and project management.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <span className="text-body text-gray-700">
                  Commercial building construction
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <span className="text-body text-gray-700">
                  Office space design & build
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <span className="text-body text-gray-700">
                  Residential & warehouse construction
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Construction site with modern architecture"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 section-container">
        <div className="text-center mb-20">
          <h2 className="text-section lg:text-display-md font-semibold text-black mb-6">
            What We Do
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions for commercial and business
            projects of all sizes
          </p>
        </div>

        <div className="space-y-16">
          {[
            {
              number: "01",
              title: "Commercial Construction",
              description:
                "Office buildings, retail spaces, and mixed-use developments built to the highest standards with modern design and functionality.",
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              number: "02",
              title: "Warehouse & Industrial",
              description:
                "Manufacturing facilities, distribution centers, and industrial spaces designed for efficiency and operational excellence.",
              image:
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              number: "03",
              title: "Residential Construction",
              description:
                "Custom homes, residential developments, and housing projects that provide quality living spaces for families and communities.",
              image:
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              number: "04",
              title: "Office Development",
              description:
                "Modern office spaces and corporate headquarters that inspire productivity and reflect your company's values.",
              image:
                "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              number: "05",
              title: "Project Management",
              description:
                "End-to-end construction management ensuring your project is completed on time, within budget, and to specification.",
              image:
                "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center service-card group ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="service-number mb-4">{service.number}</div>
                <h3 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                  {service.title}
                </h3>
                <p className="text-body text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Showcase */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-section lg:text-display-md font-semibold text-black mb-6">
            Our Clients
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Trusted by leading construction companies across the country
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60">
          {[
            "Public Stores",
            "ACME Construction",
            "BuildPro",
            "SteelWorks",
            "ModernBuild",
            "ConcretePlus",
          ].map((client, index) => (
            <div
              key={index}
              className="minimal-card text-center hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-lg font-semibold text-gray-700">
                {client}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="bg-gray-50 section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Construction planning meeting"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 className="text-section lg:text-display-md font-semibold text-black mb-8">
              Our Approach
            </h2>
            <p className="text-body text-gray-600 mb-8 leading-relaxed">
              We understand commercial construction's unique challenges and
              opportunities. Our approach combines industry expertise with
              proven construction methods to deliver exceptional results.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Planning & Design
                  </h3>
                  <p className="text-gray-600">
                    Deep dive into your project requirements and site analysis
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Construction & Build
                  </h3>
                  <p className="text-gray-600">
                    Expert construction with quality materials and craftsmanship
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Completion & Handover
                  </h3>
                  <p className="text-gray-600">
                    Final inspections and project delivery on time and budget
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-container">
        <div className="grid md:grid-cols-3 gap-16 text-center">
          <div>
            <div className="text-6xl lg:text-8xl font-bold text-brand-primary mb-4">
              132
            </div>
            <div className="text-gray-600 font-medium tracking-widest uppercase">
              Projects
            </div>
          </div>
          <div>
            <div className="text-6xl lg:text-8xl font-bold text-brand-primary mb-4">
              9
            </div>
            <div className="text-gray-600 font-medium tracking-widest uppercase">
              Awards
            </div>
          </div>
          <div>
            <div className="text-6xl lg:text-8xl font-bold text-brand-primary mb-4">
              25
            </div>
            <div className="text-gray-600 font-medium tracking-widest uppercase">
              Years
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="dark-section section-container">
        <div className="grid lg:grid-cols-2 gap-16">
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
                  <div className="text-white font-semibold">240-739-9223</div>
                  <div className="text-gray-400">Call Diego Hagans</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="text-white font-semibold">
                    agcontractservice@gmail.com
                  </div>
                  <div className="text-gray-400">Send us an email</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="text-white font-semibold">
                    123 Construction Ave
                  </div>
                  <div className="text-gray-400">Visit our office</div>
                </div>
              </div>
            </div>
          </div>

          <div className="minimal-card">
            <h3 className="text-2xl font-semibold text-black mb-6">
              Start Your Project
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-gray-50 border-gray-200 rounded-xl py-4"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-gray-50 border-gray-200 rounded-xl py-4"
                />
              </div>
              <Input
                placeholder="Email Address"
                type="email"
                className="bg-gray-50 border-gray-200 rounded-xl py-4"
              />
              <Input
                placeholder="Company Name"
                className="bg-gray-50 border-gray-200 rounded-xl py-4"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <Button className="w-full brand-button text-lg py-4">
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-display font-bold text-black">
                  A General Construction Company
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Building long lasting relationships through exceptional
                commercial construction projects.
              </p>
            </div>

            <div>
              <h4 className="text-black font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Commercial Construction</li>
                <li>Warehouse Development</li>
                <li>Residential Construction</li>
                <li>Project Management</li>
              </ul>
            </div>

            <div>
              <h4 className="text-black font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-black font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-600">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>
              &copy; 2024 A General Construction Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
