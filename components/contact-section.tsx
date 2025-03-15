import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-primary shrink-0" />
            <p className="text-muted-foreground">
              Hesrgatta main road, Sai convention hall right side ground floor, Bangalore - 560022
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-primary shrink-0" />
            <div>
              <p className="text-muted-foreground">+91 7892637729</p>
              <p className="text-muted-foreground">+91 7337681055</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-primary shrink-0" />
            <p className="text-muted-foreground">rakeshadvocateblr@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

