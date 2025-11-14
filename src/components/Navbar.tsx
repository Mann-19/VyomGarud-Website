import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
//   SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const navItems = [
    { name: "Our Capabilites", href: "#capabilities" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/5 backdrop-blur-lg font-family-sans text-white/70">
      <div className="container flex h-16 items-center justify-between px-10">
        <a href="/" className="font-bold font-family-logo tracking-widest text-2xl">
          Vyom<span className="text-primary">Garud</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <a href={item.href}>{item.name}</a>
            </Button>
          ))}
        </nav>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>VyomGarud</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {navItems.map((item) => (
                  <Button key={item.name} variant="ghost" asChild>
                    <a href={item.href}>{item.name}</a>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}