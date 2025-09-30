import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu";
import { Home, Search, MessageCircle, User, Bell, Leaf } from "lucide-react@0.487.0";

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
  user?: any;
}

export function Header({ currentView, onViewChange, user }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onViewChange('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-purple-900">CampusHome</div>
              <div className="text-xs text-purple-600">Tu espacio ideal, a un clic del campus</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar alojamientos cerca de la Universidad del Magdalena..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <Button 
              variant={currentView === 'search' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => onViewChange('search')}
            >
              <Search className="w-4 h-4 mr-2" />
              Buscar
            </Button>
            <Button 
              variant={currentView === 'community' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => onViewChange('community')}
            >
              Comunidad
            </Button>
            <Button 
              variant={currentView === 'owner-dashboard' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => onViewChange('owner-dashboard')}
            >
              Propietarios
            </Button>

            {/* User Menu */}
            {user ? (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="relative">
                  <MessageCircle className="w-4 h-4" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 text-white">3</Badge>
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-4 h-4" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 text-white">2</Badge>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="@username" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem onClick={() => onViewChange('profile')}>
                      <User className="mr-2 h-4 w-4" />
                      Mi Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Mensajes
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Cerrar Sesión
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {user.verified && (
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    <Leaf className="w-3 h-3 mr-1" />
                    Verificado
                  </Badge>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => onViewChange('login')}>
                  Iniciar Sesión
                </Button>
                <Button size="sm" onClick={() => onViewChange('register')}>
                  Registrarse
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}