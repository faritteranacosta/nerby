import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Leaf, 
  Shield, 
  Wifi, 
  Car, 
  UtensilsCrossed,
  Zap,
  Clock,
  DollarSign,
  Map
} from "lucide-react@0.487.0";

interface SearchPageProps {
  onViewChange: (view: string) => void;
}

export function SearchPage({ onViewChange }: SearchPageProps) {
  const [showFilters, setShowFilters] = useState(true);
  const [priceRange, setPriceRange] = useState([200000, 800000]);
  const [distance, setDistance] = useState([0, 15]);
  const [sortBy, setSortBy] = useState("relevance");

  const mockProperties = [
    {
      id: 1,
      title: "Apartamento Estudiantil Eco-Friendly",
      price: 450000,
      location: "Barrio Universidad",
      distance: 0.5,
      transportTime: 5,
      rating: 4.8,
      reviews: 24,
      image: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTkyMDA3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["WiFi", "Lavandería", "Seguridad 24h", "Aire Acondicionado"],
      amenities: {
        wifi: true,
        parking: false,
        kitchen: true,
        laundry: true,
        aircon: true
      },
      greenCertified: true,
      verified: true,
      airQuality: "Excelente",
      nearbyServices: ["Biblioteca", "Cafetería", "Supermercado", "Farmacia"],
      totalCost: 650000 // Including transport and utilities
    },
    {
      id: 2,
      title: "Residencia Universitaria Verde",
      price: 380000,
      location: "Cerca del Campus",
      distance: 0.3,
      transportTime: 3,
      rating: 4.6,
      reviews: 31,
      image: "https://images.unsplash.com/photo-1610956667016-15debe929a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGhvdXNlJTIwZ3JlZW4lMjBlbmVyZ3l8ZW58MXx8fHwxNzU5MjAwNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Paneles Solares", "Cocina Compartida", "Parking", "Jardín Verde"],
      amenities: {
        wifi: true,
        parking: true,
        kitchen: true,
        laundry: true,
        aircon: false
      },
      greenCertified: true,
      verified: true,
      airQuality: "Muy Buena",
      nearbyServices: ["Universidad", "Parque", "Centro Comercial"],
      totalCost: 580000
    },
    {
      id: 3,
      title: "Habitación Individual Centro",
      price: 320000,
      location: "Centro de Santa Marta",
      distance: 2.1,
      transportTime: 8,
      rating: 4.4,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTkyMDA3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["WiFi", "Aire Acondicionado", "Cerca del Metro", "Zona Comercial"],
      amenities: {
        wifi: true,
        parking: false,
        kitchen: false,
        laundry: false,
        aircon: true
      },
      greenCertified: false,
      verified: true,
      airQuality: "Buena",
      nearbyServices: ["Transporte Público", "Bancos", "Restaurantes"],
      totalCost: 470000
    },
    {
      id: 4,
      title: "Casa Estudiantil Compartida",
      price: 280000,
      location: "Barrio Pescaíto",
      distance: 1.8,
      transportTime: 12,
      rating: 4.2,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1610956667016-15debe929a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGhvdXNlJTIwZ3JlZW4lMjBlbmVyZ3l8ZW58MXx8fHwxNzU5MjAwNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Casa Completa", "Patio", "Cocina Grande", "4 Habitaciones"],
      amenities: {
        wifi: true,
        parking: true,
        kitchen: true,
        laundry: true,
        aircon: false
      },
      greenCertified: true,
      verified: true,
      airQuality: "Muy Buena",
      nearbyServices: ["Zona Verde", "Ciclorruta", "Mercado Local"],
      totalCost: 420000
    }
  ];

  const filteredProperties = mockProperties.filter(property => 
    property.price >= priceRange[0] && 
    property.price <= priceRange[1] &&
    property.distance <= distance[1]
  );

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'distance':
        return a.distance - b.distance;
      case 'rating':
        return b.rating - a.rating;
      case 'total-cost':
        return a.totalCost - b.totalCost;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Search Header */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar por ubicación, características..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
            <Button onClick={() => onViewChange('map')}>
              <Map className="w-4 h-4 mr-2" />
              Ver Mapa
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              {sortedProperties.length} alojamientos encontrados cerca de Universidad del Magdalena
            </p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevancia</SelectItem>
                <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                <SelectItem value="distance">Distancia</SelectItem>
                <SelectItem value="rating">Mejor Calificación</SelectItem>
                <SelectItem value="total-cost">Costo Total</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 space-y-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Filtros de Búsqueda</h3>
                  
                  {/* Price Range */}
                  <div className="space-y-3 mb-6">
                    <label className="text-sm font-medium">Rango de Precio (COP)</label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={1000000}
                      min={200000}
                      step={50000}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0].toLocaleString()}</span>
                      <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Distance */}
                  <div className="space-y-3 mb-6">
                    <label className="text-sm font-medium">Distancia al Campus (km)</label>
                    <Slider
                      value={distance}
                      onValueChange={setDistance}
                      max={20}
                      min={0}
                      step={0.5}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{distance[0]} km</span>
                      <span>{distance[1]} km</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="space-y-3 mb-6">
                    <label className="text-sm font-medium">Servicios</label>
                    <div className="space-y-2">
                      {[
                        { id: 'wifi', label: 'WiFi', icon: Wifi },
                        { id: 'parking', label: 'Parking', icon: Car },
                        { id: 'kitchen', label: 'Cocina', icon: UtensilsCrossed },
                        { id: 'aircon', label: 'Aire Acondicionado', icon: Zap }
                      ].map((amenity) => (
                        <div key={amenity.id} className="flex items-center space-x-2">
                          <Checkbox id={amenity.id} />
                          <label htmlFor={amenity.id} className="text-sm flex items-center gap-2">
                            <amenity.icon className="w-4 h-4" />
                            {amenity.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-3 mb-6">
                    <label className="text-sm font-medium">Certificaciones</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="verified" />
                        <label htmlFor="verified" className="text-sm flex items-center gap-2">
                          <Shield className="w-4 h-4 text-blue-500" />
                          Propietario Verificado
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="green" />
                        <label htmlFor="green" className="text-sm flex items-center gap-2">
                          <Leaf className="w-4 h-4 text-green-500" />
                          Certificación Verde
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Transport Time */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Tiempo de Transporte (max)</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 minutos</SelectItem>
                        <SelectItem value="10">10 minutos</SelectItem>
                        <SelectItem value="15">15 minutos</SelectItem>
                        <SelectItem value="20">20 minutos</SelectItem>
                        <SelectItem value="30">30 minutos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Results */}
          <div className="flex-1">
            <div className="space-y-4">
              {sortedProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="w-64 h-48 relative">
                      <ImageWithFallback
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {property.verified && (
                          <Badge className="bg-blue-500 hover:bg-blue-600">
                            <Shield className="w-3 h-3 mr-1" />
                            Verificado
                          </Badge>
                        )}
                        {property.greenCertified && (
                          <Badge className="bg-green-500 hover:bg-green-600">
                            <Leaf className="w-3 h-3 mr-1" />
                            Eco
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-purple-900 mb-1">
                            {property.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {property.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {property.transportTime} min al campus
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm">{property.rating} ({property.reviews} reseñas)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-900 mb-1">
                            ${property.price.toLocaleString()}/mes
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            <DollarSign className="w-3 h-3 inline mr-1" />
                            Costo total: ${property.totalCost.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {property.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <span className="text-gray-600">Distancia: </span>
                          <span className="font-medium">{property.distance} km</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Calidad del aire: </span>
                          <span className="font-medium text-green-600">{property.airQuality}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-sm text-gray-600">Servicios cercanos: </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {property.nearbyServices.map((service, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1" onClick={() => onViewChange('property-details')}>
                          Ver Detalles
                        </Button>
                        <Button variant="outline">
                          Contactar
                        </Button>
                        <Button variant="ghost" size="icon">
                          ❤️
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {sortedProperties.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  No se encontraron alojamientos con los filtros seleccionados
                </div>
                <Button variant="outline" onClick={() => {
                  setPriceRange([200000, 800000]);
                  setDistance([0, 15]);
                }}>
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}