
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
              <a href="#" className="text-medical-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-medical-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-medical-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-medical-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-medical-100 hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-medical-100 hover:text-white transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-medical-100 hover:text-white transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="text-medical-100 hover:text-white transition-colors">
                  Campus Life
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
                <span className="text-medical-100">contact@medicalcollege.edu</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-medical-100" />
                <span className="text-medical-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-medical-100" />
                <span className="text-medical-100">123 Medical Center Drive<br />Healthcare City, HC 12345</span>
              </li>
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
          <p>&copy; {new Date().getFullYear()} Medical Health College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
