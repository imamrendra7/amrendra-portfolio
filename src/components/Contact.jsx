import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/imamrendra7',
    icon: FiGithub,
    color: 'hover:text-white hover:border-white/20 hover:bg-white/10',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/imamrendra-76-/',
    icon: FiLinkedin,
    color: 'hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10',
  },
  {
    label: 'Email',
    href: 'mailto:amrendrabahu766@gmail.com',
    icon: FiMail,
    color: 'hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/10',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 20) errs.message = 'Message must be at least 20 characters';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSendError('');
    setLoading(true);

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        'service_hslmmf3',
        'template_fd03z0b',
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        'dOCzkAv1AsLMlGiHI'
      );
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError('Something went wrong. Please try emailing directly at amrendrabahu766@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">07. Contact</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have an opportunity or a project in mind? I'd love to hear from you.
          </p>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm currently open to full-time Software Engineer roles, internships, and freelance projects.
                Whether you're a recruiter, founder, or fellow developer — feel free to reach out!
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {[
                { icon: FiMail, label: 'Email', value: 'amrendrabahu766@gmail.com', href: 'mailto:amrendrabahu766@gmail.com', color: 'blue' },
                { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/imamrendra-76-', href: 'https://www.linkedin.com/in/imamrendra-76-/', color: 'blue' },
                { icon: FiGithub, label: 'GitHub', value: 'github.com/imamrendra7', href: 'https://github.com/imamrendra7', color: 'gray' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card group"
                  whileHover={{ x: 6 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-gray-500 text-sm mb-3">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, icon: Icon, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 ${color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="glass-card p-4 border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-green-400 font-semibold text-sm">Available for Opportunities</p>
                  <p className="text-gray-500 text-xs">Response time: Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-10 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                <motion.button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                  whileHover={{ scale: 1.05 }}
                >
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5" noValidate>
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-gray-400 text-xs font-medium mb-1.5">
                      <FiUser className="inline mr-1" />Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`form-input ${errors.name ? 'border-red-500/50' : ''}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-gray-400 text-xs font-medium mb-1.5">
                      <FiMail className="inline mr-1" />Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`form-input ${errors.email ? 'border-red-500/50' : ''}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-gray-400 text-xs font-medium mb-1.5">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`form-input ${errors.subject ? 'border-red-500/50' : ''}`}
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-gray-400 text-xs font-medium mb-1.5">
                    <FiMessageSquare className="inline mr-1" />Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className={`form-input resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} /> Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Error message */}
                {sendError && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center mt-2"
                  >
                    ⚠️ {sendError}
                  </motion.p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
