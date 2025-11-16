import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white dark:from-black dark:to-zinc-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/10 dark:border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <div className="text-sm opacity-80">
            <a href="#home" className="hover:text-indigo-600">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
