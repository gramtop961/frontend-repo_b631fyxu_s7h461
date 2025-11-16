import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="prose prose-zinc dark:prose-invert max-w-none"
        >
          <h2>About me</h2>
          <p>
            I’m a frontend engineer focused on delightful user experiences. My work blends
            modern design systems, generous white space, and playful motion.
          </p>
          <p>
            I care deeply about performance and accessibility. I ship fast, responsive
            interfaces that feel alive without being distracting.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {[
            'Responsive Design',
            'Accessibility (a11y)',
            'React & TypeScript',
            'Framer Motion',
            'Tailwind CSS',
            '3D with Spline',
          ].map((skill) => (
            <li key={skill} className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-black/40 backdrop-blur">
              <span className="font-medium">{skill}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
