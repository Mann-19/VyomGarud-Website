import { Shield, Radar, Cpu, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    code: "// 001",
    title: "Tactical Surveillance",
    description: "Advanced ISR capabilities with real-time intelligence gathering and secure data transmission for mission-critical operations."
  },
  {
    icon: Radar,
    code: "// 002",
    title: "Autonomous Navigation",
    description: "AI-powered flight systems with obstacle avoidance, GPS-denied operations, and adaptive mission planning."
  },
  {
    icon: Cpu,
    code: "// 003",
    title: "Modular Platform",
    description: "Configurable payload systems supporting multiple sensor packages, communication relays, and mission-specific equipment."
  },
  {
    icon: Zap,
    code: "// 004",
    title: "Rapid Deployment",
    description: "Quick-launch systems with extended flight time, enabling immediate response and persistent area coverage."
  }
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="relative pb-10 pt-32 px-6 bg-background overflow-hidden">
      {/* Diagonal Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl font-bold font-family-logo text-center mb-6">
            Operational {" "}
            <span className="text-primary">Capabilities</span>
          </h2>
          
          <p className="text-muted-foreground font-family-sans text-xl text-center max-w-2xl mx-auto">
            Military-grade systems engineered for maximum performance and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-1 bg-border p-1">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-card p-10 group transition-all duration-300 relative overflow-hidden border-1 border-transparent hover:border-primary"
            >
              {/* Corner Notch */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="p-4 bg-background border-2 border-border group-hover:border-primary transition-colors">
                    <capability.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="tech-mono text-xs text-muted-foreground bg-background px-3 py-1 border border-border">
                    {capability.code}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground tracking-wider">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {capability.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
