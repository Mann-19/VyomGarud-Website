const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            About <span className="text-primary">VyomGarud</span>
          </h2>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              VyomGarud is at the forefront of military-grade UAV technology,
              delivering unmanned aerial systems that combine cutting-edge
              autonomy with uncompromising reliability.
            </p>

            <p>
              Our mission is to provide defense and security organizations with
              advanced drone platforms engineered for precision operations in
              the most demanding environments. Through continuous innovation in
              autonomous systems, we enable our clients to achieve superior
              situational awareness and tactical advantage.
            </p>

            <p className="text-foreground font-semibold">
              Built for professionals who demand excellence in every mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
