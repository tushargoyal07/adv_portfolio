"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Scale, Shield, Users, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2017.21.07_5d63039b.jpg-Vq1BOMj4MRX2No9eyvBeNN2F7aey5y.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white space-y-6 container px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Rakesh Associates
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Committed to Justice, Dedicated to Results
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Consult Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="text-center" variants={fadeIn}>
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600">Cases Handled</p>
            </motion.div>
            <motion.div className="text-center" variants={fadeIn}>
              <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>
            <motion.div className="text-center" variants={fadeIn}>
              <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Our Practice Areas</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We provide comprehensive legal services across various domains to meet your legal needs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { icon: Shield, title: "Criminal Law" },
              { icon: Scale, title: "Civil Law" },
              { icon: Users, title: "Family Law" },
              { icon: Globe, title: "Cyber Law" },
            ].map((area, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-col items-center">
                    <area.icon className="h-12 w-12 text-primary mb-2" />
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Link
                      href="/services"
                      className="text-primary flex items-center justify-center gap-1 hover:underline"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">About Rakesh Associates</h2>
              <p className="text-gray-600 mb-4">
                With expertise in Criminal Law, Civil Law, Family Law, and Cyber Law, we provide comprehensive legal
                services to our clients. Our commitment to excellence and dedication to justice sets us apart.
              </p>
              <p className="text-gray-600 mb-6">
                We have successfully handled over 500 cases, ensuring our clients receive the best legal representation
                possible.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="font-semibold text-primary">BA.LLB</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="font-semibold text-primary">DCL</span>
                </div>
              </div>
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2017.21.08_11f163de.jpg-nL2RzI3GWkGCErAyTHHSDjHA6Xyjc6.jpeg')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#000",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Need Legal Assistance?</h2>
            <p className="mb-8">
              Contact us today for a consultation. Our experienced team is ready to help you with your legal matters.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Contact Us Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
