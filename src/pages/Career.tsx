import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  ArrowRight, 
  Heart, 
  Coffee, 
  Trophy,
  Zap,
  Shield,
  Code,
  Brain
} from 'lucide-react';

const Career = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI/ML',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of AI-powered cybersecurity solutions and machine learning models.',
      requirements: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      id: 2,
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Monitor, analyze, and respond to cybersecurity threats and incidents.',
      requirements: ['CISSP', 'Penetration Testing', 'SIEM', 'Incident Response', 'Risk Assessment'],
      gradient: 'from-red-600 to-pink-600',
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Noida, India / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build scalable web applications using modern technologies and frameworks.',
      requirements: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
      gradient: 'from-green-600 to-teal-600',
    },
    {
      id: 4,
      title: 'Cloud Solutions Architect',
      department: 'Cloud',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS/Azure', 'Kubernetes', 'Terraform', 'DevOps', 'Microservices'],
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      id: 5,
      title: 'Mobile App Developer',
      department: 'Mobile',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop cross-platform mobile applications for our AI-powered products.',
      requirements: ['React Native', 'Flutter', 'iOS/Android', 'Firebase', 'API Integration'],
      gradient: 'from-orange-600 to-yellow-600',
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Noida, India / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Automate deployment pipelines and manage cloud infrastructure.',
      requirements: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Monitoring Tools'],
      gradient: 'from-teal-600 to-blue-600',
    },
  ];

  const benefits = [
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs' },
    { icon: Coffee, title: 'Work-Life Balance', description: 'Flexible working hours and remote work options' },
    { icon: Trophy, title: 'Growth Opportunities', description: 'Continuous learning and career advancement programs' },
    { icon: Users, title: 'Team Culture', description: 'Collaborative environment with talented professionals' },
  ];

  const departments = ['all', 'AI/ML', 'Security', 'Development', 'Cloud', 'Mobile', 'Infrastructure'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

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
              Join Our Team
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                {' '}Future
              </span>
              <br />With Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join a team of innovators, creators, and security experts who are 
              shaping the future of technology and cybersecurity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and careers flourish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <benefit.icon className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Explore exciting opportunities to grow your career with cutting-edge technology
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {departments.map((dept) => (
                <motion.button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                layout
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className={`bg-gradient-to-r ${job.gradient} text-white px-3 py-1 rounded-full font-medium`}>
                        {job.department}
                      </span>
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{job.location}</span>
                      </span>
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{job.type}</span>
                      </span>
                    </div>
                  </div>
                  <span className="text-blue-400 font-semibold">{job.experience}</span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{job.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, i) => (
                      <motion.span
                        key={i}
                        className="bg-gray-700/50 text-blue-400 px-3 py-1 rounded-lg text-sm font-medium border border-gray-600"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {req}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.button
                  className={`w-full bg-gradient-to-r ${job.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Culture &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {' '}Values
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                At JetHat, we foster a culture of innovation, collaboration, and continuous learning. 
                We believe that diverse perspectives and creative thinking drive breakthrough solutions.
              </p>
              <div className="space-y-4">
                {[
                  'Innovation-driven environment',
                  'Collaborative team culture',
                  'Continuous learning opportunities',
                  'Work-life balance priority',
                  'Diversity and inclusion focus'
                ].map((value, index) => (
                  <motion.div
                    key={value}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-300">{value}</span>
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
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl" />
                
                {/* Floating Icons */}
                {[
                  { icon: Brain, position: 'top-4 right-4', delay: 0 },
                  { icon: Shield, position: 'bottom-4 left-4', delay: 1 },
                  { icon: Code, position: 'top-4 left-4', delay: 2 },
                  { icon: Zap, position: 'bottom-4 right-4', delay: 3 },
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

      {/* Application Process */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Application Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our streamlined hiring process ensures we find the right fit for both you and our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', description: 'Submit your application and resume' },
              { step: '02', title: 'Screen', description: 'Initial screening and technical assessment' },
              { step: '03', title: 'Interview', description: 'Technical and cultural fit interviews' },
              { step: '04', title: 'Offer', description: 'Job offer and onboarding process' },
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

export default Career;