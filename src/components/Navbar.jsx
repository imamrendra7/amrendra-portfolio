import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Contact', href: '#contact' },
];

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full border transition-colors duration-400 flex items-center px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #1e3a8a, #4c1d95)'
          : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
        borderColor: isDark ? 'rgba(59,130,246,0.3)' : 'rgba(251,191,36,0.5)',
      }}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Track icons */}
      <FiMoon
        size={10}
        className="absolute left-1.5 text-blue-300 opacity-80"
      />
      <FiSun
        size={10}
        className="absolute right-1.5 text-yellow-100 opacity-80"
      />

      {/* Sliding thumb */}
      <motion.div
        className="relative z-10 w-5 h-5 rounded-full shadow-md flex items-center justify-center"
        style={{
          background: isDark ? '#60a5fa' : '#fff',
        }}
        animate={{ x: isDark ? 0 : 28 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark
          ? <FiMoon size={11} className="text-blue-900" />
          : <FiSun size={11} className="text-yellow-500" />
        }
      </motion.div>
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navBg = scrolled
    ? isDark
      ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/5 shadow-lg'
      : 'bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-lg'
    : 'bg-transparent';

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-3 no-underline"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-glow-blue">
              A
            </div>
            <span className="font-bold text-lg gradient-text">Amrendra</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side — Theme toggle + Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <motion.a
              href={`${import.meta.env.BASE_URL}Amrendra_Resume.pdf`}
              download="Amrendra Resume.pdf"
              className="btn-primary text-sm py-2 px-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download CV</span>
            </motion.a>
          </div>

          {/* Mobile — Theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-gray-300 hover:text-white transition-colors p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={`fixed inset-0 z-40 flex flex-col pt-20 px-6 ${
              isDark
                ? 'bg-dark-900/95 backdrop-blur-xl'
                : 'bg-white/95 backdrop-blur-xl'
            }`}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-2xl font-semibold transition-colors ${
                    isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={`${import.meta.env.BASE_URL}Amrendra_Resume.pdf`}
                download="Amrendra Resume.pdf"
                className="btn-primary text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>Download CV</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
