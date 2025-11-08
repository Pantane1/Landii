import { Link } from "react-router-dom";
import { Building2, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Landii</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Kenya's trusted platform for rental properties. Find your next home or list your property with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">For Landlords</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/list-property" className="text-muted-foreground hover:text-primary transition-colors">
                  List Your Property
                </Link>
              </li>
              <li>
                <Link to="/list-property" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/list-property" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">For Tenants</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">
                  Search by Location
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@landii.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Landii. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
