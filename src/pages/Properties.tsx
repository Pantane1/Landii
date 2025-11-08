import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Bed, Bath, Maximize, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import propertySample1 from "@/assets/property-sample-1.jpg";
import propertySample2 from "@/assets/property-sample-2.jpg";
import propertySample3 from "@/assets/property-sample-3.jpg";

const Properties = () => {
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const properties = [
    {
      id: 1,
      image: propertySample1,
      title: "Modern 2BR Apartment in Westlands",
      location: "Westlands, Nairobi",
      price: "KES 85,000",
      bedrooms: 2,
      bathrooms: 2,
      size: "120 sqm",
      type: "Apartment",
    },
    {
      id: 2,
      image: propertySample2,
      title: "Spacious 3BR Penthouse in Kilimani",
      location: "Kilimani, Nairobi",
      price: "KES 120,000",
      bedrooms: 3,
      bathrooms: 2,
      size: "180 sqm",
      type: "Penthouse",
    },
    {
      id: 3,
      image: propertySample3,
      title: "Elegant Studio in Parklands",
      location: "Parklands, Nairobi",
      price: "KES 45,000",
      bedrooms: 1,
      bathrooms: 1,
      size: "55 sqm",
      type: "Studio",
    },
    {
      id: 4,
      image: propertySample1,
      title: "Luxury 4BR Townhouse in Karen",
      location: "Karen, Nairobi",
      price: "KES 250,000",
      bedrooms: 4,
      bathrooms: 3,
      size: "300 sqm",
      type: "Townhouse",
    },
    {
      id: 5,
      image: propertySample2,
      title: "Cozy 1BR Flat in Lavington",
      location: "Lavington, Nairobi",
      price: "KES 60,000",
      bedrooms: 1,
      bathrooms: 1,
      size: "70 sqm",
      type: "Apartment",
    },
    {
      id: 6,
      image: propertySample3,
      title: "Modern 2BR in Upper Hill",
      location: "Upper Hill, Nairobi",
      price: "KES 95,000",
      bedrooms: 2,
      bathrooms: 2,
      size: "110 sqm",
      type: "Apartment",
    },
  ];

  const toggleLike = (id: number) => {
    setLiked(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Find Your Perfect Property</h1>
            <p className="text-lg text-muted-foreground">Browse verified rental properties across Nairobi and Kenya</p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Location" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4+">4+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50">KES 0 - 50,000</SelectItem>
                    <SelectItem value="50-100">KES 50,000 - 100,000</SelectItem>
                    <SelectItem value="100-200">KES 100,000 - 200,000</SelectItem>
                    <SelectItem value="200+">KES 200,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full md:w-auto mt-4">
                <Search className="mr-2 h-4 w-4" />
                Search Properties
              </Button>
            </CardContent>
          </Card>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">{properties.length} properties found</p>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="size">Size</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                    onClick={() => toggleLike(property.id)}
                  >
                    <Heart 
                      className={`h-5 w-5 ${liked.has(property.id) ? 'fill-red-500 text-red-500' : 'text-foreground'}`}
                    />
                  </Button>
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {property.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Maximize className="h-4 w-4 mr-1" />
                        <span>{property.size}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary">{property.price}<span className="text-sm text-muted-foreground font-normal">/month</span></p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Properties;
