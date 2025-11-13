import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone,Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  return (
    <section id="contact" className="relative py-20 px-6 bg-background overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-border"></div>
            <span className="tech-mono text-primary text-sm">
              <Send className="mt-1" />
            </span>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-family-logo font-bold text-center mb-6">
            Get In {" "}
            <span className="text-primary">Touch</span>
          </h2>
          
          <p className="tech-mono text-muted-foreground text-center">
            Ready to discuss your UAV requirements?
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-1 bg-border p-1">
          {/* Contact Info */}
          <div className="md:col-span-2 bg-card p-8 space-y-8">
            <div className="space-y-6 md:flex md:flex-col md:justify-around h-full">
              <div className="border-l-4 border-primary pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg uppercase tracking-wider">Email</h3>
                </div>
                <p className="tech-mono text-muted-foreground text-base">contact@vyomgarud.com</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg uppercase tracking-wider">Phone</h3>
                </div>
                <p className="tech-mono text-muted-foreground text-base">+91 (XXX) XXX-XXXX</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg uppercase tracking-wider">Location</h3>
                </div>
                <p className="tech-mono text-muted-foreground text-base">India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="md:col-span-3 bg-card p-8 space-y-4 font-family-sans">
            <Input
              placeholder="NAME *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-2 border-border focus:border-primary tech-mono text-sm uppercase placeholder:text-muted-foreground"
              required
            />
            <Input
              type="email"
              placeholder="EMAIL *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-2 border-border focus:border-primary tech-mono text-sm uppercase placeholder:text-muted-foreground"
              required
            />
            <Input
              placeholder="ORGANIZATION"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="bg-background border-2 border-border focus:border-primary tech-mono text-sm uppercase placeholder:text-muted-foreground"
            />
            <Textarea
              placeholder="MESSAGE *"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-2 border-border focus:border-primary min-h-[150px] tech-mono text-sm placeholder:text-muted-foreground resize-none"
              required
            />
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary text-primary-foreground font-bold uppercase tracking-wider tech-mono border-2 border-primary hover:shadow-lg hover:shadow-primary/50 transition-all"
              size="lg"
            >
              SEND A MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
