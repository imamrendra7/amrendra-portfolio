import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const experiences = [
  {
    role: 'Front-End Developer Intern',
    company: 'Skillbit Technologies',
    location: 'Remote',
    period: 'June 2025 – August 2025',
    type: 'Internship',
    color: 'blue',
    description: [
      'Developed responsive web applications using HTML, CSS, and JavaScript following modern UI/UX principles.',
      'Integrated REST APIs to dynamically fetch and display real-time data in web interfaces.',
      'Built and optimized reusable UI components to improve performance and maintainability.',
      'Collaborated in an Agile development environment to implement feature enhancements and resolve UI bugs.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'Git', 'GitHub'],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">03. Experience</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="glow-line w-24 mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 pl-8 md:pl-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-dark-900 transform md:-translate-x-1/2 mt-6 shadow-glow-blue z-10" />

              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="glass-card p-6 hover:border-blue-500/30 transition-all duration-300 group">
                  {/* Header */}
                  <div className={`flex items-start gap-3 mb-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiBriefcase className="text-blue-400 text-xl" />
                    </div>
                    <div className={i % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className={`flex flex-wrap gap-4 mb-4 text-sm text-gray-500 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <FiCalendar size={12} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin size={12} /> {exp.location}
                    </span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      {exp.type}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className={`space-y-2 mb-4 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, j) => (
                      <li key={j} className={`text-gray-400 text-sm flex gap-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.techStack.map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty spacer for opposite side */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}

          {/* Seeking opportunities card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 border-dashed border-blue-500/30 text-center mt-8"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 font-semibold">Open to Opportunities</span>
            </div>
            <p className="text-gray-400 text-sm">
              Actively seeking SDE / Full Stack Developer roles at product-based companies, MNCs & startups.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
