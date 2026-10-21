import { Projects } from './components/Projects'
import { Header } from './components/Header'
import { KinderScience } from './components/KinderScience'
import { Composition } from './components/Composition'
import { Sources } from './components/Sources'
import { ScrollTop } from './components/ScrollTop'
import { About } from './components/About'
import { Projects } from './components/Projects'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="science"><KinderScience /></div>
        <Composition />
        <Sources />
      </main>
      <footer className="footer">
        <span className="dot" aria-hidden="true" />
        <span>status: deployed · via GitHub Actions · © 2026</span>
      </footer>
      <ScrollTop />
    </div>
  )
}