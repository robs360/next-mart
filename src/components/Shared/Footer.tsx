import Logo from "@/app/assets/svgs/Logo";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/testimonial", label: "Testimonial" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { href: "#", icon: FaFacebook },
    { href: "#", icon: FaInstagram },
    { href: "#", icon: FaTwitter },
  ];

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Logo />
            <h1 className="text-3xl font-extrabold text-blue-400">Next Mart</h1>
          </div>
          <p className="text-gray-400 mt-2 w-full max-w-md mx-auto">
            Save big this Black Friday with unbeatable deals on tech, home essentials, fashion, and more! Limited stock.
          </p>
        </div>

        <hr className="border-gray-600 my-8" />

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 font-medium mb-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-blue-400 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              href={href}
              key={index}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Icon className="w-8 h-8" />
            </Link>
          ))}
        </div>
        
        {/* Footer Bottom Text */}
        <p className="text-sm text-gray-500 mt-8">
          &copy; 2025 Next Mart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
