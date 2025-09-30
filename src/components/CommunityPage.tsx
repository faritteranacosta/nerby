import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Calendar,
  Users,
  BookOpen,
  Recycle,
  MessageCircle,
  Heart,
  Share,
  MapPin,
  Clock,
  Plus,
  Search,
  TrendingUp,
  Award,
  Bike
} from "lucide-react@0.487.0";

export function CommunityPage() {
  const [activeTab, setActiveTab] = useState("events");
  const [newPost, setNewPost] = useState("");

  const upcomingEvents = [
    {
      id: 1,
      title: "Feria de Intercambio de Libros",
      date: "15 Enero 2024",
      time: "2:00 PM",
      location: "Biblioteca Central UniMagdalena",
      attendees: 45,
      category: "Académico",
      image: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTkyMDA3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Intercambia libros usados con otros estudiantes y encuentra material de estudio.",
      organizer: "María González"
    },
    {
      id: 2,
      title: "Jornada de Reciclaje Campus Verde",
      date: "18 Enero 2024",
      time: "9:00 AM",
      location: "Plaza Central Universidad",
      attendees: 78,
      category: "Ambiental",
      image: "https://images.unsplash.com/photo-1610956667016-15debe929a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGhvdXNlJTIwZ3JlZW4lMjBlbmVyZ3l8ZW58MXx8fHwxNzU5MjAwNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Únete a la campaña de reciclaje y sostenibilidad del campus.",
      organizer: "EcoEstudiantes UNIMAGDALENA"
    },
    {
      id: 3,
      title: "Sesión de Estudio Grupal - Cálculo II",
      date: "20 Enero 2024",
      time: "4:00 PM",
      location: "Aula 205 - Facultad de Ingeniería",
      attendees: 23,
      category: "Estudio",
      image: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTkyMDA3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Estudio colaborativo para el próximo examen parcial.",
      organizer: "Carlos Ruiz"
    }
  ];

  const studyGroups = [
    {
      id: 1,
      name: "Matemáticas Avanzadas",
      members: 15,
      subject: "Cálculo III",
      nextSession: "Mañana 3:00 PM",
      description: "Grupo de estudio para matemáticas de nivel avanzado",
      active: true
    },
    {
      id: 2,
      name: "Programación Web",
      members: 22,
      subject: "Desarrollo Frontend",
      nextSession: "Viernes 5:00 PM",
      description: "Aprendemos React, JavaScript y tecnologías web modernas",
      active: true
    },
    {
      id: 3,
      name: "Química Orgánica",
      members: 18,
      subject: "Química II",
      nextSession: "Lunes 2:00 PM",
      description: "Resolvemos ejercicios y preparamos laboratorios",
      active: false
    }
  ];

  const forumPosts = [
    {
      id: 1,
      author: "Ana Torres",
      avatar: "AT",
      time: "Hace 2 horas",
      title: "¿Alguien conoce buen transporte al campus desde el centro?",
      content: "Estoy buscando opciones de transporte económico y confiable desde el centro de Santa Marta hasta la universidad. ¿Qué recomiendan?",
      likes: 12,
      comments: 8,
      tags: ["transporte", "campus"]
    },
    {
      id: 2,
      author: "Luis Mendoza",
      avatar: "LM",
      time: "Hace 4 horas",
      title: "Intercambio: Libro de Física por Química",
      content: "Tengo el libro 'Física Universitaria' de Sears en excelente estado. Busco intercambiar por libro de Química Orgánica.",
      likes: 5,
      comments: 3,
      tags: ["intercambio", "libros", "física", "química"]
    },
    {
      id: 3,
      author: "EcoEstudiantes",
      avatar: "🌱",
      time: "Hace 6 horas",
      title: "Nueva campaña de movilidad sostenible",
      content: "Lanzamos la campaña 'Bicis al Campus' para promover el uso de bicicletas. ¡Únete y gana puntos verdes!",
      likes: 28,
      comments: 15,
      tags: ["sostenibilidad", "bicicleta", "campus"],
      pinned: true
    }
  ];

  const leaderboard = [
    { name: "María González", points: 450, badge: "Eco Líder", avatar: "MG" },
    { name: "Carlos Ruiz", points: 380, badge: "Mentor", avatar: "CR" },
    { name: "Ana Torres", points: 320, badge: "Colaborador", avatar: "AT" },
    { name: "Luis Mendoza", points: 290, badge: "Activo", avatar: "LM" },
    { name: "Sofia Vargas", points: 275, badge: "Estudiosa", avatar: "SV" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">Comunidad Estudiantil</h1>
          <p className="text-purple-700">Conecta, aprende y crece con otros estudiantes de la Universidad del Magdalena</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">2,547</div>
              <div className="text-sm text-gray-600">Estudiantes Activos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">28</div>
              <div className="text-sm text-gray-600">Eventos Este Mes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">45</div>
              <div className="text-sm text-gray-600">Grupos de Estudio</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Recycle className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Acciones Eco</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="events">Eventos</TabsTrigger>
                <TabsTrigger value="groups">Grupos</TabsTrigger>
                <TabsTrigger value="forum">Foros</TabsTrigger>
                <TabsTrigger value="exchange">Intercambio</TabsTrigger>
              </TabsList>

              <TabsContent value="events" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Próximos Eventos</h2>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Crear Evento
                  </Button>
                </div>

                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="flex">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-32 h-32 object-cover"
                        />
                        <CardContent className="flex-1 p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <Badge variant="secondary" className="mb-2">
                                {event.category}
                              </Badge>
                              <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                              <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{event.attendees} asistirán</span>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Ver Detalles</Button>
                              <Button size="sm">Asistir</Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="groups" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Grupos de Estudio</h2>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Crear Grupo
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studyGroups.map((group) => (
                    <Card key={group.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{group.name}</h3>
                            <Badge variant="outline" className="mb-2">
                              {group.subject}
                            </Badge>
                            <p className="text-sm text-gray-600 mb-3">{group.description}</p>
                          </div>
                          <div className={`w-3 h-3 rounded-full ${group.active ? 'bg-green-500' : 'bg-gray-300'}`} />
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="w-4 h-4" />
                            {group.members} miembros
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            Próxima sesión: {group.nextSession}
                          </div>
                        </div>

                        <Button className="w-full" variant={group.active ? "default" : "outline"}>
                          {group.active ? "Unirse al Grupo" : "Ver Detalles"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="forum" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Foros de Discusión</h2>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input placeholder="Buscar en foros..." className="pl-10 w-64" />
                    </div>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Nueva Publicación
                    </Button>
                  </div>
                </div>

                {/* New Post */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Avatar>
                        <AvatarFallback>TU</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea
                          placeholder="¿Qué quieres compartir con la comunidad?"
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                          className="mb-3"
                        />
                        <div className="flex justify-end">
                          <Button disabled={!newPost.trim()}>Publicar</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Forum Posts */}
                <div className="space-y-4">
                  {forumPosts.map((post) => (
                    <Card key={post.id} className={`${post.pinned ? 'border-purple-300 bg-purple-50/30' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex gap-3">
                          <Avatar>
                            <AvatarFallback>{post.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium text-gray-900">{post.author}</span>
                              <span className="text-sm text-gray-500">{post.time}</span>
                              {post.pinned && (
                                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                                  Destacado
                                </Badge>
                              )}
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                            <p className="text-gray-700 mb-3">{post.content}</p>
                            
                            <div className="flex flex-wrap gap-1 mb-3">
                              {post.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  #{tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
                                <Heart className="w-4 h-4 mr-1" />
                                {post.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                                <MessageCircle className="w-4 h-4 mr-1" />
                                {post.comments}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                                <Share className="w-4 h-4 mr-1" />
                                Compartir
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="exchange" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Intercambio de Materiales</h2>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Publicar Intercambio
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Libro de Cálculo III",
                      author: "James Stewart",
                      condition: "Excelente",
                      offered: "María González",
                      seeking: "Libro de Física II",
                      category: "Matemáticas"
                    },
                    {
                      title: "Apuntes de Química Orgánica",
                      author: "Compilación propia",
                      condition: "Muy bueno",
                      offered: "Carlos Ruiz",
                      seeking: "Calculadora científica",
                      category: "Química"
                    },
                    {
                      title: "Manual de Programación Java",
                      author: "Oracle Press",
                      condition: "Bueno",
                      offered: "Ana Torres",
                      seeking: "Libro de Estructuras de Datos",
                      category: "Programación"
                    }
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="outline">{item.category}</Badge>
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            {item.condition}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">por {item.author}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="text-sm">
                            <span className="text-gray-600">Ofrece: </span>
                            <span className="font-medium">{item.offered}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-600">Busca: </span>
                            <span className="font-medium">{item.seeking}</span>
                          </div>
                        </div>

                        <Button className="w-full" variant="outline">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Contactar
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  Ranking Comunidad
                </CardTitle>
                <CardDescription>Los estudiantes más activos este mes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((user, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-sm font-medium text-purple-700">
                        {index + 1}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.badge}</div>
                      </div>
                      <div className="text-sm font-medium text-purple-600">{user.points}p</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sustainability Challenge */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-green-600" />
                  Reto Sostenible
                </CardTitle>
                <CardDescription>Enero: Movilidad Verde</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <Bike className="w-12 h-12 mx-auto text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-green-900">15 días</div>
                  <div className="text-sm text-gray-600">usando bicicleta</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Tu progreso</span>
                    <span>8/20 días</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="text-xs text-gray-600">
                    ¡Vas genial! Sigue así para ganar 50 puntos extra.
                  </div>
                </div>

                <Button className="w-full mt-4" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full justify-start" variant="ghost">
                    <Calendar className="w-4 h-4 mr-2" />
                    Crear Evento
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Formar Grupo de Estudio
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Publicar en Foro
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Recycle className="w-4 h-4 mr-2" />
                    Reportar Acción Eco
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}