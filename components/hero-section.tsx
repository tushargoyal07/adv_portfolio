export function HeroSection() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2017.21.07_5d63039b.jpg-Vq1BOMj4MRX2No9eyvBeNN2F7aey5y.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-white space-y-4 container">
        <h1 className="text-4xl md:text-6xl font-bold">Rakesh Associates</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">Committed to Justice, Dedicated to Results</p>
      </div>
    </div>
  )
}

