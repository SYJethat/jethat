
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award, Brain, Globe, Zap, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize security in everything we do, ensuring your digital assets are protected with the highest standards.',
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'Continuous innovation drives our solutions, keeping us at the forefront of technology advancement.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as trusted partners in their digital transformation journey.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to excellence drives continuous improvement and industry-leading solutions.',
    },
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'JetHat Cyber Security Pvt. Ltd. established in Noida' },
    { year: '2019', title: 'First AI Product', description: 'Launched our first AI-powered cybersecurity solution' },
    { year: '2020', title: 'Cloud Expansion', description: 'Expanded services to include comprehensive cloud solutions' },
    { year: '2021', title: 'International Growth', description: 'Extended operations to serve global clients' },
    { year: '2022', title: 'R&D Investment', description: 'Established dedicated AI/ML research division' },
    { year: '2023', title: 'Product Portfolio', description: 'Launched complete suite of AI-powered products' },
    { year: '2024', title: 'Industry Recognition', description: 'Received multiple awards for innovation and security' },
    { year: '2025', title: 'Future Vision', description: 'Continuing to pioneer the future of digital security' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Chief Executive Officer',
      expertise: 'Strategic Leadership, Business Development',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      expertise: 'AI/ML, System Architecture',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Amit Singh',
      role: 'Head of Cybersecurity',
      expertise: 'Threat Intelligence, Security Architecture',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Neha Gupta',
      role: 'Head of Product Development',
      expertise: 'Product Strategy, User Experience',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
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
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ['20% 50%, 80% 20%, 40% 80%', '60% 30%, 20% 70%, 80% 40%'],
          }}
          transition={{
            duration: 20,
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
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Since 2018
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                {' '}JetHat
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Pioneering the future of cybersecurity and AI-driven technology solutions 
              since 2018, based in the heart of India's technology hub.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To empower businesses with innovative AI-driven cybersecurity solutions and cutting-edge 
                technology services that protect their digital infrastructure while enabling growth and transformation.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that security and innovation go hand in hand. Our team of experts combines 
                deep technical knowledge with business acumen to deliver solutions that not only protect 
                but also accelerate your digital journey.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, label: '25+ Countries', value: 'Global Reach' },
                  { icon: Users, label: '500+ Clients', value: 'Trust Us' },
                  { icon: Zap, label: '99.9%', value: 'Uptime' },
                  { icon: Heart, label: '7+ Years', value: 'Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <stat.icon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.label}</div>
                    <div className="text-gray-400 text-sm">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
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
                
                {/* Floating Elements */}
                {[
                  { icon: Brain, position: 'top-4 right-4', color: 'text-blue-400' },
                  { icon: Shield, position: 'bottom-4 left-4', color: 'text-green-400' },
                  { icon: Code, position: 'top-4 left-4', color: 'text-purple-400' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-xl flex items-center justify-center ${item.color}`}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1.5
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

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <value.icon className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From a startup vision to industry leadership - our milestones tell the story of innovation and growth.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {milestone.year.slice(-2)}
                  </motion.div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the visionaries and experts leading JetHat's mission to secure the digital future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl text-center group hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-700 group-hover:border-blue-500 transition-colors"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-400 mb-3 font-medium">{member.role}</p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">JetHat by Numbers</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our growth and impact in the technology and cybersecurity industry
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Delivered', icon: Target },
              { value: '50+', label: 'Team Members', icon: Users },
              { value: '25+', label: 'Countries Served', icon: Globe },
              { value: '7+', label: 'Years of Excellence', icon: Award },
            ].map((stat, index) => (
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
                  <stat.icon className="h-12 w-12 text-blue-500 mx-auto group-hover:text-blue-400 transition-colors" />
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
    </div>
  );
};

export default About;