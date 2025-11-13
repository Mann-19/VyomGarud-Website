import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/drone_vid.mp4";
import { Navbar } from "./Navbar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden font-sans">
      <Navbar />
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/60 to-background"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold font-family-logo tracking-wider">
            <span className="text-foreground">Vyom</span>
            <span className="text-primary/85">Garud</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl">
            Military-Grade UAV Systems
            <br />
            <span className="text-foreground md:text-xl">
              Precision Engineering • Advanced Autonomy • High Reliability
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary cursor-pointer text-foreground font-semibold px-8 py-6 text-lg backdrop-blur-lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
