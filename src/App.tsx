import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { KinderScience } from './components/KinderScience'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <About />
        <Projects />
        <KinderScience />
      </main>
      <footer className="footer">
        <span className="dot" aria-hidden="true" />
        <span>status: deployed · via GitHub Actions</span>
      </footer>
    </div>
  )
}