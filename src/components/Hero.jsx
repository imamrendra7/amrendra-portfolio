import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload, FiCode
} from 'react-icons/fi';
import {
  SiReact, SiSpringboot, SiPython, SiJavascript,
  SiNodedotjs, SiMongodb, SiMysql, SiTailwindcss
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const techIcons = [
  { Icon: SiReact, color: '#61dafb', label: 'React' },
  { Icon: SiJavascript, color: '#f7df1e', label: 'JavaScript' },
  { Icon: FaJava, color: '#ed8b00', label: 'Java' },
  { Icon: SiPython, color: '#3776ab', label: 'Python' },
  { Icon: SiSpringboot, color: '#6db33f', label: 'Spring Boot' },
  { Icon: SiNodedotjs, color: '#339933', label: 'Node.js' },
  { Icon: SiTailwindcss, color: '#38bdf8', label: 'Tailwind' },
  { Icon: SiMongodb, color: '#47a248', label: 'MongoDB' },
];

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'ML Enthusiast',
  'Open Source Contributor',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 60 : 100;
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Mouse tracking for glow
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    hero.addEventListener('mousemove', onMove);
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #030712 0%, #0a0f1e 50%, #0d1629 100%)',
      }}
    >
      {/* Mouse glow effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.06), transparent 80%)`,
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl" />

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {techIcons.map(({ Icon, color, label }, i) => (
          <motion.div
            key={label}
            className="absolute tech-icon"
            style={{
              left: `${8 + (i % 4) * 24}%`,
              top: `${15 + Math.floor(i / 4) * 55}%`,
              color,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, i % 2 === 0 ? 10 : -10, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            <Icon size={i % 3 === 0 ? 44 : 32} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg font-medium mb-2"
          >
            Hello World, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-none"
          >
            <span className="gradient-text">Amrendra</span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-10 mb-6"
          >
            <span className="text-2xl md:text-3xl font-semibold text-gray-300">
              {displayText}
              <span className="typing-cursor" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8"
          >
            Building scalable web applications, solving complex problems through code,
            and continuously learning modern technologies.
            <br />
            <span className="text-blue-400 font-medium">B.Tech IT • NIT Jalandhar</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <FiCode /> View Projects
              </span>
            </motion.a>

            <motion.a
              href={`${import.meta.env.BASE_URL}Amrendra_Resume.pdf`}
              download="Amrendra Resume.pdf"
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Resume
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail /> Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-5"
          >
            {[
              { href: 'https://github.com/imamrendra7', Icon: FiGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/imamrendra-76-/', Icon: FiLinkedin, label: 'LinkedIn' },
              { href: 'mailto:amrendrabahu766@gmail.com', Icon: FiMail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <span className="text-gray-600 text-sm ml-2">Find me online</span>
          </motion.div>
        </div>

        {/* Right — Profile */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Outer ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-20 blur-xl animate-spin-slow" />

            {/* Profile circle */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 p-1">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Amrendra"
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating badge — College */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-2xl border border-blue-500/30"
              >
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 text-lg">🎓</span>
                  <div>
                    <p className="text-white text-xs font-bold">NIT Jalandhar</p>
                    <p className="text-gray-500 text-[10px]">B.Tech IT • Final Year</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — Code */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-2xl border border-purple-500/30"
              >
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 text-lg">⚡</span>
                  <div>
                    <p className="text-white text-xs font-bold">Full Stack</p>
                    <p className="text-gray-500 text-[10px]">Developer</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — ML */}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-16 glass-card px-3 py-2 rounded-2xl border border-cyan-500/30"
              >
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 text-lg">🤖</span>
                  <div>
                    <p className="text-white text-xs font-bold">ML</p>
                    <p className="text-gray-500 text-[10px]">Enthusiast</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  );
}
