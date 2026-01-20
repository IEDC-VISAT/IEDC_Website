import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import StaggeredMenu from './components/StaggeredMenu'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// import Hyperspeed from './components/Hyperspeed' // Removed

import PrismaticBurst from './components/PrismaticBurst'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Team from './pages/Team'
import Contact from './pages/Contact'

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Gallery', ariaLabel: 'View gallery', link: '/gallery' },
    { label: 'Events', ariaLabel: 'View events', link: '/events' },
    { label: 'Team', ariaLabel: 'Meet the team', link: '/team' },
    { label: 'Contact', ariaLabel: 'Contact us', link: '/contact' }
  ]

  const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/iedc-visat/posts/?feedView=all' },
    { label: 'Instagram', link: 'https://www.instagram.com/iedc_visat/' },
  ]

  return (
    <>
      <LoadingScreen onLoadComplete={() => setIsLoading(false)} />

      {/* Main App Content */}
      <div className={`min-h-screen bg-dark font-sans antialiased transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>

        {/* Global Background */}
        <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
          <PrismaticBurst
            animationType="rotate3d"
            intensity={2}
            speed={0.5}
            distort={0}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={0}
            mixBlendMode="lighten"
            colors={['#00CFFF', '#00f0ff', '#ffffff']}
            color0=""
            color1=""
            color2=""
          />
        </div>

        {/* Staggered Menu Navigation */}
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#0f1623', '#0A0F1C']}
          logoUrl="/logo.png"
          accentColor="#00CFFF"
          isFixed={true}
        />

        <div className="relative z-10">
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/gallery"
                element={
                  <PageWrapper>
                    <Gallery />
                  </PageWrapper>
                }
              />
              <Route
                path="/events"
                element={
                  <PageWrapper>
                    <Events />
                  </PageWrapper>
                }
              />
              <Route
                path="/team"
                element={
                  <PageWrapper>
                    <Team />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
