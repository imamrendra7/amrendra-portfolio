import { motion } from 'framer-motion';
import { FiExternalLink, FiCode, FiStar, FiTarget } from 'react-icons/fi';
import {
  SiLeetcode, SiGeeksforgeeks, SiCodeforces, SiHackerrank, SiGithub
} from 'react-icons/si';

const platforms = [
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    color: '#ffa116',
    description: 'Solving DSA problems daily',
    stats: [
      { label: 'Problems Solved', value: '150+' },
      { label: 'Contest Rating', value: 'Active' },
      { label: 'Streak', value: 'Consistent' },
    ],
    url: 'https://leetcode.com/u/imamrendra/',
    tags: ['Array', 'DP', 'Graph', 'Trees', 'Greedy'],
    gradient: 'from-orange-500/20 to-transparent',
    border: 'border-orange-500/30',
  },
  {
    name: 'GeeksforGeeks',
    icon: SiGeeksforgeeks,
    color: '#2f8d46',
    description: 'Articles, DSA & interview prep',
    stats: [
      { label: 'Problems Solved', value: '100+' },
      { label: 'Institute Rank', value: 'Top 10%' },
      { label: 'Streak', value: 'Active' },
    ],
    url: 'https://www.geeksforgeeks.org/profile/imamrendra',
    tags: ['DSA', 'Interview Prep', 'System Design'],
    gradient: 'from-green-500/20 to-transparent',
    border: 'border-green-500/30',
  },
  {
    name: 'Codeforces',
    icon: SiCodeforces,
    color: '#1f8acb',
    description: 'Competitive programming & contests',
    stats: [
      { label: 'Rating', value: 'Active' },
      { label: 'Contests', value: 'Regular' },
      { label: 'Problems', value: '80+' },
    ],
    url: 'https://codeforces.com/profile/imamrendra',
    tags: ['Competitive', 'CP', 'Algorithms'],
    gradient: 'from-blue-600/20 to-transparent',
    border: 'border-blue-600/30',
  },
  {
    name: 'HackerRank',
    icon: SiHackerrank,
    color: '#2ec866',
    description: 'Skill certifications & badges',
    stats: [
      { label: 'Stars', value: '5★ Java' },
      { label: 'Certifications', value: '3+' },
      { label: 'Problems', value: '60+' },
    ],
    url: 'https://hackerrank.com/amrendra',
    tags: ['Java', 'Python', 'SQL', 'Problem Solving'],
    gradient: 'from-emerald-500/20 to-transparent',
    border: 'border-emerald-500/30',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    color: '#f0f6fc',
    description: 'Open source & project contributions',
    stats: [
      { label: 'Repositories', value: '15+' },
      { label: 'Contributions', value: 'Daily' },
      { label: 'Stars Earned', value: 'Growing' },
    ],
    url: 'https://github.com/imamrendra7',
    tags: ['Open Source', 'Projects', 'Collaboration'],
    gradient: 'from-gray-500/20 to-transparent',
    border: 'border-gray-500/30',
  },
];

const achievements = [
  {
    emoji: '🏆',
    title: 'Data Structures & Algorithms',
    description: '300+ problems solved across platforms (LeetCode, GFG, Codeforces)',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/20',
  },
  {
    emoji: '🎯',
    title: 'Front-End Developer Intern',
    description: 'Selected for internship at Skillbit Technologies from competitive pool',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
  },
  {
    emoji: '🤖',
    title: 'Research Project — HAR WiFi',
    description: 'Ongoing ML research on device-free human activity recognition',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/20',
  },
  {
    emoji: '⭐',
    title: '5★ Java on HackerRank',
    description: 'Certified in Java Problem Solving with top performance',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/20',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-600/5 rounded-full blur-3xl" />
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
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">05. Achievements</p>
          <h2 className="section-title">Coding Profiles & Achievements</h2>
          <p className="section-subtitle">
            Consistent competitive programming and problem-solving across platforms.
          </p>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        {/* Achievement highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`achievement-card glass-card p-5 bg-gradient-to-br ${a.color} border ${a.border}`}
            >
              <div className="text-3xl mb-3">{a.emoji}</div>
              <h4 className="text-white font-bold text-sm mb-1">{a.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`glass-card animated-border p-6 group overflow-hidden relative`}
            >
              {/* Top gradient */}
              <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${platform.gradient} pointer-events-none`} />

              <div className="relative">
                {/* Platform header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${platform.color}20`, border: `1px solid ${platform.color}30` }}
                    >
                      <platform.icon style={{ color: platform.color }} size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{platform.name}</h3>
                      <p className="text-gray-500 text-xs">{platform.description}</p>
                    </div>
                  </div>
                  <motion.a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    aria-label={`Visit ${platform.name}`}
                  >
                    <FiExternalLink size={14} />
                  </motion.a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {platform.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-2 rounded-lg bg-white/3">
                      <div className="text-white font-bold text-sm">{stat.value}</div>
                      <div className="text-gray-600 text-[10px]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {platform.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-[10px] rounded-full border ${platform.border} text-gray-400 bg-white/3`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
