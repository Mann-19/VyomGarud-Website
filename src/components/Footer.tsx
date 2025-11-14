const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-3xl tracking-widest font-bold font-family-logo">
              <span className="text-foreground">Vyom</span>
              <span className="text-primary">Garud</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Advanced UAV Systems
            </p>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; 2025 VyomGarud. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
