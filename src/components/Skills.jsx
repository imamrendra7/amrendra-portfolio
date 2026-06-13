import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiSpringboot, SiNodedotjs, SiMysql, SiMongodb,
  SiPython, SiScikitlearn, SiPandas, SiNumpy,
  SiGit, SiGithub, SiPostman,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { FiCode, FiBarChart2 } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-blue-600 to-cyan-500',
    glow: 'blue',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ed8b00', level: 85 },
      { name: 'C++', icon: TbBrandCpp, color: '#659ad2', level: 80 },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', level: 88 },
      { name: 'Python', icon: SiPython, color: '#3776ab', level: 82 },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-purple-600 to-pink-500',
    glow: 'purple',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26', level: 92 },
      { name: 'CSS3', icon: SiCss, color: '#1572b6', level: 88 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8', level: 85 },
      { name: 'React.js', icon: SiReact, color: '#61dafb', level: 87 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-600 to-emerald-500',
    glow: 'green',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f', level: 78 },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 75 },
    ],
  },
  {
    title: 'Databases',
    color: 'from-orange-500 to-yellow-500',
    glow: 'orange',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1', level: 80 },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248', level: 75 },
    ],
  },
  {
    title: 'Machine Learning',
    color: 'from-cyan-600 to-blue-500',
    glow: 'cyan',
    skills: [
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#f7931e', level: 76 },
      { name: 'Pandas', icon: SiPandas, color: '#150458', level: 80 },
      { name: 'NumPy', icon: SiNumpy, color: '#013243', level: 78 },
      { name: 'Matplotlib', icon: FiBarChart2, color: '#11557c', level: 74 },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: 'from-gray-500 to-slate-500',
    glow: 'gray',
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032', level: 85 },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff', level: 87 },
      { name: 'VS Code', icon: FiCode, color: '#007acc', level: 90 },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37', level: 80 },
    ],
  },
];

function SkillBar({ name, icon: Icon, color, level, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon style={{ color }} className="text-lg group-hover:scale-125 transition-transform" />
          <span className="text-gray-300 text-sm font-medium">{name}</span>
        </div>
        <span className="text-gray-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function CategoryCard({ title, color, glow, skills, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card animated-border p-6"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${color}`} />
        <h3 className="text-white font-bold text-sm uppercase tracking-wider">{title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
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
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">02. Skills</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            A curated set of technologies I use to build scalable, performant, and beautiful software.
          </p>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} {...cat} delay={i * 0.1} />
          ))}
        </div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['REST APIs', 'WebSockets', 'JWT Auth', 'Agile/Scrum', 'Problem Solving', 'System Design', 'OOP', 'Data Structures', 'Algorithms', 'Linux'].map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-gray-400 hover:border-blue-500/30 hover:text-blue-400 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
