import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ASCII_BANNER = `
    _    __  __ ____  _____ _   _ ____  ____    _    
   / \\  |  \\/  |  _ \\| ____| \\ | |  _ \\|  _ \\  / \\   
  / _ \\ | |\\/| | |_) |  _| |  \\| | | | | |_) |/ _ \\  
 / ___ \\| |  | |  _ <| |___| |\\  | |_| |  _ </ ___ \\ 
/_/   \\_\\_|  |_|_| \\_\\_____|_| \\_|____/|_| \\_/_/   \\_\\

 ____      _    _   _  _   _  ____      _    _      ___ 
| __ )    / \\  | | | || | | || __ )    / \\  | |    |_ _|
|  _ \\   / _ \\ | |_| || | | ||  _ \\   / _ \\ | |     | | 
| |_) | / ___ \\|  _  || |_| || |_) | / ___ \\| |___  | | 
|____/ /_/   \\_\\|_| |_| \\___/ |____/ /_/   \\_\\|_____|___|

Type 'help' to see available commands.
`;

const commands = {
  help: {
    output: `
Available Commands:
  about      → Learn about Amrendra
  skills     → View technical skills
  projects   → See featured projects
  experience → Work experience
  education  → Academic background
  contact    → Get in touch
  github     → Visit GitHub profile
  resume     → Download resume
  clear      → Clear terminal
  whoami     → Who is this guy?
    `,
  },
  about: {
    output: `
+---------------------------------------------------------+
|  Amrendra                                               |
|  Software Engineer | Full Stack Developer               |
|  B.Tech IT, NIT Jalandhar (2023-2027)                   |
+---------------------------------------------------------+
|  Passionate about building scalable web applications,   |
|  solving complex problems, and exploring ML/AI.         |
|  Currently seeking SDE roles at top product companies.  |
+---------------------------------------------------------+
    `,
  },
  whoami: {
    output: `
  amrendra@nit-jalandhar:~$ whoami
  
  > Name      : Amrendra
  > Role      : Software Engineer & Full Stack Developer
  > College   : NIT Jalandhar (B.Tech IT, Final Year)
  > Location  : Punjab, India
  > Status    : Available for Opportunities ✓
  > Passion   : Code | Build | Learn | Repeat
    `,
  },
  skills: {
    output: `
Technical Skills:
  
  Languages    → Java, C++, JavaScript, Python
  Frontend     → React.js, HTML5, CSS3, Tailwind CSS
  Backend      → Spring Boot, Node.js
  Databases    → MySQL, MongoDB
  ML/Data      → Scikit-Learn, Pandas, NumPy, Matplotlib
  Tools        → Git, GitHub, VS Code, Postman
  Concepts     → DSA, OOP, REST APIs, Agile, System Design
    `,
  },
  projects: {
    output: `
Featured Projects:
  
  [1] Company Employee Management System
      → React.js, Tailwind CSS, localStorage
      → Role-based auth, full CRUD, optimized state
      
  [2] IPL Win Predictor
      → Python, Scikit-Learn, Pandas, NumPy
      → 5000+ records, ~78% accuracy (Random Forest)
      
  [3] Human Activity Recognition via WiFi [RESEARCH]
      → Python, ML, Signal Processing
      → Device-free HAR using WiFi CSI signals
    `,
  },
  experience: {
    output: `
Work Experience:
  
  Front-End Developer Intern
  ╰─ Skillbit Technologies (Remote)
     June 2025 – August 2025
     
  Responsibilities:
  • Built responsive web apps with HTML, CSS, JavaScript
  • Integrated REST APIs for real-time data display
  • Created reusable, optimized UI components
  • Worked in Agile environment
    `,
  },
  education: {
    output: `
Education:
  
  🎓 B.Tech in Information Technology
     National Institute of Technology, Jalandhar
     2023 – 2027 (Expected)
     
  Key Subjects:
  • Data Structures & Algorithms
  • Database Management Systems
  • Operating Systems
  • Computer Networks
  • Machine Learning
  • Web Technologies
    `,
  },
  contact: {
    output: `
Get in Touch:
  
  📧 Email    → amrendrabahu766@gmail.com
  🔗 LinkedIn → linkedin.com/in/imamrendra-76-
  🐙 GitHub   → github.com/imamrendra7
  
  I'm open to:
  • Full-time SDE roles
  • Internship opportunities
  • Freelance projects
  • Open source collaboration
    `,
  },
  github: {
    output: 'Opening GitHub... → https://github.com/imamrendra7',
    action: () => window.open('https://github.com/imamrendra7', '_blank'),
  },
  resume: {
    output: 'Initiating resume download...',
    action: () => {
      const a = document.createElement('a');
      a.href = '/Amrendra_Resume.pdf';
      a.download = 'Amrendra_Resume.pdf';
      a.click();
    },
  },
  clear: { clear: true },
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'system', text: ASCII_BANNER },
    { type: 'info', text: "👋 Welcome to Amrendra's Terminal Portfolio!" },
    { type: 'info', text: "Type 'help' to see all available commands." },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', text: `amrendra@portfolio:~$ ${cmd}` }];
    setCmdHistory(prev => [cmd, ...prev]);
    setHistIdx(-1);

    if (commands[trimmed]) {
      const c = commands[trimmed];
      if (c.clear) {
        setHistory([{ type: 'system', text: ASCII_BANNER }]);
        setInput('');
        return;
      }
      if (c.action) c.action();
      setHistory([...newHistory, { type: 'output', text: c.output }]);
    } else {
      setHistory([...newHistory, {
        type: 'error',
        text: `command not found: ${trimmed}\nTry 'help' to see available commands.`,
      }]);
    }
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIdx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(newIdx);
      setInput(cmdHistory[newIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIdx = Math.max(histIdx - 1, -1);
      setHistIdx(newIdx);
      setInput(newIdx === -1 ? '' : cmdHistory[newIdx]);
    }
  };

  return (
    <section id="terminal" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/3 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">06. Terminal Mode</p>
          <h2 className="section-title">Developer Terminal</h2>
          <p className="section-subtitle">
            Explore the portfolio like a developer. Type commands to navigate.
          </p>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        {/* Terminal */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="terminal"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal header */}
          <div className="terminal-header">
            <div className="terminal-dot" style={{ background: '#ff5f57' }} />
            <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
            <div className="terminal-dot" style={{ background: '#28ca41' }} />
            <span className="ml-4 text-gray-600 text-xs font-mono">amrendra@portfolio:~</span>
            <span className="ml-auto text-gray-700 text-xs font-mono">bash</span>
          </div>

          {/* Terminal body */}
          <div className="terminal-body" ref={bodyRef}>
            {history.map((item, i) => (
              <div
                key={i}
                className={`terminal-line mb-1 whitespace-pre-wrap ${
                  item.type === 'input' ? 'terminal-prompt' :
                  item.type === 'error' ? 'text-red-400' :
                  item.type === 'info' ? 'text-cyan-400' :
                  item.type === 'system' ? 'text-blue-400 text-xs' :
                  'terminal-output'
                }`}
              >
                {item.text}
              </div>
            ))}

            {/* Input line */}
            <div className="terminal-input-line">
              <span className="terminal-prompt text-sm">amrendra@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                placeholder="type a command..."
                aria-label="Terminal input"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </motion.div>

        {/* Quick commands */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-2 justify-center"
        >
          <span className="text-gray-600 text-sm self-center">Quick commands:</span>
          {['help', 'about', 'skills', 'projects', 'contact'].map(cmd => (
            <button
              key={cmd}
              onClick={() => runCommand(cmd)}
              className="px-3 py-1 text-xs font-mono rounded-lg border border-blue-500/20 bg-blue-500/5 text-blue-400 hover:bg-blue-500/15 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
