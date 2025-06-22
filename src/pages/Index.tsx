import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Users,
  Award,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Hammer,
  HardHat,
  Wrench,
  Truck,
  Home,
  Building,
  Factory,
  Star,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-construction-blue rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-construction-navy">
                ProBuild
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-construction-gray hover:text-construction-blue transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-construction-gray hover:text-construction-blue transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-construction-gray hover:text-construction-blue transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-construction-gray hover:text-construction-blue transition-colors"
              >
                Contact
              </a>
              <Button className="construction-button-primary">Get Quote</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center construction-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-construction-orange/20 text-construction-orange border-construction-orange/30 text-sm font-medium">
                Building Excellence Since 1995
              </Badge>
              <h1 className="text-5xl lg:text-hero font-heading font-bold text-white mb-6 leading-tight">
                Constructing Tomorrow's
                <span className="block text-construction-orange">
                  Infrastructure Today
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                From commercial complexes to residential developments, we
                deliver exceptional construction solutions that stand the test
                of time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="construction-button-secondary text-lg"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-construction-navy text-lg"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex space-x-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-gray-300">Expert Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="section-padding bg-construction-gray-light"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold construction-text-gradient mb-6">
              Our Construction Services
            </h2>
            <p className="text-xl text-construction-gray max-w-3xl mx-auto">
              Comprehensive construction solutions for commercial, business, and
              residential projects of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Commercial Construction",
                description:
                  "Office buildings, retail spaces, and mixed-use developments built to the highest standards.",
                features: [
                  "Office Buildings",
                  "Retail Centers",
                  "Mixed-Use Developments",
                  "Renovation & Expansion",
                ],
              },
              {
                icon: Factory,
                title: "Industrial Projects",
                description:
                  "Specialized facilities for manufacturing, warehousing, and industrial operations.",
                features: [
                  "Manufacturing Plants",
                  "Warehouses",
                  "Distribution Centers",
                  "Industrial Facilities",
                ],
              },
              {
                icon: Home,
                title: "Residential Development",
                description:
                  "Custom homes and residential communities designed for modern living.",
                features: [
                  "Custom Homes",
                  "Multi-Family Housing",
                  "Residential Communities",
                  "Home Renovations",
                ],
              },
              {
                icon: HardHat,
                title: "Project Management",
                description:
                  "End-to-end project oversight ensuring quality, timeline, and budget compliance.",
                features: [
                  "Timeline Management",
                  "Quality Control",
                  "Budget Oversight",
                  "Safety Compliance",
                ],
              },
              {
                icon: Wrench,
                title: "Design-Build Services",
                description:
                  "Integrated design and construction services for streamlined project delivery.",
                features: [
                  "Architectural Design",
                  "Engineering",
                  "Construction",
                  "Single Point of Contact",
                ],
              },
              {
                icon: Truck,
                title: "Site Development",
                description:
                  "Complete site preparation and infrastructure development services.",
                features: [
                  "Site Preparation",
                  "Utilities Installation",
                  "Road Construction",
                  "Landscaping",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="construction-card hover:border-construction-blue/50 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-construction-blue/20 transition-colors">
                    <service.icon className="w-6 h-6 text-construction-blue" />
                  </div>
                  <CardTitle className="text-xl text-construction-navy">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-construction-gray">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-construction-gray"
                      >
                        <CheckCircle2 className="w-4 h-4 text-construction-orange mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold construction-text-gradient mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-construction-gray max-w-3xl mx-auto">
              Showcasing our expertise across commercial, industrial, and
              residential construction
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Metro Business Center",
                category: "Commercial",
                description:
                  "15-story mixed-use development featuring retail, office, and residential spaces in downtown metro area.",
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                stats: ["250,000 sq ft", "18 months", "LEED Certified"],
              },
              {
                title: "Industrial Manufacturing Hub",
                category: "Industrial",
                description:
                  "State-of-the-art manufacturing facility with advanced automation and sustainable design features.",
                image:
                  "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                stats: ["500,000 sq ft", "24 months", "ISO Certified"],
              },
              {
                title: "Riverside Residential Complex",
                category: "Residential",
                description:
                  "Luxury residential community featuring 200 units with modern amenities and sustainable design.",
                image:
                  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                stats: ["200 units", "30 months", "Energy Star"],
              },
              {
                title: "Tech Campus Expansion",
                category: "Commercial",
                description:
                  "Modern office campus expansion featuring flexible workspaces and cutting-edge technology infrastructure.",
                image:
                  "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                stats: ["400,000 sq ft", "20 months", "Smart Building"],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="construction-card group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-construction-orange text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-construction-navy">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-construction-gray">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {project.stats.map((stat, statIndex) => (
                      <Badge
                        key={statIndex}
                        variant="outline"
                        className="text-construction-blue border-construction-blue/30"
                      >
                        {stat}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        id="about"
        className="section-padding bg-construction-gray-light"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold construction-text-gradient mb-6">
                Why Choose ProBuild?
              </h2>
              <p className="text-xl text-construction-gray mb-8">
                With over 25 years of experience, we've built a reputation for
                excellence, reliability, and innovation in the construction
                industry.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Industry Leadership",
                    description:
                      "Award-winning projects and industry recognition for excellence in construction.",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description:
                      "Certified professionals with decades of combined experience in construction.",
                  },
                  {
                    icon: Clock,
                    title: "On-Time Delivery",
                    description:
                      "95% of our projects are completed on schedule and within budget.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Quality Assurance",
                    description:
                      "Rigorous quality control processes ensure superior construction standards.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-construction-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-construction-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-construction-navy mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-construction-gray">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-construction-blue">
                      500+
                    </div>
                    <div className="text-sm text-construction-gray">
                      Projects
                    </div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <div className="text-sm text-construction-gray mt-1">
                      Client Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold construction-text-gradient mb-6">
              Start Your Project Today
            </h2>
            <p className="text-xl text-construction-gray max-w-3xl mx-auto">
              Ready to bring your construction vision to life? Get in touch with
              our team for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold text-construction-navy mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-construction-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-construction-navy">
                      Phone
                    </div>
                    <div className="text-construction-gray">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-construction-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-construction-navy">
                      Email
                    </div>
                    <div className="text-construction-gray">
                      contact@probuild.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-construction-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-construction-navy">
                      Office
                    </div>
                    <div className="text-construction-gray">
                      123 Construction Ave, Business District
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-construction-blue/5 rounded-xl border border-construction-blue/20">
                <h4 className="font-semibold text-construction-navy mb-3">
                  Business Hours
                </h4>
                <div className="space-y-2 text-construction-gray">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="construction-card">
              <CardHeader>
                <CardTitle className="text-construction-navy">
                  Request a Quote
                </CardTitle>
                <CardDescription>
                  Tell us about your project and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Project Type" />
                <Textarea placeholder="Project Description" rows={4} />
                <Button className="w-full construction-button-primary">
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-construction-navy text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-construction-orange rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-heading font-bold">ProBuild</span>
              </div>
              <p className="text-gray-300 mb-4">
                Building tomorrow's infrastructure with today's innovation and
                expertise.
              </p>
              <div className="text-sm text-gray-400">
                Licensed & Insured
                <br />
                License #: CB-123456
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Commercial Construction</li>
                <li>Industrial Projects</li>
                <li>Residential Development</li>
                <li>Project Management</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Safety</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>(555) 123-4567</li>
                <li>contact@probuild.com</li>
                <li>123 Construction Ave</li>
                <li>Business District</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ProBuild Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
