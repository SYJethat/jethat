
import { motion } from 'framer-motion';
import { Brain, Users, BookOpen, GraduationCap, Video, Languages, Building, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Brain,
      title: 'MAG-AI',
      description: 'Advanced AI platform for intelligent automation and decision-making processes.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Predictive Analytics', 'Real-time Insights'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Users,
      title: 'Virtual Naani',
      description: 'AI-powered virtual assistant for elderly care and family communication.',
      features: ['Voice Recognition', 'Health Monitoring', 'Emergency Alerts', 'Family Connect'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: BookOpen,
      title: 'E-library Solutions',
      description: 'Comprehensive digital library management system with advanced search capabilities.',
      features: ['Digital Cataloging', 'Advanced Search', 'User Management', 'Analytics Dashboard'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: GraduationCap,
      title: 'AI Multilingual LMS',
      description: 'Intelligent learning management system supporting multiple languages and AI tutoring.',
      features: ['AI Tutoring', 'Multi-language Support', 'Progress Tracking', 'Adaptive Learning'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      icon: Video,
      title: 'Virtual Classroom Solution',
      description: 'Interactive virtual classroom platform with real-time collaboration tools.',
      features: ['Live Streaming', 'Interactive Whiteboard', 'Breakout Rooms', 'Recording & Playback'],
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      icon: Languages,
      title: 'Multilingual Dictionary',
      description: 'Advanced dictionary solution with AI-powered translations and contextual meanings.',
      features: ['AI Translation', 'Voice Pronunciation', 'Contextual Examples', 'Offline Support'],
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-yellow-600 to-orange-600',
    },
    {
      icon: Building,
      title: 'Collaborative Solutions',
      description: 'Digital transformation tools for seamless organizational collaboration.',
      features: ['Workflow Automation', 'Team Collaboration', 'Document Management', 'Integration APIs'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-teal-600 to-blue-600',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
                             linear-gradient(-45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%)`,
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0 0', '40px 40px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Innovative
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                {' '}AI Products
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our suite of AI-powered products designed to revolutionize 
              education, security, and digital collaboration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}/80`} />
                  <motion.div
                    className="absolute top-6 left-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className={`bg-gradient-to-r ${product.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Learn More
                    </button>
                    <motion.div
                      className="text-blue-400 group-hover:text-blue-300"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovation at Every Step
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our products are built with cutting-edge technology and designed for the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'AI-Powered', description: 'Advanced machine learning algorithms', icon: Brain },
              { title: 'Secure by Design', description: 'Built-in security from ground up', icon: Shield },
              { title: 'Scalable Solutions', description: 'Grows with your business needs', icon: ArrowRight },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <feature.icon className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;