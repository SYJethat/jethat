
import { motion } from 'framer-motion';
import { Cloud, Code, Shield, Smartphone, Brain, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies.',
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Advanced cybersecurity solutions to protect your digital assets.',
      gradient: 'from-red-600 to-pink-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      icon: Brain,
      title: 'R&D (AI/ML/DL)',
      description: 'Research and development in artificial intelligence and machine learning.',
      gradient: 'from-yellow-600 to-orange-600',
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Services',
      description: 'Complete ecommerce solutions for products and digital publications.',
      gradient: 'from-pink-600 to-rose-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-primary-500/10 dark:bg-primary-400/20 rounded-full blur-3xl"
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
        className="absolute bottom-10 left-10 w-40 h-40 bg-secondary-500/10 dark:bg-secondary-400/20 rounded-full blur-3xl"
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
      
      {/* Cyber Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-cyber">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Cybersecurity</span> Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect, monitor, and secure your digital infrastructure 
            with cutting-edge AI and machine learning technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-8 rounded-2xl hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all duration-500 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Link
                to="/services"
                className={`inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors group-hover:translate-x-1 transform duration-300`}
              >
                <span>Learn More</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="group bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg hover:shadow-primary-500/25"
          >
            <span>View All Services</span>
            <motion.div
              className="group-hover:translate-x-1 transition-transform"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;