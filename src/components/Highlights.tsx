import { Target } from "lucide-react";

const highlights = [
  {
    code: "# 001",
    text: "Proven reliability in demanding operational environments"
  },
  {
    code: "# 002", 
    text: "Military-grade encryption and secure communication protocols"
  },
  {
    code: "# 003",
    text: "Continuous software updates and technical support"
  }
];

const Highlights = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-full bg-border"></div>
            <Target className="w-12 h-12 text-primary" />
            <div className="h-px w-full bg-border"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-family-logo text-center my-20">
            Why <span className="text-primary">VyomGarud</span>
          </h2>
        </div>

        <div className="space-y-1 bg-border p-1">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="bg-card p-8 group hover:bg-primary/5 transition-all duration-300 relative border-l-4 border-transparent hover:border-primary"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-background border-2 border-  muted-foreground flex items-center justify-center tech-mono text-xs text-foreground font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="flex-1">
                  <span className="tech-mono text-xs font-bold text-primary block mb-2">{highlight.code}</span>
                  <p className="text-lg text-foreground leading-relaxed">
                    {highlight.text}
                  </p>
                </div>
              </div>
              
              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;