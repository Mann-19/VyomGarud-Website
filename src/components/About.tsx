const About = () => {
  return (
    <section className="relative py-32 px-6 bg-card overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-4 border-primary rotate-45"></div>
        <div className="absolute md:bottom-20 bottom-24 right-12 md:right-10 md:w-96 md:h-96 w-84 h-84 border-4 border-primary"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            
            <h2 className="text-6xl md:text-7xl font-bold font-family-logo">
              <span className="text-foreground">About</span>
              <br />
              <span className="text-primary">VyomGarud</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 border-l-4 border-muted-foreground pl-8">
              <p className="text-foreground text-lg leading-relaxed">
                VyomGarud is at the forefront of military-grade UAV technology, delivering unmanned aerial systems 
                that combine cutting-edge autonomy with uncompromising reliability.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide defense and security organizations with advanced drone platforms 
                engineered for precision operations in the most demanding environments.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Through continuous innovation in autonomous systems, we enable our clients to achieve superior 
                situational awareness and tactical advantage.
              </p>
              
              <div className="bg-background border-l-4 border-muted-foreground p-6">
                <p className="text-foreground font-bold text-xl uppercase tracking-wide">
                  Built for professionals who demand excellence in every mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
