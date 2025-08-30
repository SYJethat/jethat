
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Code, 
  Smartphone, 
  Server, 
  Database, 
  Globe,
  Cpu,
  Shield,
  Layers,
  Zap,
  Brain,
  Lock
} from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      icon: Cloud,
      title: 'Cloud Technologies',
      description: 'Scalable cloud infrastructure and services for modern applications.',
      technologies: [
        { name: 'Amazon Web Services', icon: Server, description: 'Comprehensive cloud platform' },
        { name: 'Microsoft Azure', icon: Database, description: 'Enterprise cloud solutions' },
        { name: 'Google Cloud Platform', icon: Globe, description: 'AI-powered cloud services' },
        { name: 'Kubernetes', icon: Layers, description: 'Container orchestration' },
        { name: 'Docker', icon: Cpu, description: 'Containerization platform' },
        { name: 'Terraform', icon: Code, description: 'Infrastructure as Code' },
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Code,
      title: 'Web Technologies',
      description: 'Modern web development frameworks and tools for exceptional user experiences.',
      technologies: [
        { name: 'React.js', icon: Zap, description: 'Modern UI library' },
        { name: 'Node.js', icon: Server, description: 'JavaScript runtime' },
        { name: 'TypeScript', icon: Code, description: 'Type-safe JavaScript' },
        { name: 'Next.js', icon: Globe, description: 'Full-stack React framework' },
        { name: 'TailwindCSS', icon: Layers, description: 'Utility-first CSS framework' },
        { name: 'GraphQL', icon: Database, description: 'Query language for APIs' },
      ],
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Technologies',
      description: 'Cross-platform and native mobile development solutions.',
      technologies: [
        { name: 'React Native', icon: Smartphone, description: 'Cross-platform development' },
        { name: 'Flutter', icon: Layers, description: 'Google\'s UI toolkit' },
        { name: 'Swift', icon: Shield, description: 'iOS native development' },
        { name: 'Kotlin', icon: Code, description: 'Android native development' },
        { name: 'Ionic', icon: Globe, description: 'Hybrid app development' },
        { name: 'Firebase', icon: Database, description: 'Mobile backend services' },
      ],
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  const additionalTech = [
    { category: 'AI & Machine Learning', items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
    { category: 'DevOps', items: ['Jenkins', 'GitLab CI', 'Ansible', 'Prometheus'] },
    { category: 'Security', items: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'Penetration Testing'] },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30 relative overflow-hidden">
        {/* Animated Tech Icons Background */}
        <div className="absolute inset-0 opacity-5">
          {[Brain, Shield, Code, Cloud, Database, Smartphone].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5,
              }}
            >
              <Icon className="h-8 w-8 text-blue-400" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                {' '}Technologies
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              We leverage cutting-edge technologies to build scalable, secure, 
              and innovative solutions for the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <motion.div
                    className="flex justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <category.icon className="h-10 w-10 text-white" />
                    </div>
                  </motion.div>
                  <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <motion.div
                          className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors"
                          whileHover={{ rotate: 10 }}
                        >
                          <tech.icon className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {tech.name}
                          </h3>
                          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Technologies */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Additional Expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive technology stack covers every aspect of modern development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalTech.map((tech, index) => (
              <motion.div
                key={tech.category}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, i) => (
                    <motion.div
                      key={item}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;