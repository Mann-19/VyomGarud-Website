import { Card } from "@/components/ui/card";
import { Shield, Radar, Cpu, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "Tactical Surveillance",
    description: "Advanced ISR capabilities with real-time intelligence gathering and secure data transmission for mission-critical operations."
  },
  {
    icon: Radar,
    title: "Autonomous Navigation",
    description: "AI-powered flight systems with obstacle avoidance, GPS-denied operations, and adaptive mission planning."
  },
  {
    icon: Cpu,
    title: "Modular Platform",
    description: "Configurable payload systems supporting multiple sensor packages, communication relays, and mission-specific equipment."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick-launch systems with extended flight time, enabling immediate response and persistent area coverage."
  }
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Military-grade systems engineered for maximum performance and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-8 group hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
