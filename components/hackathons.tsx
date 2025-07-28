"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { Trophy, Calendar, MapPin, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Hackathons() {
  const hackathonsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Section title animation
      gsap.fromTo(
        ".hackathons-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".hackathons-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Achievement cards animation
      gsap.fromTo(
        ".hackathon-card",
        { opacity: 0, scale: 0.8, rotationX: 15 },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".hackathons-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Trophy icon animation
      gsap.to(".trophy-icon", {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "none",
        scrollTrigger: {
          trigger: ".hackathons-grid",
          start: "top 80%",
          toggleActions: "play pause resume pause",
        },
      })
    },
    { scope: hackathonsRef },
  )

  const hackathons = [
    {
      title: "Community Hackathon 2025",
      event: "Open Government Products & People's Association",
      description:
        "In Progress!",
      image: "/comm_hack.jpg",
      date: "June 2025",
      location: "Singapore",
      teamSize: "5 members",
      technologies: ["React", "Python", "OpenAI API", "Firebase"],
    },
    {
      title: "SMU Hack For Cities 2025",
      event: "SMU Smart City Society",
      description:
        "Developed a web platform connecting volunteers with local non-profit organizations. The solution streamlined volunteer management and increased community engagement.",
      image: "/finalist_HFC.png",
      date: "January 2025",
      location: "Singapore",
      teamSize: "4 members",
      prize: "Finalist",
      technologies: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Google for Startups Cloud Hackathon Singapore",
      event: "Google",
      description:
        "Created an interactive visualization tool for tracking space debris and predicting collision risks. Our solution helps space agencies monitor orbital safety.",
      image: "/google_hackathon.png",
      date: "May 2022",
      location: "Singapore",
      teamSize: "3 members",
      prize: "Top 20",
      technologies: ["Three.js", "React", "NASA APIs", "D3.js"],
    },
    {
      title: "AISG Student Hackathon",
      event: "AI Singapore",
      description:
        "Built a machine learning model to predict student performance and recommend personalized study plans. Implemented using Python and scikit-learn.",
      image: "/aisg_hackathon.png",
      date: "December 2021",
      location: "Singapore",
      teamSize: "1 member",
      prize: "Top 3 Winners",
      technologies: ["Python", "scikit-learn", "Flask", "React"],
    },
  ]

  return (
    <section id="hackathons" ref={hackathonsRef} className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="trophy-icon inline-block mb-4">
            <Trophy className="h-12 w-12 text-yellow-500" />
          </div>
          <h2 className="hackathons-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Hackathons</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Competitive coding events where I've collaborated with teams to build innovative solutions
          </p>
        </div>

        <div className="hackathons-grid grid md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <Card
              key={index}
              className="hackathon-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={hackathon.image || "/placeholder.svg"}
                  alt={hackathon.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
               {hackathon.prize && typeof hackathon.prize === 'string' && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-yellow-900 font-semibold">
                      <Trophy className="mr-1 h-3 w-3" />
                      {hackathon.prize}
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{hackathon.title}</CardTitle>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{hackathon.event}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{hackathon.description}</p> */}

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {hackathon.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {hackathon.location}
                  </div>
                  <div className="flex items-center col-span-2">
                    <Users className="mr-2 h-4 w-4" />
                    Team of {hackathon.teamSize}
                  </div>
                </div>

                {/* <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
