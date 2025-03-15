"use client"

import { motion } from "framer-motion"
import {
  Scale,
  Shield,
  Users,
  Globe,
  Briefcase,
  Building,
  FileText,
  Landmark,
  Home,
  Coins,
  AlertTriangle,
  BookOpen,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
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
        staggerChildren: 0.1,
      },
    },
  }

  const services = [
    {
      icon: Shield,
      title: "Criminal Law",
      description: "Expert representation in criminal defense, including bail applications, trials, and appeals.",
    },
    {
      icon: Scale,
      title: "Civil Law",
      description: "Comprehensive civil litigation services covering property disputes, contract matters, and more.",
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Sensitive handling of divorce, child custody, maintenance, and domestic relations matters.",
    },
    {
      icon: Globe,
      title: "Cyber Law",
      description:
        "Modern solutions for digital age legal challenges, including cybercrime, online fraud, and digital rights.",
    },
    {
      icon: Briefcase,
      title: "Corporate Law",
      description: "Legal services for businesses including incorporation, compliance, and corporate governance.",
    },
    {
      icon: Building,
      title: "Real Estate Law",
      description: "Assistance with property transactions, title verification, and real estate disputes.",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Drafting and review of legal documents, agreements, and contracts.",
    },
    {
      icon: Landmark,
      title: "Constitutional Law",
      description: "Representation in matters involving fundamental rights and constitutional issues.",
    },
    {
      icon: Home,
      title: "Tenant-Landlord Disputes",
      description: "Legal assistance for both tenants and landlords in rental property disputes.",
    },
    {
      icon: Coins,
      title: "Consumer Protection",
      description: "Representation in consumer disputes and protection of consumer rights.",
    },
    {
      icon: AlertTriangle,
      title: "Accident Claims",
      description: "Assistance with motor vehicle accident claims and personal injury compensation.",
    },
    {
      icon: BookOpen,
      title: "Legal Consultation",
      description: "Professional legal advice and consultation on various legal matters.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">Comprehensive legal solutions tailored to your specific needs</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">What Services We Provide</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer comprehensive legal services, including consultation, representation, and guidance, ensuring
              effective and efficient resolution of legal matters.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary bg-white border border-gray-200">
                  <CardHeader>
                    <service.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Our Legal Process</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              We follow a structured approach to ensure the best possible outcome for your legal matters.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

              {/* Timeline items */}
              {[
                { title: "Initial Consultation", description: "We discuss your legal needs and assess your case." },
                {
                  title: "Case Strategy",
                  description: "We develop a tailored strategy based on your specific situation.",
                },
                { title: "Documentation", description: "We prepare and review all necessary legal documents." },
                { title: "Representation", description: "We represent you in court proceedings or negotiations." },
                { title: "Resolution", description: "We work towards a favorable resolution of your legal matter." },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative z-10 mb-12 flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 px-6 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Case?</h2>
            <p className="mb-8">
              Contact us today for a consultation. Our experienced team is ready to help you with your legal matters.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium inline-block"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
