"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Section title animation
      gsap.fromTo(
        ".about-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Cards animation
      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".about-cards",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Skills animation
      gsap.fromTo(
        ".skill-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skills-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    },
    { scope: aboutRef },
  )

  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "Singapore Management University",
      period: "2024 - 2028",
      location: "Singapore",
      description: "Year 2 Semester 1",
    },
    {
      degree: "Diploma in Business Information Systems",
      school: "Republic Polytechnic",
      period: "2019 - 2022",
      location: "Singapore",
      description: "Graduated in 2022",
    },
  ]

  const experience = [
    {
      title: "Application Programmer",
      company: "XIOHOO",
      period: "Mar 2021 - Aug 2021",
      location: "Singapore",
      description:
        "For the school's Final Year Project, I developed a Social Newsfeed and FAQ page using the Django framework. I also explored building and deploying a chatbot on Telegram and created a demo chatbot application. Additionally, I supported physical classes by taking attendance and assisting students with their questions."

    },
  
  ]

  const skills = [
    "FastAPI",
    "Flask",
    "Python",
    "HTML/CSS",
    "Javascript",
  ]

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="about-title text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          About Me
        </h2>

        <div className="about-cards grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div className="about-card">
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900 dark:text-white">
                  <GraduationCap className="mr-3 h-6 w-6 text-blue-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                      <Calendar className="mr-1 h-4 w-4" />
                      {edu.period}
                      <MapPin className="ml-3 mr-1 h-4 w-4" />
                      {edu.location}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Experience */}
          <div className="about-card">
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900 dark:text-white">
                  <Briefcase className="mr-3 h-6 w-6 text-purple-600" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{exp.company}</p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                      <Calendar className="mr-1 h-4 w-4" />
                      {exp.period}
                      <MapPin className="ml-3 mr-1 h-4 w-4" />
                      {exp.location}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="skill-item px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
