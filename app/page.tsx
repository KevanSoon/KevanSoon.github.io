"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { useGSAP } from "@gsap/react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Hackathons from "@/components/hackathons"
import Footer from "@/components/footer"

gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP)

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Smooth scroll reveal animations
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".fade-in",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Parallax effect for background elements
      gsap.to(".parallax", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Hackathons />
      </main>
      <Footer />
    </div>
  )
}
