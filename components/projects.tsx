"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Section title animation
      gsap.fromTo(
        ".projects-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Project cards animation
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Hover animations
      const cards = document.querySelectorAll(".project-card")
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" })
        })
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    },
    { scope: projectsRef },
  )

  const projects = [
    {
      title: "Churp",
      description:
        "Churp is a unified feedback platform that empowers gardeners to submit concerns, track progress, and engage with outcomes, while enabling community managers to monitor issues, respond publicly, and build community trust, creating a transparent feedback loop with shared accountability.",
      image: "/churp.jpg",
      technologies: ["Vercel", "Next.js", "Supabase", "Twilio"],
      liveUrl: "https://youtu.be/c3tNx4gLfJg",
      githubUrl: "#",
      date: "2025",
    },
    {
      title: "AgeWellLah.AI",
      description:
        "AgeWellLah.AI enhances value-based healthcare using AI to track and improve patient outcomes across various care settings. Our AI-powered chatbot leverages InterSystems IRIS for seamless data management, ensuring secure, real-time access to patient records across healthcare providers. Additionally, it utilizes the OpenAI API to generate context-aware responses, offering personalized support and guidance to patients and caregivers. This combination enables efficient care coordination, timely interventions, and improved health outcomes.",
      image: "/agewelllah.png",
      technologies: ["InterSystems IRIS", "OpenAI", "Flask"],
      liveUrl: "https://www.youtube.com/watch?v=AEpWfV8tT9A",
      githubUrl: "https://github.com/ZulfaqarHafez/AgeWellLah.AI",
      date: "2025",
    },
    {
      title: "♻️GreenMerlion",
      description:
        "The Waste Classification System leverages image processing to accurately identify whether waste items are recyclable, reducing bin contamination and supporting Singapore’s Zero Waste Masterplan goal of a 30% domestic recycling rate by 2030. Complemented by an AI-powered assistant that educates users on proper disposal methods, the system fosters eco-conscious habits aligned with the Singapore Green Plan. To drive engagement and long-term behavior change, a gamification element rewards users for correct recycling practices, promoting widespread participation and building a responsible waste management community.",
      image: "/greenmerlion.ai.png",
      technologies: ["Flask", "OpenCV", "ngrok", "PostgreSQL","Google Colab","Llama 2","Yolov5"],
      liveUrl: "https://www.youtube.com/watch?v=qe4SybSyIvM",
      githubUrl: "https://github.com/guanghaokwa/AI-HFC-Recycle-Management-System",
      date: "2025",
    },
    {
      title: "Room Funiture Budget Calculator",
      description:
        "This project, developed for the AISG Student Hackathon 2021, automates the budgeting process for room furniture based on specified themes. It streamlines the workflow by extracting furniture options, calculating costs, and organizing information to match the desired room aesthetics. The solution demonstrates my ability to integrate automation tools and design efficient systems for complex tasks.",
      image: "/room_funiture.png",
      technologies: ["PeekingDuck", "TagUI RPA", "Django"],
      liveUrl: "https://www.youtube.com/watch?v=hudhGULrDUU",
      githubUrl: "https://github.com/KevanSoon/AISG-Hackathon-Room-Funiture-Budget-Calculator",
      date: "2021",
    },
  ]

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <h2 className="projects-title text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          My Projects
        </h2>

        <div className="projects-grid grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    <Calendar className="mr-1 h-3 w-3" />
                    {project.date}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* <div className="flex space-x-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
