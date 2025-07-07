"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Briefcase, ArrowRight, Check, Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HiringBanner } from "@/components/ui/hiring-banner"
import { useTheme } from "next-themes"
import { Toaster, toast } from "sonner"

export default function CareersPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const jobOpenings = [
        {
      title: "UI/UX & Front-End Intern (Founder’s Office)",
      type: "Internship",
      location: "On-Site - Mumbai",
      description: "Join our founding team to design and build clean, user-friendly interfaces for our e-commerce platform. Work across design and front-end development with exposure to product, marketing, and growth.",
      responsibilities: [
        "Design wireframes & prototypes (Figma/Adobe XD)",
        "Build responsive front-end pages (HTML/CSS/JS)",
        "Improve Shopify storefront UX",
        "Conduct user research and testing",
        "Assist with product and marketing tasks"
      ],
      requirements: [
        "Strong eye for UI/UX and attention to detail",
        "Knowledge of HTML, CSS, JavaScript",
        "Familiarity with Figma or similar tools",
        "Interest in e-commerce and digital products",
        "Bonus: Shopify or Liquid experience"
      ],
      preferredSkills: [
        "Work directly with the founder",
        "Ship real features seen by users",
        "Creative freedom and fast feedback",
        "Learn product, design & marketing hands-on"
      ],
      descriptionLink: "https://proud-drizzle-19a.notion.site/Front-End-UI-UX-Intern-Founder-s-Office-Mumbai-22985312744d80f2a325dcb5443a17dc?pvs=74",  
      applyLink: "https://airtable.com/appQjmlHtsUUtBhuH/pagk76zOt1xxJjXj9/form"   
    },
      {
      title: "E-Commerce & Digital Marketing Intern (Founder’s Office)",
      type: "Internship",
      location: "On-Site - Mumbai",
      description: "Work directly with the founding team to support e-commerce operations and digital marketing initiatives across marketplaces and social platforms.",
      responsibilities: [
        "Assist in managing and optimizing e-commerce platforms (Shopify, marketplaces, etc.)",
        "Support content planning and scheduling across social media platforms",
        "Help execute digital marketing campaigns (organic and paid)",
        "Track marketing metrics and assist in reporting",
        "Support email marketing tasks including setup and segmentation",
        "Conduct market research and competitor benchmarking",
        "Assist in website updates and creation of marketing content"
      ],
      requirements: [
        "Pursuing a degree in Marketing, Business, Communications, or related field",
        "Strong interest in e-commerce and digital marketing",
        "Good written and verbal communication skills",
        "Familiarity with social media platforms and content formats",
        "Basic understanding of SEO, analytics, and marketing funnels",
        "Detail-oriented and able to manage multiple tasks"
      ],
      preferredSkills: [
        "Experience with Shopify or WooCommerce",
        "Exposure to email marketing tools (e.g., Mailchimp, Klaviyo)",
        "Basic graphic design skills (Canva, Figma, Photoshop)",
        "Familiarity with Google Analytics or Meta Ads Manager"
      ],
      descriptionLink: "https://proud-drizzle-19a.notion.site/E-Commerce-Digital-Marketing-Intern-Founder-s-Office-21585312744d80df8fd6f86543eefbc2?pvs=73",  
      applyLink: "https://airtable.com/appQjmlHtsUUtBhuH/pagpxLLzxVf39yW7D/form"   
    }

  ]

  const handleJobClick = (type: 'description' | 'apply', jobTitle: string) => {
    // Store in session storage
    const key = `job_${type}_${jobTitle.toLowerCase().replace(/\s+/g, '_')}`
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, 'true')
      toast(`Thank you for your interest in the ${jobTitle} position!`, {
        duration: 4000,
        position: 'bottom-right',
        style: {
          background: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
        },
      })
    }
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
          },
        }}
      />
      <HiringBanner />
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              *
            </div>
            <span>Omnipresence</span>
          </div>
          <nav className="hidden lg:flex gap-8">
            <a
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </a>
            <a
              href="/#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About Us
            </a>
            <a
              href="/#team"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Team
            </a>
            <a
              href="/#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="/careers"
              className="inline-flex items-center justify-center rounded-full border border-red-500 px-4 py-1.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-white"
            >
              <Briefcase className="mr-1.5 size-4" />
              We're Hiring
            </a>
          </nav>
          <div className="hidden lg:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <a
              href="https://cal.com/rishit-saraf/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Request a Demo
            </a>
            <Button className="rounded-full">
              <a href="https://airtable.com/apprMuGq7H2PLZLaM/pagteuliPy0CSMm0D/form" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                Join The Waitlist
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4 lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <a href="/" className="py-2 text-sm font-medium">
                Home
              </a>
              <a href="/#about" className="py-2 text-sm font-medium">
                About Us
              </a>
              <a href="/#team" className="py-2 text-sm font-medium">
                Team
              </a>
              <a href="/#features" className="py-2 text-sm font-medium">
                Features
              </a>
              <a
                href="/careers"
                className="inline-flex items-center justify-center rounded-full border border-red-500 px-4 py-1.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-white"
              >
                <Briefcase className="mr-1.5 size-4" />
                We're Hiring
              </a>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <a href="https://cal.com/rishit-saraf/15min" target="_blank" rel="noopener noreferrer" className="py-2 text-sm font-medium">
                  Request a Demo
                </a>
                <Button className="rounded-full">
                  <a href="https://airtable.com/apprMuGq7H2PLZLaM/pagteuliPy0CSMm0D/form" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    Join The Waitlist
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge variant="secondary">
                Careers
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Join Our Team
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're looking for talented individuals to help us build the future of B2B commerce.
              </p>
            </motion.div>

            {/* Job Listings */}
            <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
              {jobOpenings.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline">{job.type}</Badge>
                        <Badge variant="outline">{job.location}</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="space-y-2 mb-6">
                        {job.requirements.map((req, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <Check className="mt-1 size-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-3 mt-auto">
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => handleJobClick('description', job.title)}
                        >
                          <a 
                            href={job.descriptionLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full"
                          >
                            View Job Description
                          </a>
                        </Button>
                        <Button 
                          className="w-full"
                          onClick={() => handleJobClick('apply', job.title)}
                        >
                          <a 
                            href={job.applyLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full"
                          >
                            Apply Now
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  *
                </div>
                <span>Omnipresence</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Streamline your operations. Boost your bottom line. Get started with Omnipresence today.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/#about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/#team"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://www.freeprivacypolicy.com/live/359acacd-a8c1-42bc-9345-17ec85c4473f" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.freeprivacypolicy.com/live/2165b82f-54af-43b7-9122-19fce53a5e9d" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Omnipresence. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://www.freeprivacypolicy.com/live/359acacd-a8c1-42bc-9345-17ec85c4473f" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="https://www.freeprivacypolicy.com/live/2165b82f-54af-43b7-9122-19fce53a5e9d" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="https://www.freeprivacypolicy.com/live/359acacd-a8c1-42bc-9345-17ec85c4473f" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 