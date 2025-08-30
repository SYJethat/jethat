import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarqueeContact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-dusk-900 to-accent-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(93, 107, 255, 0.1) 25%, transparent 25%),
                             linear-gradient(-45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%),
                             linear-gradient(45deg, transparent 75%, rgba(93, 107, 255, 0.1) 75%),
                             linear-gradient(-45deg, transparent 75%, rgba(239, 68, 68, 0.1) 75%)`,
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

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Marquee Text */}
        <div className="mb-12 overflow-hidden">
          <motion.div
            className="whitespace-nowrap text-2xl md:text-4xl font-bold text-white/80 mb-8"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <span className="inline-block mr-20">
              अनुक्षणं रक्षामहे • We Protect Every Moment • 
            </span>
            <span className="inline-block mr-20">
              अनुक्षणं रक्षामहे • We Protect Every Moment • 
            </span>
            <span className="inline-block mr-20">
              अनुक्षणं रक्षामहे • We Protect Every Moment • 
            </span>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We take care of your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyber-400 to-accent-400">
              Cybersecurity
            </span>
            , So You Can Focus on Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-primary-400 to-cyber-400">
              Business Growth
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-dusk-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let JetHat's expert team handle your complete cybersecurity infrastructure while you concentrate on 
            achieving your business objectives and driving innovation.
          </motion.p>

          {/* Contact Button with Magnetic Effect */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-primary-500/25 relative overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10">Connect With Us</span>
                
                <motion.div
                  className="relative z-10"
                  animate={{
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowUpRight className="h-6 w-6" />
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600/50 to-accent-600/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Additional Contact Options */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-dusk-300">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span>24/7 Security Operations Center</span>
            </div>
            <div className="flex items-center space-x-2 text-dusk-300">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span>Instant Threat Response</span>
            </div>
            <div className="flex items-center space-x-2 text-dusk-300">
              <div className="w-2 h-2 bg-cyber-400 rounded-full animate-pulse" />
              <span>Free Security Assessment</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default MarqueeContact;