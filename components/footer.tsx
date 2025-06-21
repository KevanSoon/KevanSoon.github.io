"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://github.com/KevanSoon">
             <Button variant="ghost" size="icon" className="hover:text-blue-400 transition-colors">
              <Github className="h-5 w-5" />
            </Button>
            </a>
           <a href="https://www.linkedin.com/in/kevansoon/">
            <Button variant="ghost" size="icon" className="hover:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Button>
           </a>
           <a href="mailto:kevansoon@gmail.com">
              <Button variant="ghost" size="icon" className="hover:text-blue-400 transition-colors">
              <Mail className="h-5 w-5" />
            </Button>
           </a>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-gray-300 mb-2">Let's connect!</p>
            <p className="text-gray-400">kevansoon@gmail.com</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="mx-2 h-4 w-4 text-red-500" /> by Kevan Soon
            </p>
            <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
