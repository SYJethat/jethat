import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Phone, Mail, MapPin, Twitter, Linkedin, Github, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { name: 'MAG-AI', path: '/products/mag-ai' },
    { name: 'Virtual Naani', path: '/products/virtual-naani' },
    { name: 'E-library Solutions', path: '/products/e-library' },
    { name: 'AI Multilingual LMS', path: '/products/ai-lms' },
  ];

  const serviceLinks = [
    { name: 'Cloud Services', path: '/services/cloud' },
    { name: 'Software Development', path: '/services/software' },
    { name: 'Cyber Security', path: '/services/cybersecurity' },
    { name: 'Mobile Applications', path: '/services/mobile' },
  ];

  const technologyLinks = [
    { name: 'Cloud Technologies', path: '/technologies/cloud' },
    { name: 'Web Technologies', path: '/technologies/web' },
    { name: 'Mobile Technologies', path: '/technologies/mobile' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-dusk-900 border-t border-dusk-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Shield className="h-10 w-10 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 bg-blue-500/20 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  JetHat
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                JetHat Cyber Security Pvt. Ltd. is a leading technology company specializing in 
                AI-driven cybersecurity solutions, cloud services, and innovative digital products. 
                Founded in 2018, we're committed to securing and advancing the digital future.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 120 456 7890</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@jethat.com</span>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Noida, Uttar Pradesh<br />India
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 JetHat Cyber Security Pvt. Ltd. All rights reserved. | 
              <Link to="/privacy" className="hover:text-blue-400 transition-colors ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-blue-400 transition-colors ml-1">Terms of Service</Link>
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Made with</span>
              <motion.span
                className="text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ❤️
              </motion.span>
              <span>in India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;