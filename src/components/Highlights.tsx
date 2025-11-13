import { CheckCircle } from "lucide-react";

const highlights = [
  "Proven reliability in demanding operational environments",
  "Military-grade encryption and secure communication protocols",
  "Continuous software updates and technical support"
];

const Highlights = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-primary">VyomGarud</span>
          </h2>
        </div>

        <div className="space-y-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-lg text-foreground">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
