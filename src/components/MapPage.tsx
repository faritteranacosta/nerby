import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Slider } from "./ui/slider";
import { 
  MapPin, 
  Filter, 
  Layers, 
  Navigation, 
  Bus,
  Bike,
  Car,
  TreePine,
  Recycle,
  Wind,
  Zap,
  Shield,
  Leaf,
  Star,
  Clock,
  DollarSign
} from "lucide-react@0.487.0";

export function MapPage() {
  const [mapLayers, setMapLayers] = useState({
    properties: true,
    transport: true,
    greenZones: true,
    airQuality: false,
    recycling: false,
    infrastructure: false
  });

  const [priceRange, setPriceRange] = useState([200000, 800000]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      title: "Apartamento Estudiantil Eco-Friendly",
      price: 450000,
      location: "Barrio Universidad",
      coords: { lat: 11.2229, lng: -74.1825 },
      rating: 4.8,
      greenCertified: true,
      verified: true,
      transportTime: 5,
      airQuality: "Excelente",
      nearbyServices: ["Biblioteca", "Cafetería", "Parque"]
    },
    {
      id: 2,
      title: "Residencia Universitaria Verde",
      price: 380000,
      location: "Cerca del Campus",
      coords: { lat: 11.2241, lng: -74.1835 },
      rating: 4.6,
      greenCertified: true,
      verified: true,
      transportTime: 3,
      airQuality: "Muy Buena",
      nearbyServices: ["Universidad", "Centro Comercial"]
    },
    {
      id: 3,
      title: "Habitación Individual Centro",
      price: 320000,
      location: "Centro de Santa Marta",
      coords: { lat: 11.2155, lng: -74.1975 },
      rating: 4.4,
      greenCertified: false,
      verified: true,
      transportTime: 8,
      airQuality: "Buena",
      nearbyServices: ["Transporte", "Bancos", "Restaurantes"]
    }
  ];

  const transportRoutes = [
    {
      type: "bus",
      name: "Ruta Campus Express",
      color: "blue",
      duration: "5-8 min",
      cost: "$2,500",
      frequency: "Cada 10 min"
    },
    {
      type: "bike",
      name: "Ciclorruta Principal",
      color: "green",
      duration: "8-12 min",
      cost: "Gratis",
      frequency: "24/7"
    },
    {
      type: "walking",
      name: "Sendero Peatonal",
      color: "orange",
      duration: "15-20 min",
      cost: "Gratis",
      frequency: "24/7"
    }
  ];

  const environmentalData = [
    {
      zone: "Zona Universitaria",
      airQuality: "Excelente",
      greenCoverage: 85,
      noiseLevel: "Bajo",
      recyclingPoints: 5
    },
    {
      zone: "Centro Histórico",
      airQuality: "Buena",
      greenCoverage: 45,
      noiseLevel: "Medio",
      recyclingPoints: 3
    },
    {
      zone: "Barrio Pescaíto",
      airQuality: "Muy Buena",
      greenCoverage: 70,
      noiseLevel: "Bajo",
      recyclingPoints: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">Mapa Interactivo</h1>
          <p className="text-purple-700">Explora alojamientos con información ambiental y de transporte</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Rango de Precio</label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000000}
                    min={200000}
                    step={50000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Certificaciones</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="verified" className="rounded" />
                      <label htmlFor="verified" className="text-sm flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-500" />
                        Propietario Verificado
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="green" className="rounded" />
                      <label htmlFor="green" className="text-sm flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-green-500" />
                        Certificación Verde
                      </label>
                    </div>
                  </div>
                </div>

                {/* Transport Time */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Tiempo máximo al campus</label>
                  <select className="w-full p-2 border rounded-md text-sm">
                    <option>5 minutos</option>
                    <option>10 minutos</option>
                    <option>15 minutos</option>
                    <option>20 minutos</option>
                    <option>30 minutos</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Capas del Mapa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(mapLayers).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <label className="text-sm flex items-center gap-2">
                      {key === 'properties' && <MapPin className="w-4 h-4" />}
                      {key === 'transport' && <Bus className="w-4 h-4" />}
                      {key === 'greenZones' && <TreePine className="w-4 h-4" />}
                      {key === 'airQuality' && <Wind className="w-4 h-4" />}
                      {key === 'recycling' && <Recycle className="w-4 h-4" />}
                      {key === 'infrastructure' && <Zap className="w-4 h-4" />}
                      {key === 'properties' && 'Alojamientos'}
                      {key === 'transport' && 'Transporte'}
                      {key === 'greenZones' && 'Zonas Verdes'}
                      {key === 'airQuality' && 'Calidad del Aire'}
                      {key === 'recycling' && 'Puntos de Reciclaje'}
                      {key === 'infrastructure' && 'Infraestructura'}
                    </label>
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) => 
                        setMapLayers(prev => ({ ...prev, [key]: checked }))
                      }
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rutas de Transporte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transportRoutes.map((route, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        {route.type === 'bus' && <Bus className="w-4 h-4 text-blue-600" />}
                        {route.type === 'bike' && <Bike className="w-4 h-4 text-green-600" />}
                        {route.type === 'walking' && <Navigation className="w-4 h-4 text-orange-600" />}
                        <span className="text-sm font-medium">{route.name}</span>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>Duración: {route.duration}</div>
                        <div>Costo: {route.cost}</div>
                        <div>Frecuencia: {route.frequency}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardContent className="p-4 h-full">
                {/* Simulated Map */}
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg relative overflow-hidden">
                  {/* University Marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-purple-600 text-white p-2 rounded-lg shadow-lg">
                      <div className="text-sm font-medium">Universidad del Magdalena</div>
                    </div>
                  </div>

                  {/* Property Markers */}
                  {properties.map((property, index) => (
                    <div
                      key={property.id}
                      className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                        selectedProperty === property.id ? 'z-20' : 'z-10'
                      }`}
                      style={{
                        top: `${30 + index * 15}%`,
                        left: `${40 + index * 10}%`
                      }}
                      onClick={() => setSelectedProperty(property.id)}
                    >
                      <div className={`p-2 rounded-lg shadow-lg transition-all ${
                        selectedProperty === property.id 
                          ? 'bg-purple-600 text-white scale-110' 
                          : 'bg-white text-gray-900 hover:shadow-xl'
                      }`}>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <div className="text-xs">
                            <div className="font-medium">${property.price.toLocaleString()}</div>
                            <div className="flex items-center gap-1">
                              {property.greenCertified && <Leaf className="w-3 h-3 text-green-500" />}
                              {property.verified && <Shield className="w-3 h-3 text-blue-500" />}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Transport Routes Visualization */}
                  {mapLayers.transport && (
                    <>
                      <div className="absolute top-1/2 left-1/4 w-32 h-1 bg-blue-400 opacity-60"></div>
                      <div className="absolute top-3/4 left-1/3 w-24 h-1 bg-green-400 opacity-60 transform rotate-12"></div>
                      <div className="absolute top-1/3 right-1/4 w-28 h-1 bg-orange-400 opacity-60 transform -rotate-12"></div>
                    </>
                  )}

                  {/* Green Zones */}
                  {mapLayers.greenZones && (
                    <>
                      <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-green-300 opacity-40 rounded-full"></div>
                      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-green-300 opacity-40 rounded-full"></div>
                      <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-green-300 opacity-40 rounded-full"></div>
                    </>
                  )}

                  {/* Air Quality Zones */}
                  {mapLayers.airQuality && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 via-yellow-200/30 to-green-200/30"></div>
                  )}

                  {/* Recycling Points */}
                  {mapLayers.recycling && (
                    <>
                      <div className="absolute top-1/3 left-1/3">
                        <Recycle className="w-6 h-6 text-green-600 bg-white rounded-full p-1" />
                      </div>
                      <div className="absolute bottom-1/3 right-1/3">
                        <Recycle className="w-6 h-6 text-green-600 bg-white rounded-full p-1" />
                      </div>
                    </>
                  )}

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <Button size="sm" variant="secondary">+</Button>
                    <Button size="sm" variant="secondary">-</Button>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/80">
                      Vista Interactiva
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property Details / Environmental Info */}
          <div className="space-y-6">
            {selectedProperty ? (
              <Card>
                <CardHeader>
                  <CardTitle>Detalles de la Propiedad</CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const property = properties.find(p => p.id === selectedProperty);
                    return property ? (
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{property.title}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            {property.verified && (
                              <Badge className="bg-blue-100 text-blue-700">
                                <Shield className="w-3 h-3 mr-1" />
                                Verificado
                              </Badge>
                            )}
                            {property.greenCertified && (
                              <Badge className="bg-green-100 text-green-700">
                                <Leaf className="w-3 h-3 mr-1" />
                                Eco
                              </Badge>
                            )}
                          </div>
                          <div className="text-2xl font-bold text-purple-900 mb-2">
                            ${property.price.toLocaleString()}/mes
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{property.transportTime} min al campus</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Wind className="w-4 h-4 text-gray-400" />
                            <span>{property.airQuality}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{property.rating}/5</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{property.location}</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">Servicios Cercanos</label>
                          <div className="flex flex-wrap gap-1">
                            {property.nearbyServices.map((service, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">Ver Detalles</Button>
                          <Button variant="outline" size="sm">Contactar</Button>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Información Ambiental</CardTitle>
                  <CardDescription>Datos de sostenibilidad por zona</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {environmentalData.map((zone, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">{zone.zone}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Calidad del aire:</span>
                            <span className="font-medium text-green-600">{zone.airQuality}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Cobertura verde:</span>
                            <span className="font-medium">{zone.greenCoverage}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Nivel de ruido:</span>
                            <span className="font-medium">{zone.noiseLevel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Puntos de reciclaje:</span>
                            <span className="font-medium">{zone.recyclingPoints}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Calculadora de Costos</CardTitle>
                <CardDescription>Estima el costo total de residencia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Renta promedio</span>
                    <span className="font-medium">$400,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Servicios públicos</span>
                    <span className="font-medium">$120,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Transporte al campus</span>
                    <span className="font-medium">$80,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Alimentación</span>
                    <span className="font-medium">$300,000</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total mensual</span>
                    <span className="text-purple-900">$900,000</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" size="sm">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Personalizar Cálculo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}