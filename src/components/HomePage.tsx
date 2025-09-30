import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Search, 
  MapPin, 
  Star, 
  Leaf, 
  Users, 
  Shield, 
  TrendingUp,
  MessageCircle,
  Check
} from "lucide-react@0.487.0";

interface HomePageProps {
  onViewChange: (view: string) => void;
}

export function HomePage({ onViewChange }: HomePageProps) {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchBudget, setSearchBudget] = useState("");

  const featuredProperties = [
    {
      id: 1,
      title: "Apartamento Estudiantil Eco-Friendly",
      price: "$450.000",
      location: "A 5 min de UniMagdalena",
      rating: 4.8,
      reviews: 24,
      image: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTkyMDA3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["WiFi", "Lavandería", "Seguridad"],
      greenCertified: true,
      verified: true
    },
    {
      id: 2,
      title: "Residencia Universitaria Verde",
      price: "$380.000",
      location: "A 3 min de UniMagdalena",
      rating: 4.6,
      reviews: 31,
      image: "https://images.unsplash.com/photo-1610956667016-15debe929a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGhvdXNlJTIwZ3JlZW4lMjBlbmVyZ3l8ZW58MXx8fHwxNzU5MjAwNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Paneles Solares", "Cocina", "Parking"],
      greenCertified: true,
      verified: true
    },
    {
      id: 3,
      title: "Habitación Individual Centro",
      price: "$320.000",
      location: "A 8 min de UniMagdalena",
      rating: 4.4,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTkyMDA3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["WiFi", "Aire Acondicionado", "Cerca del Metro"],
      greenCertified: false,
      verified: true
    }
  ];

  const stats = [
    { label: "Alojamientos Verificados", value: "500+", icon: Shield },
    { label: "Estudiantes Conectados", value: "2,500+", icon: Users },
    { label: "Certificaciones Verdes", value: "150+", icon: Leaf },
    { label: "Satisfacción Promedio", value: "4.7/5", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1616428394230-ba242d33e3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTkyMDA3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl mb-6 text-purple-900">
            Encuentra tu <span className="text-violet-600">hogar universitario</span> ideal
          </h1>
          <p className="text-xl text-purple-700 mb-8 max-w-2xl mx-auto">
            Conectamos estudiantes de la Universidad del Magdalena con alojamientos 
            verificados, eco-responsables y cerca del campus.
          </p>

          {/* Search Form */}
          <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-purple-700">Ubicación preferida</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Cerca de UniMagdalena..."
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-purple-700">Presupuesto mensual</label>
                  <Input
                    placeholder="Ej: $400.000"
                    value={searchBudget}
                    onChange={(e) => setSearchBudget(e.target.value)}
                  />
                </div>
                <div className="flex items-end">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                    onClick={() => onViewChange('search')}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Buscar Alojamiento
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-purple-900 mb-2">{stat.value}</div>
                <div className="text-purple-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Alojamientos Destacados
            </h2>
            <p className="text-purple-700 max-w-2xl mx-auto">
              Descubre opciones verificadas con certificación verde y excelentes calificaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
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
                <CardContent className="p-4">
                  <h3 className="font-semibold text-purple-900 mb-2">{property.title}</h3>
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm">{property.rating} ({property.reviews} reseñas)</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {property.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-purple-900">{property.price}</span>
                    <Button variant="outline" size="sm">
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => onViewChange('search')}
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              Ver Todos los Alojamientos
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              ¿Por qué elegir CampusHome?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h3 className="font-semibold text-purple-900 mb-2">Verificación Universitaria</h3>
              <p className="text-purple-700 text-sm">
                Autenticación con correo institucional para mayor seguridad
              </p>
            </Card>

            <Card className="text-center p-6">
              <Leaf className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="font-semibold text-purple-900 mb-2">Certificación Verde</h3>
              <p className="text-purple-700 text-sm">
                Promovemos alojamientos eco-responsables y sostenibles
              </p>
            </Card>

            <Card className="text-center p-6">
              <MessageCircle className="w-12 h-12 mx-auto text-violet-600 mb-4" />
              <h3 className="font-semibold text-purple-900 mb-2">Chat Seguro</h3>
              <p className="text-purple-700 text-sm">
                Comunicación directa y segura con propietarios
              </p>
            </Card>

            <Card className="text-center p-6">
              <TrendingUp className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold text-purple-900 mb-2">Análisis de Costos</h3>
              <p className="text-purple-700 text-sm">
                Calcula el costo total incluyendo transporte y servicios
              </p>
            </Card>

            <Card className="text-center p-6">
              <Users className="w-12 h-12 mx-auto text-pink-600 mb-4" />
              <h3 className="font-semibold text-purple-900 mb-2">Comunidad Estudiantil</h3>
              <p className="text-purple-700 text-sm">
                Conecta con otros estudiantes y participa en eventos
              </p>
            </Card>

            <Card className="text-center p-6">
              <Check className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
              <h3 className="font-semibold text-purple-900 mb-2">Proceso Simplificado</h3>
              <p className="text-purple-700 text-sm">
                Reserva y gestiona todo desde una sola plataforma
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Eres propietario de un alojamiento?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a nuestra red de propietarios verificados y conecta con estudiantes responsables
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => onViewChange('owner-dashboard')}
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Registrar mi Propiedad
          </Button>
        </div>
      </section>
    </div>
  );
}