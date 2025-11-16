import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: '3D Product Showcase',
    description: 'Interactive product viewer with Spline and React, optimized for performance.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Clean data visuals with performant charts and subtle motion.',
    tags: ['React', 'Charts', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Modern Portfolio',
    description: 'Responsive portfolio template with dark mode and smooth animations.',
    tags: ['Vite', 'Tailwind', 'Accessibility'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected work</h2>
          <a href="#contact" className="text-indigo-600 hover:text-indigo-500 font-medium">See more</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ExternalLink size={18} className="opacity-60 group-hover:opacity-100" />
              </div>
              <p className="mt-2 text-sm text-gray-700/80 dark:text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/10">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
