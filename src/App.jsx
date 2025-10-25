import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import './index.css'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overfow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App
