import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, TrendingUp, Shield, Users, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import landlordHero from "@/assets/landlord-hero.jpg";

const ListProperty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={landlordHero} 
            alt="Professional landlord managing properties" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              List Your Property and Get Tenants Fast
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of successful landlords across Kenya. List your rental property in under 5 minutes and start receiving quality applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Get Started Free</Button>
              <Button size="lg" variant="outline">See Pricing Plans</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Landlords Love Landii
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your rental properties effectively and profitably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Save Time",
                description: "List your property in 5 minutes. No paperwork, no hassle. Just quick, easy listings.",
              },
              {
                icon: Users,
                title: "Quality Tenants",
                description: "Access pre-screened tenants with verified profiles and rental history.",
              },
              {
                icon: DollarSign,
                title: "Maximize Income",
                description: "Get market-rate pricing insights and reduce vacancy periods significantly.",
              },
              {
                icon: Shield,
                title: "Secure Payments",
                description: "Automatic rent collection via M-Pesa, bank transfer, or card—secure and on time.",
              },
              {
                icon: TrendingUp,
                title: "Track Performance",
                description: "Monitor listing views, applications, and rental income with detailed analytics.",
              },
              {
                icon: CheckCircle2,
                title: "Full Support",
                description: "Get help when you need it with our dedicated landlord support team.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your property listed and start receiving applications in 4 simple steps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Create Your Free Account",
                  description: "Sign up with your email or phone number. Takes less than 2 minutes.",
                },
                {
                  step: "2",
                  title: "List Your Property",
                  description: "Add property details, upload photos, set your price, and describe amenities. Our guided form makes it easy.",
                },
                {
                  step: "3",
                  title: "Review Tenant Applications",
                  description: "Receive applications from interested tenants. Review profiles, employment status, and references.",
                },
                {
                  step: "4",
                  title: "Manage Everything in One Place",
                  description: "Track rent payments, handle maintenance requests, and communicate with tenants through your dashboard.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-6 bg-card rounded-xl p-6 border border-border">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg">List Your Property Now</Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free, upgrade anytime. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "KES 0",
                period: "Free Forever",
                features: [
                  "List up to 2 properties",
                  "Basic property analytics",
                  "Email support",
                  "Standard listing visibility",
                ],
                cta: "Start Free",
                highlighted: false,
              },
              {
                name: "Pro",
                price: "KES 2,500",
                period: "per month",
                features: [
                  "Unlimited property listings",
                  "Advanced analytics dashboard",
                  "Priority support",
                  "Featured listing placement",
                  "Tenant screening tools",
                  "M-Pesa auto-collection",
                ],
                cta: "Upgrade to Pro",
                highlighted: true,
              },
              {
                name: "Premium",
                price: "KES 5,000",
                period: "per month",
                features: [
                  "Everything in Pro",
                  "Dedicated account manager",
                  "Custom lease templates",
                  "Priority tenant matching",
                  "Multi-property management",
                  "API access",
                ],
                cta: "Contact Sales",
                highlighted: false,
              },
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-8 border ${
                  plan.highlighted 
                    ? 'border-primary bg-primary/5 shadow-lg scale-105' 
                    : 'border-border bg-card'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How do I screen potential tenants?",
                a: "Our platform provides verified tenant profiles including employment history, previous rental references, and ID verification. Pro users get access to advanced screening tools.",
              },
              {
                q: "What are the listing fees?",
                a: "Basic listing is free forever. Pro and Premium plans offer enhanced features and visibility for a monthly subscription.",
              },
              {
                q: "How does rent collection work?",
                a: "Tenants can pay via M-Pesa, bank transfer, or card. Pro users enjoy automatic rent collection with instant notifications.",
              },
              {
                q: "Can I manage multiple properties?",
                a: "Yes! Pro and Premium plans support unlimited property listings with centralized management.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to List Your Property?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of landlords who trust Landii to manage their rental properties.
          </p>
          <Button size="lg" variant="secondary">
            Get Started Free
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListProperty;
