import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiCode, FiDatabase, FiCpu } from 'react-icons/fi';
import {
  SiReact, SiTailwindcss, SiJavascript, SiPython,
  SiScikitlearn, SiPandas,
} from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'Company Employee Management System',
    status: 'Completed',
    statusColor: 'green',
    emoji: '👥',
    description:
      'A full-featured role-based dashboard with two user roles — Admin & Employee — featuring complete CRUD operations across employees, tasks, and departments. Built with React component-driven architecture for scalability and localStorage persistence.',
    highlights: [
      'Role-Based Authentication (Admin & Employee)',
      'Full CRUD — Employees, Tasks, Departments',
      'Optimized state management (~25% fewer re-renders)',
      'localStorage persistence across session reloads',
      'Fully responsive dashboard UI',
    ],
    tags: ['React.js', 'Tailwind CSS', 'JavaScript ES6+', 'localStorage'],
    icons: [SiReact, SiTailwindcss, SiJavascript],
    github: 'https://github.com/imamrendra7',
    demo: 'https://github.com/imamrendra7',
    gradient: 'from-blue-600/20 via-blue-600/5 to-transparent',
    borderColor: 'border-blue-500/30',
    glowColor: 'rgba(59, 130, 246, 0.15)',
  },
  {
    id: 2,
    title: 'IPL Win Predictor',
    status: 'Completed',
    statusColor: 'purple',
    emoji: '🏏',
    description:
      'Processed 5,000+ IPL match records across 10+ seasons. Engineered 15+ features including venue, team form, and toss outcomes. Trained and compared Logistic Regression, Random Forest, and SVM models achieving ~78% prediction accuracy.',
    highlights: [
      'Processed 5,000+ IPL match records (10+ seasons)',
      'Engineered 15+ predictive features',
      '~78% accuracy with Random Forest after cross-validation',
      'Compared Logistic Regression, Random Forest, SVM',
      'Rich visualizations with Matplotlib',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
    icons: [SiPython, SiPandas, SiScikitlearn],
    github: 'https://github.com/imamrendra7',
    demo: null,
    gradient: 'from-purple-600/20 via-purple-600/5 to-transparent',
    borderColor: 'border-purple-500/30',
    glowColor: 'rgba(168, 85, 247, 0.15)',
  },
  {
    id: 3,
    title: 'Human Activity Recognition via WiFi',
    status: 'Ongoing Research',
    statusColor: 'cyan',
    emoji: '📡',
    description:
      'A device-free Human Activity Recognition system using WiFi CSI signals — no wearables needed. Performs signal preprocessing including noise filtering, normalization, feature extraction, and time-series segmentation. Implemented supervised ML models with hyperparameter tuning.',
    highlights: [
      'Device-free sensing using WiFi CSI signals',
      'Signal preprocessing: noise filtering + normalization',
      'Feature extraction & time-series segmentation',
      'SVM and Random Forest classifiers',
      'Evaluated with F1-Score, Precision, Recall metrics',
    ],
    tags: ['Python', 'Machine Learning', 'Signal Processing', 'SVM', 'Random Forest'],
    icons: [SiPython, SiScikitlearn],
    github: 'https://github.com/imamrendra7',
    demo: null,
    gradient: 'from-cyan-600/20 via-cyan-600/5 to-transparent',
    borderColor: 'border-cyan-500/30',
    glowColor: 'rgba(34, 211, 238, 0.15)',
    research: true,
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  const statusColors = {
    green: 'text-green-400 bg-green-400/10 border-green-400/20',
    purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`project-card relative glass-card animated-border overflow-hidden ${project.borderColor} group`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered ? `0 20px 60px ${project.glowColor}, 0 0 40px ${project.glowColor}` : undefined,
      }}
    >
      {/* Gradient overlay */}
      <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${project.gradient} pointer-events-none`} />

      <div className="p-6 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{project.emoji}</span>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${statusColors[project.statusColor]}`}>
                {project.research && '🔬 '}{project.status}
              </span>
            </div>
          </div>

          {/* Tech icons */}
          <div className="flex gap-1">
            {project.icons.map((Icon, i) => (
              <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Icon className="text-gray-400 text-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((h, i) => (
            <li key={i} className="text-gray-500 text-xs flex gap-2">
              <span className="text-blue-500 flex-shrink-0">▸</span>
              <span className="group-hover:text-gray-400 transition-colors">{h}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className={`px-2 py-0.5 text-xs rounded-full border ${project.borderColor} text-gray-400 bg-white/3`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-white/20 text-sm font-medium transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={14} /> GitHub
          </motion.a>
          {project.demo ? (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink size={14} /> Live Demo
            </motion.a>
          ) : (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCode size={14} /> {project.research ? 'Research' : 'Details'}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
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
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">04. Projects</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Handcrafted with passion — from idea to deployment.
          </p>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">More projects on GitHub →</p>
          <motion.a
            href="https://github.com/imamrendra7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
