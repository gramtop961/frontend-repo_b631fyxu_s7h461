import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    setStatus('Sending...')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight">Let’s work together</h2>
        <p className="mt-2 text-gray-700/80 dark:text-white/80">Tell me about your project and timelines.</p>

        <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
          <input name="name" required placeholder="Your name" className="sm:col-span-1 px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur outline-none focus:ring-2 ring-indigo-500" />
          <input name="email" type="email" required placeholder="Email" className="sm:col-span-1 px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur outline-none focus:ring-2 ring-indigo-500" />
          <textarea name="message" required rows="5" placeholder="Project details" className="sm:col-span-2 px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur outline-none focus:ring-2 ring-indigo-500" />
          <div className="sm:col-span-2 flex items-center gap-4">
            <button className="inline-flex items-center rounded-full bg-indigo-600 text-white px-5 py-2.5 shadow hover:bg-indigo-500">Send message</button>
            <span className="text-sm text-gray-600 dark:text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
