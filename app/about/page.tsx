"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300">
              Learn more about Rakesh Associates and our commitment to legal excellence
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
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
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Rakesh Associates is a leading law firm based in Bangalore, specializing in various areas of law
                including Criminal, Civil, Family, and Cyber Law. With a track record of over 500 successfully handled
                cases, we have established ourselves as a trusted name in the legal community.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Advocate Rakesh, holds a BA.LLB degree and a Doctorate in Cyber Law (DCL), bringing
                extensive knowledge and expertise to every case we handle.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="font-semibold">BA.LLB</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="font-semibold">DCL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Our Mission & Vision</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We are committed to providing exceptional legal services with integrity and dedication.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 gap-y-8">
            <motion.div
              className="bg-white p-6 md:p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide accessible, high-quality legal services that address our clients' needs with integrity,
                professionalism, and dedication. We strive to achieve the best possible outcomes while maintaining the
                highest ethical standards.
              </p>
              <ul className="space-y-3">
                {[
                  "Client-centered approach",
                  "Ethical representation",
                  "Affordable legal solutions",
                  "Commitment to justice",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 md:p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be recognized as a leading law firm known for excellence, innovation, and unwavering commitment to
                our clients' success. We aim to make quality legal services accessible to all while contributing to the
                advancement of justice in society.
              </p>
              <ul className="space-y-3">
                {["Legal excellence", "Innovative solutions", "Community impact", "Continuous improvement"].map(
                  (item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600">Cases Handled</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="mb-8">
              Contact us today for a consultation. Our experienced team is ready to help you with your legal matters.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
