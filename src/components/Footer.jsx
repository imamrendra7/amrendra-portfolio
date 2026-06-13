import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { Icon: FiGithub, href: 'https://github.com/imamrendra7', label: 'GitHub' },
  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/imamrendra-76-/', label: 'LinkedIn' },
  { Icon: FiMail, href: 'mailto:amrendrabahu766@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-dark-900/80 backdrop-blur-xl">
      {/* Top gradient line */}
      <div className="glow-line w-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <p className="font-bold text-white">Amrendra</p>
                <p className="text-gray-500 text-xs">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building scalable web applications and solving real-world problems through clean, maintainable code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-600 text-xs">
              📍 Punjab, India<br />
              🎓 NIT Jalandhar, B.Tech IT<br />
              ✉️ amrendrabahu766@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="glow-line w-full mb-6 opacity-30" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            Designed & Developed by{' '}
            <span className="gradient-text font-semibold">Amrendra</span>
            {' '}with{' '}
            <FiHeart className="text-red-500 inline" size={13} />
          </p>
          <div className="flex items-center gap-4 text-gray-700 text-xs font-mono">
            <span>React.js</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Framer Motion</span>
            <span>•</span>
            <span>Vite</span>
          </div>
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Amrendra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
