"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. We'll get back to you as soon as possible.",
          variant: "default",
          className: "bg-green-500 text-white border-green-600",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/handshakeImage.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // backgroundColor: "#1a1a1a",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience. Expertise. Results.</h1>
            <p className="text-xl text-gray-300 mb-8">Your success is our commitment. With years of legal expertise and a track record of delivering exceptional results, we're here to provide the representation you deserve.</p>
            <p className="text-lg text-gray-400 mb-8">Contact us today and take the first step towards resolving your legal matters.</p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-600">
                Hesaraghatta main road, Sai convention hall right side ground floor, Bangalore - 560057
              </p>
              <a
                href="https://maps.google.com/?q=13.05592,77.5076828"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-4 inline-block"
              >
                View on Google Maps
              </a>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Numbers</h3>
              <p className="text-gray-600 mb-2">+91 7892637729</p>
              <p className="text-gray-600">+91 7337681055</p>
              <a
                href="https://wa.me/917892637729"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-4 inline-block"
              >
                Contact on WhatsApp
              </a>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Address</h3>
              <p className="text-gray-600">rakeshadvocateblr@gmail.com</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href="mailto:rakeshadvocateblr@gmail.com" className="text-primary hover:underline">
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rakesh-raki-788539258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg text-white"
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below to get in touch with our legal team. We'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center gap-2 text-green-500"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-white/10" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="bg-white/10" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="bg-white/10" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-white/10"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Working Hours</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium text-gray-900">Monday - Saturday</span>
                  <span className="text-gray-600">10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="text-gray-600 text-sm mt-4 space-y-2">
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V7z"/>
                    </svg>
                    Appointments available during working hours
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Prior appointment recommended for consultation
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V17a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Emergency consultations available on request
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Office Location</h3>
                <div className="space-y-3">
                  <p className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 mr-3 mt-1 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>
                      Hesaraghatta main road,<br />
                      Sai convention hall right side ground floor,<br />
                      Bangalore - 560057
                    </span>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <a href="mailto:info@example.com" className="hover:text-gray-900 transition-colors">
                      info@example.com
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <a href="tel:+919876543210" className="hover:text-gray-900 transition-colors">
                      +91 7892637729,+91 7337681055
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <a href="https://linkedin.com/in/rakesh-advocate" className="hover:text-gray-900 transition-colors">
                      LinkedIn
                    </a>
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Location Map</h3>
                  <div className="aspect-video rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6839977195!2d77.50768279999999!3d13.05592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzIxLjMiTiA3N8KwMzAnMjcuNyJF!5e0!3m2!1sen!2sin!4v1615972529000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
