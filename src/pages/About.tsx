import { Button } from "@/components/ui/button";
import { Target, Eye, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Landii
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make renting simple, secure, and stress-free for everyone in Kenya.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To connect landlords and tenants across Kenya through a trusted, transparent, and easy-to-use platform. 
                We believe everyone deserves a simple way to find quality housing or manage rental properties effectively.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become Kenya's most trusted rental platform, empowering property owners and tenants with technology 
                that makes finding, listing, and managing rental properties effortless.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Landii was born from a simple observation: finding and managing rental properties in Kenya 
                was unnecessarily complicated. Landlords struggled with vacant units, unreliable tenants, 
                and manual rent collection. Tenants faced challenges finding verified listings, connecting 
                with landlords, and making secure payments.
              </p>
              <p>
                We built Landii to solve these problems. Our platform brings together landlords and tenants 
                in a transparent marketplace, with features designed specifically for the Kenyan market—from 
                M-Pesa integration to location-based search covering all major cities.
              </p>
              <p>
                Today, Landii serves thousands of landlords and tenants across Nairobi and beyond, helping 
                people find homes and manage properties with confidence.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Trust & Transparency",
                  description: "We verify every listing and user to build a safe, reliable marketplace for everyone.",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We constantly improve our platform to deliver the best possible experience.",
                },
                {
                  icon: Target,
                  title: "Customer First",
                  description: "Your success is our success. We're here to support you every step of the way.",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-muted/30 rounded-xl p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "5,000+", label: "Properties Listed" },
                { number: "10,000+", label: "Active Users" },
                { number: "3,000+", label: "Successful Matches" },
                { number: "95%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're a landlord or a tenant, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/list-property">List Your Property</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/properties">Find a Property</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
