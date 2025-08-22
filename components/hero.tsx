"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(TextPlugin, useGSAP)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const typedTextRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      // Profile image animation
      tl.fromTo(
        ".profile-image",
        { scale: 0, rotation: 180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      )

      // Name animation
      tl.fromTo(".hero-name", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5")

      // Typing animation
      tl.to(typedTextRef.current, {
        duration: 2,
        text: "Software Engineer",
        ease: "none",
      })
        .to(typedTextRef.current, {
          duration: 0.5,
          text: "",
          ease: "none",
          delay: 1,
        })
        .to(typedTextRef.current, {
          duration: 2,
          text: "Undergraduate in Software Engineering",
          ease: "none",
        })

      // Social links animation
      tl.fromTo(".social-links", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=1")

      // Floating animation for profile image
      gsap.to(".profile-image", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    },
    { scope: heroRef },
  )

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 parallax">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="profile-image relative w-48 h-48 mx-auto mb-6">
              <Image
                src="/user_intro.jpg"
                alt="Profile"
                width={170}
                height={100}
                className="rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
              />
            
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="hero-name text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">Kevan Soon</h1>
            <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 h-12">
              I am a <span ref={typedTextRef} className="text-blue-600 dark:text-blue-400 font-semibold"></span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
           I am a Year 2 Software Engineering Undergraduate at Singapore Management University. 
           I love joining hackathons to build prototypes for fun!
          </p>

          {/* Social Links */}
          
          <div className="flex justify-center space-x-6 mb-8">
          
            <a href="https://github.com/KevanSoon">
              <Button variant="outline" size="icon" className="social-links hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/kevansoon/">
               <Button variant="outline" size="icon" className="social-links hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </Button>
            </a>
           <a href="mailto:kevansoon@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="social-links hover:scale-110 transition-transform"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* CTA Button */}
          {/* <Button className="social-links bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button> */}
        </div>
      </div>
    </section>
  )
}
