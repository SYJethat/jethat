import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Eye, Fingerprint, Network, Database, Zap, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-dusk-50 to-primary-50 dark:from-dusk-900 dark:via-dusk-800 dark:to-primary-900/20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Digital Dusk Neural Network Background */}
        <motion.div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(93, 107, 255, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(100, 116, 139, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
        
        {/* Animated Grid Overlay */}
        <motion.div
          className="absolute inset-0 opacity-10 dark:opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(93, 107, 255, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(93, 107, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Cyber Security Data Flow Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30">
          {[...Array(12)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${i * 120} 0 Q ${i * 120 + 60} ${Math.sin(i) * 100 + 200} ${i * 120 + 120} 400`}
              stroke="url(#duskGradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4,8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ 
                duration: 3, 
                delay: i * 0.2, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
          <defs>
            <linearGradient id="duskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5d6bff" />
              <stop offset="50%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Security Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400/40 dark:bg-primary-300/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Binary Code Rain Effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-xs font-mono text-primary-400/20 dark:text-primary-300/30 select-none"
          style={{
            left: `${10 + i * 12}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span 
                className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-4 shadow-lg"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(93, 107, 255, 0.3)',
                    '0 0 40px rgba(239, 68, 68, 0.4)',
                    '0 0 20px rgba(93, 107, 255, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🛡️ Trusted Cybersecurity Partner Since 2018
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-dusk-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Securing Your
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-cyber-500 to-accent-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                {' '}Digital Future
              </motion.span>
              <br />
              <motion.span
                className="text-dusk-700 dark:text-dusk-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                with AI-Powered Protection
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-dusk-600 dark:text-dusk-300 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* JetHat delivers comprehensive <motion.span className="text-primary-600 dark:text-primary-400 font-semibold">AI-driven cybersecurity solutions</motion.span>, 
              cloud infrastructure, and digital transformation services. We protect over <motion.span className="text-accent-600 dark:text-accent-400 font-semibold">500+ enterprises</motion.span> worldwide 
              with cutting-edge threat detection and prevention technologies. */}
            </motion.p>

            {/* Key Features */}
            <motion.div
              className="mb-8 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                'Real-time AI threat detection & response',
                'Zero-trust security architecture',
                '24/7 SOC monitoring & incident response',
                'Compliance with ISO 27001, SOC 2, GDPR'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary-500" />
                  <span className="text-dusk-600 dark:text-dusk-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/products"
                  className="group bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-primary-500/25"
                >
                  <Shield className="h-5 w-5" />
                  <span>Explore Solutions</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2"
                >
                  <Play className="h-4 w-4" />
                  <span>Watch Demo</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Advanced Cybersecurity Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central Security Hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-primary-500 via-cyber-500 to-accent-500 rounded-full flex items-center justify-center shadow-2xl relative"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 30px rgba(93, 107, 255, 0.3)',
                      '0 0 60px rgba(239, 68, 68, 0.5)',
                      '0 0 30px rgba(14, 165, 233, 0.3)',
                    ],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Shield className="h-16 w-16 text-white" />
                  
                  {/* Pulse rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-2 border-white/20 rounded-full"
                      animate={{
                        scale: [1, 2, 3],
                        opacity: [0.8, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Orbiting Security Technologies */}
              {[
                { icon: Lock, angle: 0, radius: 140, color: 'text-primary-500', label: 'Encryption' },
                { icon: Eye, angle: 60, radius: 140, color: 'text-cyber-500', label: 'Monitoring' },
                { icon: Fingerprint, angle: 120, radius: 140, color: 'text-accent-500', label: 'Identity' },
                { icon: Network, angle: 180, radius: 140, color: 'text-primary-600', label: 'Network' },
                { icon: Database, angle: 240, radius: 140, color: 'text-cyber-600', label: 'Data' },
                { icon: Zap, angle: 300, radius: 140, color: 'text-accent-600', label: 'Response' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{ transformOrigin: '0 0' }}
                  animate={{
                    rotate: [item.angle, item.angle + 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5,
                  }}
                >
                  <motion.div
                    className={`w-14 h-14 bg-white/90 dark:bg-dusk-800/90 backdrop-blur-sm border border-dusk-200 dark:border-dusk-600 rounded-xl flex items-center justify-center ${item.color} shadow-lg group cursor-pointer`}
                    style={{
                      transform: `translate(${item.radius}px, -28px)`,
                    }}
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    animate={{
                      rotate: [0, -360],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }
                    }}
                  >
                    <item.icon className="h-7 w-7" />
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dusk-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ opacity: 0, y: 5 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {item.label}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Neural Network Connections */}
              <svg className="absolute inset-0 w-full h-full opacity-60">
                {[...Array(12)].map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M ${250 + Math.cos(i * 30 * Math.PI / 180) * 80} ${250 + Math.sin(i * 30 * Math.PI / 180) * 80} 
                        Q ${250 + Math.cos(i * 30 * Math.PI / 180) * 110} ${250 + Math.sin(i * 30 * Math.PI / 180) * 110}
                        ${250 + Math.cos(i * 30 * Math.PI / 180) * 140} ${250 + Math.sin(i * 30 * Math.PI / 180) * 140}`}
                    stroke="url(#neuralGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="3,6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ 
                      duration: 2, 
                      delay: i * 0.1, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                ))}
                <defs>
                  <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5d6bff" />
                    <stop offset="50%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Security Metrics */}
              {[
                { text: '99.9%', label: 'Uptime', position: { top: '15%', left: '10%' } },
                { text: '0-Day', label: 'Threats', position: { top: '20%', right: '15%' } },
                { text: 'AI/ML', label: 'Detection', position: { bottom: '25%', left: '5%' } },
                { text: '24/7', label: 'SOC', position: { bottom: '15%', right: '10%' } },
              ].map((metric, index) => (
                <motion.div
                  key={metric.text}
                  className="absolute bg-white/80 dark:bg-dusk-800/80 backdrop-blur-sm border border-dusk-200 dark:border-dusk-600 px-4 py-2 rounded-lg shadow-lg"
                  style={metric.position}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.7,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-lg font-bold text-primary-600 dark:text-primary-400 font-mono">
                    {metric.text}
                  </div>
                  <div className="text-xs text-dusk-600 dark:text-dusk-400 uppercase tracking-wide">
                    {metric.label}
                  </div>
                </motion.div>
              ))}

              {/* Cyber Attack Simulation */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-accent-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-6 right-6 text-xs text-accent-500 font-mono"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                THREAT BLOCKED
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;