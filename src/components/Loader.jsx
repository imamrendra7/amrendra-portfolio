import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-8">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-glow-blue">
              A
            </div>
            <div className="absolute -inset-2 rounded-2xl border border-blue-500/30 animate-ping" />
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>
            <motion.p
              className="text-gray-500 text-sm font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Loading portfolio...
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-sm font-medium tracking-wide mt-2"
            >
              Welcome to Amrendra Portfolio
            </motion.p>
          </motion.div>


        </div>
      </motion.div>
    </AnimatePresence>
  );
}
