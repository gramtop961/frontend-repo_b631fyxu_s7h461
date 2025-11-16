import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/80 dark:from-black/40 dark:via-black/30 dark:to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Building playful, modern web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-gray-700/80 dark:text-white/80 max-w-2xl"
          >
            I craft interactive products that blend performance, accessibility, and a touch of 3D fun.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#projects" className="inline-flex items-center rounded-full bg-indigo-600 text-white px-5 py-2.5 shadow hover:bg-indigo-500">
              View projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-5 py-2.5 hover:bg-black/5 dark:hover:bg-white/10">
              Contact me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
