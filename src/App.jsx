import About from './sections/About'
import BlogCallout from './sections/BlogCallout'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Metrics from './sections/Metrics'
import PerspectiveGrid from './sections/PerspectiveGrid'

function App() {
  return (
    <div className="min-h-screen bg-[#dbeafe] text-black">
      <Header />
      <main>
        <Hero />
        <PerspectiveGrid />
        <About />
        <Metrics />
        <BlogCallout />
      </main>
      <Footer />
    </div>
  )
}

export default App
