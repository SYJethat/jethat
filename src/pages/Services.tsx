import { motion } from 'framer-motion';
import { 
  Cloud, 
  Code, 
  Shield, 
  Smartphone, 
  Brain, 
  ShoppingCart,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Comprehensive cloud infrastructure solutions for scalable and secure business operations.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Automation', 'Multi-Cloud Strategy'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'],
      price: 'Custom Quote',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices.',
      features: ['Web Applications', 'Enterprise Software', 'API Development', 'System Integration'],
      technologies: ['React', 'Node.js', 'Python', 'Java'],
      price: 'From $10,000',
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: Shield,
      title: 'Cyber Security Services',
      description: 'Advanced cybersecurity solutions to protect your digital assets and infrastructure.',
      features: ['Threat Detection', 'Penetration Testing', 'Security Auditing', 'Incident Response'],
      technologies: ['AI Security', 'Zero Trust', 'SIEM', 'Endpoint Protection'],
      price: 'From $5,000',
      gradient: 'from-red-600 to-pink-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Services',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native Development', 'Cross-Platform Apps', 'UI/UX Design', 'App Store Optimization'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      price: 'From $15,000',
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      icon: Brain,
      title: 'R&D (AI, ML, DL)',
      description: 'Research and development in artificial intelligence, machine learning, and deep learning.',
      features: ['Custom AI Models', 'Data Science', 'Computer Vision', 'NLP Solutions'],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
      price: 'From $20,000',
      gradient: 'from-yellow-600 to-orange-600',
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Services',
      description: 'Complete ecommerce solutions for products, publications, and digital services.',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Analytics'],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions'],
      price: 'From $8,000',
      gradient: 'from-pink-600 to-rose-600',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `conic-gradient(from 0deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))`,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional Services
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                {' '}Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Comprehensive technology services to accelerate your digital transformation 
              and secure your business future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="text-gray-400 flex items-center text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="bg-gray-700/50 text-blue-400 px-3 py-1 rounded-lg text-xs font-medium border border-gray-600"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-gray-700">
                    <span className="text-blue-400 font-semibold text-lg">{service.price}</span>
                    <motion.button
                      className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: '02', title: 'Design', description: 'Creating user-centric designs and architecture' },
              { step: '03', title: 'Development', description: 'Building with cutting-edge technologies' },
              { step: '04', title: 'Deployment', description: 'Launching and ongoing support' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {phase.step}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;