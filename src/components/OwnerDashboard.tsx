import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Home, 
  DollarSign, 
  Eye, 
  MessageCircle, 
  Calendar,
  TrendingUp,
  Leaf,
  Shield,
  Plus,
  Settings,
  Star,
  Users,
  Zap,
  Recycle,
  Wind
} from "lucide-react@0.487.0";

export function OwnerDashboard() {
  const [selectedProperty, setSelectedProperty] = useState(0);

  const ownerProperties = [
    {
      id: 1,
      title: "Apartamento Estudiantil Eco-Friendly",
      location: "Barrio Universidad",
      price: 450000,
      status: "Ocupado",
      views: 245,
      messages: 12,
      bookings: 8,
      rating: 4.8,
      reviews: 24,
      image: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTkyMDA3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      greenCertified: true,
      verified: true,
      occupancyRate: 95,
      nextBooking: "15 Enero 2024"
    },
    {
      id: 2,
      title: "Residencia Universitaria Verde",
      location: "Cerca del Campus",
      price: 380000,
      status: "Disponible",
      views: 189,
      messages: 8,
      bookings: 6,
      rating: 4.6,
      reviews: 31,
      image: "https://images.unsplash.com/photo-1610956667016-15debe929a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGhvdXNlJTIwZ3JlZW4lMjBlbmVyZ3l8ZW58MXx8fHwxNzU5MjAwNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      greenCertified: true,
      verified: true,
      occupancyRate: 78,
      nextBooking: "20 Enero 2024"
    }
  ];

  const stats = [
    {
      title: "Ingresos del Mes",
      value: "$1,290,000",
      change: "+12%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Visualizaciones",
      value: "434",
      change: "+8%",
      icon: Eye,
      color: "text-blue-600"
    },
    {
      title: "Mensajes",
      value: "20",
      change: "+25%",
      icon: MessageCircle,
      color: "text-purple-600"
    },
    {
      title: "Reservas",
      value: "14",
      change: "+16%",
      icon: Calendar,
      color: "text-orange-600"
    }
  ];

  const currentProperty = ownerProperties[selectedProperty];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">Panel de Propietario</h1>
          <p className="text-purple-700">Gestiona tus propiedades y conecta con estudiantes</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.color} flex items-center gap-1`}>
                      <TrendingUp className="w-4 h-4" />
                      {stat.change} vs mes anterior
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Properties List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Mis Propiedades</CardTitle>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {ownerProperties.map((property, index) => (
                  <div
                    key={property.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedProperty === index 
                        ? 'border-purple-300 bg-purple-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedProperty(index)}
                  >
                    <div className="flex items-start gap-3">
                      <ImageWithFallback
                        src={property.image}
                        alt={property.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{property.title}</h3>
                        <p className="text-sm text-gray-600">{property.location}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge 
                            variant={property.status === 'Ocupado' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {property.status}
                          </Badge>
                          {property.greenCertified && (
                            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                              <Leaf className="w-3 h-3 mr-1" />
                              Eco
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Property Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="analytics">Analíticas</TabsTrigger>
                <TabsTrigger value="green">Certificación Verde</TabsTrigger>
                <TabsTrigger value="settings">Configuración</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Property Overview */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {currentProperty.title}
                          {currentProperty.verified && <Shield className="w-5 h-5 text-blue-500" />}
                          {currentProperty.greenCertified && <Leaf className="w-5 h-5 text-green-500" />}
                        </CardTitle>
                        <CardDescription>{currentProperty.location}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-900">
                          ${currentProperty.price.toLocaleString()}/mes
                        </div>
                        <div className="text-sm text-gray-600">Precio actual</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Eye className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                        <div className="text-lg font-semibold">{currentProperty.views}</div>
                        <div className="text-sm text-gray-600">Visualizaciones</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <MessageCircle className="w-6 h-6 mx-auto text-purple-600 mb-2" />
                        <div className="text-lg font-semibold">{currentProperty.messages}</div>
                        <div className="text-sm text-gray-600">Mensajes</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Calendar className="w-6 h-6 mx-auto text-orange-600 mb-2" />
                        <div className="text-lg font-semibold">{currentProperty.bookings}</div>
                        <div className="text-sm text-gray-600">Reservas</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Star className="w-6 h-6 mx-auto text-yellow-600 mb-2" />
                        <div className="text-lg font-semibold">{currentProperty.rating}</div>
                        <div className="text-sm text-gray-600">Calificación</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Occupancy */}
                <Card>
                  <CardHeader>
                    <CardTitle>Ocupación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Tasa de ocupación</span>
                          <span>{currentProperty.occupancyRate}%</span>
                        </div>
                        <Progress value={currentProperty.occupancyRate} className="mb-4" />
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-blue-800 mb-1">Próxima reserva</div>
                        <div className="font-semibold text-blue-900">{currentProperty.nextBooking}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Messages */}
                <Card>
                  <CardHeader>
                    <CardTitle>Mensajes Recientes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "María González", message: "¿Está disponible para febrero?", time: "Hace 2 horas", verified: true },
                        { name: "Carlos Ruiz", message: "Me interesa conocer más detalles", time: "Hace 5 horas", verified: true },
                        { name: "Ana Torres", message: "¿Incluye servicios públicos?", time: "Ayer", verified: true }
                      ].map((msg, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{msg.name}</span>
                              {msg.verified && <Shield className="w-4 h-4 text-blue-500" />}
                            </div>
                            <p className="text-sm text-gray-600">{msg.message}</p>
                            <p className="text-xs text-gray-500">{msg.time}</p>
                          </div>
                          <Button variant="outline" size="sm">Responder</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Análisis de Demanda</CardTitle>
                    <CardDescription>
                      Optimiza tus precios basado en tendencias del mercado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Sugerencia de Precio</h4>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-lg font-semibold text-green-900 mb-1">
                            $460,000 - $480,000
                          </div>
                          <p className="text-sm text-green-700">
                            Basado en propiedades similares en tu área
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Temporada Alta</h4>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-lg font-semibold text-blue-900 mb-1">
                            Enero - Marzo
                          </div>
                          <p className="text-sm text-blue-700">
                            Considera aumentar precios un 15%
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-medium mb-3">Factores de Costo Total</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Renta base</span>
                          <span className="font-medium">${currentProperty.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Servicios públicos (promedio)</span>
                          <span className="font-medium">$120,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Transporte al campus</span>
                          <span className="font-medium">$80,000</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between items-center font-semibold">
                          <span>Costo total estudiante</span>
                          <span>${(currentProperty.price + 120000 + 80000).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="green" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-green-600" />
                      Certificación Verde
                    </CardTitle>
                    <CardDescription>
                      Destaca tu compromiso ambiental y atrae estudiantes conscientes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-3">Eficiencia Energética</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Paneles solares</span>
                              <Switch checked />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Bombillas LED</span>
                              <Switch checked />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Electrodomésticos eficientes</span>
                              <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Ventilación natural</span>
                              <Switch checked />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-3">Gestión de Residuos</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Separación de residuos</span>
                              <Switch checked />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Compostaje</span>
                              <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Reciclaje de agua</span>
                              <Switch checked />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Punto de reciclaje cercano</span>
                              <Switch checked />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Leaf className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-green-900">Nivel de Certificación</span>
                        </div>
                        <div className="text-lg font-semibold text-green-900 mb-1">
                          Verde Plus ⭐⭐⭐
                        </div>
                        <p className="text-sm text-green-700">
                          Tu propiedad califica para certificación premium
                        </p>
                        <Progress value={85} className="mt-3" />
                        <p className="text-xs text-green-600 mt-1">85% de criterios cumplidos</p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Documentación Ambiental</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium">Consumo energético mensual (kWh)</label>
                            <Input placeholder="Ej: 150" className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Certificaciones ambientales</label>
                            <Textarea placeholder="Describe las certificaciones o prácticas ambientales..." className="mt-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Configuración de la Propiedad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium">Título del anuncio</label>
                        <Input value={currentProperty.title} className="mt-1" />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Precio mensual (COP)</label>
                        <Input value={currentProperty.price} type="number" className="mt-1" />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Descripción</label>
                        <Textarea placeholder="Describe tu propiedad..." className="mt-1" />
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Disponibilidad</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Disponible para reservas</span>
                            <Switch checked />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Reservas instantáneas</span>
                            <Switch />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Visible en búsquedas</span>
                            <Switch checked />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button>Guardar Cambios</Button>
                        <Button variant="outline">Cancelar</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}