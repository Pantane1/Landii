import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Building2, Info, Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/properties", label: "Properties", icon: Building2 },
    { to: "/list-property", label: "List Property", icon: Building2 },
    { to: "/about", label: "About", icon: Info },
    { to: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Landii</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button size="lg" asChild>
              <Link to="/list-property">List Your Property</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center space-x-2 text-lg text-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                ))}
                <Button size="lg" className="w-full" asChild>
                  <Link to="/list-property">List Your Property</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
