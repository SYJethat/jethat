import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import MarqueeContact from '../components/MarqueeContact';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe, Zap, Brain, Shield, Code } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Enterprise Clients', color: 'text-primary-500' },
    { icon: Award, value: '50+', label: 'Security Certifications', color: 'text-cyber-500' },
    { icon: Globe, value: '25+', label: 'Countries Protected', color: 'text-accent-500' },
    { icon: Zap, value: '99.9%', label: 'Threat Detection Rate', color: 'text-primary-600' },
  ];

  const technologies = [
    { icon: Brain, name: 'AI-Powered Security', description: 'Machine learning threat detection and behavioral analysis' },
    { icon: Shield, name: 'Zero Trust Architecture', description: 'Never trust, always verify security framework' },
    { icon: Code, name: 'Custom Security Solutions', description: 'Tailored cybersecurity applications and integrations' },
    { icon: Globe, name: 'Cloud Security', description: 'Multi-cloud protection and compliance management' },
  ];

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-dusk-50 dark:bg-dusk-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
                               linear-gradient(-45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%),
                               linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%),
                               linear-gradient(-45deg, transparent 75%, rgba(139, 92, 246, 0.1) 75%)`,
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
            }}
            animate={{
              backgroundPosition: ['0 0, 0 30px, 30px -30px, -30px 0px', '60px 60px, 60px 90px, 90px 30px, 30px 60px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dusk-900 dark:text-white mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Global Enterprises</span>
            </h2>
            <p className="text-xl text-dusk-600 dark:text-dusk-400 max-w-3xl mx-auto">
              JetHat's cybersecurity solutions protect critical infrastructure and sensitive data for organizations worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="mb-4"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <stat.icon className={`h-12 w-12 ${stat.color} mx-auto group-hover:scale-110 transition-transform`} />
                </motion.div>
                <motion.h3 
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-white to-dusk-50 dark:from-dusk-800 dark:to-dusk-900 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dusk-900 dark:text-white mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-cyber-500 to-accent-500">Security Technologies</span>
            </h2>
            <p className="text-xl text-dusk-600 dark:text-dusk-400 max-w-3xl mx-auto">
              We deploy cutting-edge AI, machine learning, and quantum-resistant encryption to stay ahead of evolving cyber threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/80 dark:bg-dusk-900/50 backdrop-blur-sm border border-dusk-200 dark:border-dusk-700 p-8 rounded-2xl text-center hover:border-primary-500/50 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                  <motion.div
                    className="mb-6"
                    animate={{ 
                      rotateY: [0, 360],
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 2
                    }}
                  >
                    <tech.icon className="h-16 w-16 text-primary-500 mx-auto group-hover:text-primary-400 transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-dusk-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-dusk-600 dark:text-dusk-400 group-hover:text-dusk-700 dark:group-hover:text-dusk-300 transition-colors">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-dusk-50 via-primary-50/20 to-accent-50/20 dark:from-dusk-900 dark:via-primary-900/20 dark:to-accent-900/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Established 2018 • ISO 27001 Certified
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-dusk-900 dark:text-white mb-6 leading-tight">
                Pioneering the Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-cyber-500 to-accent-500">
                  {' '}Cybersecurity Excellence
                </span>
              </h2>
              <p className="text-xl text-dusk-600 dark:text-dusk-300 mb-8 leading-relaxed">
                JetHat Cyber Security Pvt. Ltd. is India's leading cybersecurity company, combining 
                cutting-edge AI technology with robust security expertise. We protect critical infrastructure, 
                financial institutions, and enterprises across 25+ countries with our advanced threat detection, 
                incident response, and compliance solutions.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Real-time AI threat intelligence and automated response',
                  'SOC-as-a-Service with 24/7 monitoring capabilities',
                  'Zero-trust architecture implementation and consulting',
                  'Compliance management for GDPR, SOX, HIPAA, PCI-DSS'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-dusk-600 dark:text-dusk-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/about"
                className="group inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="JetHat team collaboration"
                  className="rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl" />
                
                {/* Floating Tech Icons */}
                {[
                  { icon: Brain, position: 'top-4 right-4', delay: 0 },
                  { icon: Shield, position: 'bottom-4 left-4', delay: 1 },
                  { icon: Code, position: 'top-4 left-4', delay: 2 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-xl flex items-center justify-center text-blue-400`}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay
                    }}
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />

      <MarqueeContact />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-dusk-900 to-accent-900 relative overflow-hidden">
        {/* Animated Background Grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Secure Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyber-400 to-accent-400">
                {' '}Digital Assets?
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-dusk-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join 500+ enterprises worldwide that trust JetHat for comprehensive cybersecurity, 
              threat intelligence, and digital risk management solutions.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-primary-600 via-cyber-600 to-accent-600 hover:from-primary-700 hover:via-cyber-700 hover:to-accent-700 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-primary-500/25"
              >
                <span>Get Security Assessment</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="bg-transparent border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                View Solutions
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;