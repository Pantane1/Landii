import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Home, Shield, Smartphone, TrendingUp, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Modern apartments in Nairobi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Your Perfect Rental Property in Nairobi
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Kenya's trusted platform connecting landlords with tenants. List properties, find homes, manage rentals—all in one place.
            </p>
            
            {/* Search Bar */}
            <div className="bg-card rounded-xl p-4 shadow-lg border border-border">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Location (e.g., Westlands, Kilimani)" 
                    className="border-0 bg-transparent focus-visible:ring-0"
                  />
                </div>
                <div className="flex-1 flex items-center space-x-2">
                  <Home className="h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Property type" 
                    className="border-0 bg-transparent focus-visible:ring-0"
                  />
                </div>
                <Button size="lg" className="md:w-auto w-full">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/list-property">List Your Property</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Landii?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make renting simple, secure, and stress-free for both landlords and tenants across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Verified Listings</h3>
              <p className="text-muted-foreground">
                Every property is verified to ensure authenticity and build trust between landlords and tenants.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">M-Pesa Integration</h3>
              <p className="text-muted-foreground">
                Seamless rent collection with M-Pesa, bank transfers, and other Kenyan payment methods.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Property Analytics</h3>
              <p className="text-muted-foreground">
                Track listing views, tenant applications, and rental income with detailed analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes—whether you're listing a property or searching for your next home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Landlords */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">For Landlords</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Create Your Account", desc: "Sign up in under 2 minutes with your phone number or email." },
                  { step: "2", title: "List Your Property", desc: "Add photos, details, and pricing for your rental unit." },
                  { step: "3", title: "Review Applications", desc: "Screen tenant applications and choose the best fit." },
                  { step: "4", title: "Manage & Collect", desc: "Track rent payments, maintenance requests, and occupancy." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link to="/list-property">Get Started as Landlord</Link>
              </Button>
            </div>

            {/* For Tenants */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">For Tenants</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Search Properties", desc: "Browse verified listings across Nairobi and Kenya." },
                  { step: "2", title: "Filter Your Results", desc: "Use location, price, size, and amenities to find your perfect match." },
                  { step: "3", title: "Apply & Connect", desc: "Submit applications and communicate directly with landlords." },
                  { step: "4", title: "Move In", desc: "Sign your lease and make your first rent payment securely." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link to="/properties">Browse Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Landlords & Tenants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our users say about their experience with Landii.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "James Mwangi",
                role: "Property Owner",
                text: "Landii helped me fill my vacant units in less than two weeks. The tenant screening feature is excellent!",
              },
              {
                name: "Grace Wanjiru",
                role: "Tenant",
                text: "I found my dream apartment in Kilimani through Landii. The search filters made it so easy!",
              },
              {
                name: "Peter Ochieng",
                role: "Landlord",
                text: "M-Pesa integration is a game-changer. Collecting rent has never been this simple.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="h-5 w-5 text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of landlords and tenants who trust Landii for their rental needs.
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
      </section>

      <Footer />
    </div>
  );
};

export default Index;
