import { Scale, Shield, Users, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PracticeAreas() {
  const areas = [
    {
      icon: Shield,
      title: "Criminal Law",
      description: "Expert representation in criminal defense and prosecution matters.",
    },
    {
      icon: Scale,
      title: "Civil Law",
      description: "Comprehensive civil litigation and dispute resolution services.",
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Sensitive handling of family matters and domestic relations.",
    },
    {
      icon: Globe,
      title: "Cyber Law",
      description: "Modern solutions for digital age legal challenges.",
    },
  ]

  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Practice Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <Card key={area.title}>
              <CardHeader>
                <area.icon className="h-8 w-8 mb-2" />
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

