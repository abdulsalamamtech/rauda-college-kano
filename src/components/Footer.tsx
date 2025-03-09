
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-medical-100 mb-4">
              Leading medical institution dedicated to excellence in healthcare education, research, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Raudacollege" className="text-medical-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.x.com/rauda-college" className="text-medical-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/rauda-college" className="text-medical-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/rauda-college" className="text-medical-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-medical-100 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#services" className="text-medical-100 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#staff" className="text-medical-100 hover:text-white transition-colors">
                    Staff
                  </a>
                </li>
                <li>
                  <a href="/#facilities" className="text-medical-100 hover:text-white transition-colors">
                    Facilities
                  </a>
                </li>
                <li>
                  <a href="/#news" className="text-medical-100 hover:text-white transition-colors">
                    News & Events
                  </a>
                </li>
              <li>
                <a href="/#courses" className="text-medical-100 hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/about" className="text-medical-100 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/programs" className="text-medical-100 hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-medical-100 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-medical-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/#testimonial" className="text-medical-100 hover:text-white transition-colors">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-medical-100" />
                <span className="text-medical-100">info@raudacollege.edu.ng</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-medical-100" />
                <span className="text-medical-100">+234 80 6545 4117</span>
              </li>
              <a href="https://maps.app.goo.gl/uFz62T7wimdm1WbJ8" target="_blank" rel="noopener noreferrer" className="py-2">
              <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-medical-100" />
                  <span className="text-medical-100">
                    Behind Kangon Shekarau, Bela Road,<br />
                    Rangaza LGA, Kano State, Nigeria.
                  </span>
              </li>
              </a>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-medical-100 mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-medical-800 border border-medical-700 text-white placeholder:text-medical-400 focus:outline-none focus:ring-2 focus:ring-medical-500"
              />
              <button
                type="submit"
                className="w-full bg-medical-600 hover:bg-medical-700 text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-medical-800 mt-12 pt-8 text-center text-medical-100">
          <p>&copy; {new Date().getFullYear()} Rauda College. All rights reserved.</p>
          <p className="py-2">Developed by <a href="https://linkedin.com/in/abdulsalamamtech">Amtech</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
