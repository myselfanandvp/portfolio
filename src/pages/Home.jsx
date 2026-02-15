import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Projects from './Projects'
import Ballpit from '../Animations/Ballpit'
import { useLocation } from 'react-router-dom'
import LightPillar from '../Animations/LightPillar'
import { useSelector } from 'react-redux'
import ElectricBorder from '../Animations/ElectricBorder'

function Home() {
  const location = useLocation();
  const darkMode = useSelector((state) => state.theme.mode)
  
  // 1. Updated Background Colors for Glassmorphism
  const bgGlass = darkMode 
    ? "bg-gray-950/70" // Semi-transparent dark
    : "bg-white/70";   // Semi-transparent light

  const borderGlass = darkMode
    ? "border-gray-700/30"
    : "border-white/40";

  return (
    <div className='flex flex-col min-h-screen relative bg-gray-50 dark:bg-gray-900'>

      <Navbar />

      {/* MAIN AREA */}
      <main className={`relative flex-1 overflow-hidden ${bgGlass} backdrop-blur-md border-t ${borderGlass} text-gray-900 dark:text-gray-100`}>

        {/* Animations Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {location.pathname === "/" ? (
            <div className="w-full h-full">
              <Ballpit
                count={40}
                gravity={0.3}
                friction={1}
                wallBounce={0.95}
                followCursor={false}
                colors={[0x2563eb, 0x7c3aed, 0xffffff]}
              />
            </div>
          ) : (
            <LightPillar
              topColor={darkMode ? "#5227FF" : "#8A2BE2"}
              bottomColor={darkMode ? "#FF9FFC" : "#4CC9F0"}
              intensity={darkMode ? 1 : 0.5}
              rotationSpeed={0.3}
              glowAmount={darkMode ? 0.002 : 0.01}
              pillarWidth={8}
              pillarHeight={0.4}
              noiseIntensity={0.1}
              pillarRotation={180}
              interactive={false}
              mixBlendMode={darkMode ? "screen" : "multiply"}
              quality="high"
            />
          )}
        </div>


        {/* ⭐ Page Content with Glass Cards */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-16">
                
                {/* Hero Section - Glass Container */}
                <section className={`text-center py-20 px-8 rounded-3xl ${bgGlass} ${borderGlass} border backdrop-blur-lg shadow-2xl`}>
                  <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
                    Hi, I'm <span className="text-blue-600 dark:text-blue-400">Anand</span>.
                  </h1>

                  <p className="mt-4 text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
                    A Python Developer passionate about building scalable web applications.
                  </p>

                  <div className="mt-8">
                    <Link
                      className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-300 shadow-lg"
                      to='/projects'
                    >
                      View Projects
                    </Link>
                  </div>
                </section>

               
              </div>
            } />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={
              darkMode ? (
                <ElectricBorder
                  color="#7df9ff"
                  speed={1}
                  chaos={0.12}
                  thickness={2}
                  style={{ borderRadius: 16 }}
                >
                  <div className={`p-6 rounded-2xl ${bgGlass} backdrop-blur-lg`}>
                    <Resume />
                  </div>
                </ElectricBorder>
              ) : (
                <div className={`p-6 rounded-2xl ${bgGlass} ${borderGlass} border backdrop-blur-lg`}>
                  <Resume />
                </div>
              )
            } />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home