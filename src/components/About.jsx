import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCode, FiBriefcase, FiCpu, FiLayers
} from 'react-icons/fi';

const stats = [
  { icon: FiCode, label: '3+ Major Projects', value: '3+', desc: 'Full stack & ML projects delivered' },
  { icon: FiBriefcase, label: 'Internship', value: '1', desc: 'Front-End Dev Intern at Skillbit Technologies' },
  { icon: FiCpu, label: 'ML Enthusiast', value: '∞', desc: 'Exploring AI/ML solutions daily' },
  { icon: FiLayers, label: 'Full Stack', value: 'MERN', desc: 'React • Node • Spring Boot' },
];

function StatCard({ icon: Icon, label, value, desc, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass-card animated-border p-6 flex flex-col gap-3 group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-blue-400 text-xl" />
      </div>
      <div>
        <div className="text-3xl font-black gradient-text">{value}</div>
        <div className="text-white font-semibold text-sm mt-1">{label}</div>
        <div className="text-gray-500 text-xs mt-1">{desc}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">01. About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="glow-line w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a{' '}
                <span className="text-blue-400 font-semibold">B.Tech Information Technology</span>{' '}
                student at{' '}
                <span className="text-purple-400 font-semibold">NIT Jalandhar</span>{' '}
                with a strong passion for building impactful software.
              </p>

              <p className="text-gray-400 leading-relaxed">
                My interest spans across{' '}
                <span className="text-cyan-400">Software Development</span>,{' '}
                <span className="text-blue-400">Full Stack Development</span>,{' '}
                <span className="text-purple-400">Data Structures & Algorithms</span>, and{' '}
                <span className="text-green-400">Machine Learning</span>.
                I enjoy building scalable applications, solving real-world problems,
                and continuously improving my technical skills.
              </p>

              <p className="text-gray-400 leading-relaxed">
                As a developer, I believe in writing clean, maintainable code and
                creating experiences that not only work perfectly but also feel delightful to use.
                I'm always exploring new technologies and contributing to open source.
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { label: 'Degree', value: 'B.Tech IT' },
                  { label: 'Institute', value: 'NIT Jalandhar' },
                  { label: 'Year', value: 'Final Year' },
                  { label: 'Location', value: 'Punjab, India' },
                  { label: 'Status', value: 'Actively Seeking Roles' },
                  { label: 'Focus', value: 'SDE / Full Stack' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-2">
                    <span className="text-blue-500 font-mono text-sm">▸</span>
                    <div>
                      <span className="text-gray-500 text-sm">{label}: </span>
                      <span className="text-gray-200 text-sm font-medium">{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="/Amrendra_Resume.pdf"
                download="Amrendra Resume.pdf"
                className="btn-primary inline-flex items-center gap-2 mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 0.1 + 0.2} />
            ))}

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-6 col-span-2 border-l-2 border-blue-500"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h3 className="text-white font-bold">NIT Jalandhar</h3>
                  <p className="text-blue-400 text-sm">B.Tech in Information Technology</p>
                  <p className="text-gray-500 text-sm mt-1">2023 – 2027 (Expected)</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {['DSA', 'DBMS', 'OS', 'CN', 'Web Dev', 'ML'].map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
