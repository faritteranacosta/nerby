import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  Mail, 
  Lock, 
  User, 
  Phone, 
  GraduationCap, 
  Shield, 
  Home,
  Check,
  AlertCircle
} from "lucide-react@0.487.0";

interface AuthPageProps {
  type: 'login' | 'register';
  onViewChange: (view: string) => void;
  onLogin: (user: any) => void;
}

export function AuthPage({ type, onViewChange, onLogin }: AuthPageProps) {
  const [currentTab, setCurrentTab] = useState(type);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    userType: '',
    program: '',
    studentId: '',
    agreeTerms: false,
    emailVerified: false
  });

  const [verificationStep, setVerificationStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    // Mock login
    const mockUser = {
      id: '1',
      name: formData.firstName || 'Usuario',
      email: formData.email,
      verified: true,
      userType: formData.userType || 'student'
    };
    onLogin(mockUser);
    onViewChange('home');
  };

  const handleRegister = () => {
    if (verificationStep === 1) {
      setVerificationStep(2);
    } else if (verificationStep === 2) {
      setVerificationStep(3);
    } else {
      handleLogin(); // Complete registration
    }
  };

  const sendVerificationCode = () => {
    // Mock sending verification code
    console.log('Sending verification code to:', formData.email);
  };

  const verifyEmail = () => {
    // Mock email verification
    if (verificationCode === '123456') {
      setFormData(prev => ({ ...prev, emailVerified: true }));
      setVerificationStep(3);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Home className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-purple-900">CampusHome</h1>
          <p className="text-purple-600">Tu espacio ideal, a un clic del campus</p>
        </div>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="register">Registrarse</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Iniciar Sesión</CardTitle>
                <CardDescription>
                  Ingresa con tu correo institucional de la Universidad del Magdalena
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Institucional</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="email"
                      placeholder="estudiante@unimagdalena.edu.co"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">Recordarme</Label>
                  </div>
                  <Button variant="link" className="text-sm p-0">
                    ¿Olvidaste tu contraseña?
                  </Button>
                </div>

                <Button 
                  className="w-full" 
                  onClick={handleLogin}
                  disabled={!formData.email || !formData.password}
                >
                  Iniciar Sesión
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    ¿No tienes cuenta?{' '}
                    <Button 
                      variant="link" 
                      className="p-0 text-purple-600"
                      onClick={() => setCurrentTab('register')}
                    >
                      Regístrate aquí
                    </Button>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Crear Cuenta</CardTitle>
                <CardDescription>
                  Únete a la comunidad de estudiantes de la Universidad del Magdalena
                </CardDescription>
              </CardHeader>
              <CardContent>
                {verificationStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Institucional</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="email"
                          placeholder="estudiante@unimagdalena.edu.co"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <p className="text-xs text-gray-600">
                        Debes usar tu correo institucional para verificar tu identidad
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="phone"
                          placeholder="+57 300 123 4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Tipo de Usuario</Label>
                      <Select value={formData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu rol" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="w-4 h-4" />
                              Estudiante
                            </div>
                          </SelectItem>
                          <SelectItem value="owner">
                            <div className="flex items-center gap-2">
                              <Home className="w-4 h-4" />
                              Propietario de Alojamiento
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.userType === 'student' && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="studentId">Código Estudiantil</Label>
                          <Input
                            id="studentId"
                            placeholder="20221234567"
                            value={formData.studentId}
                            onChange={(e) => handleInputChange('studentId', e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Programa Académico</Label>
                          <Select value={formData.program} onValueChange={(value) => handleInputChange('program', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona tu programa" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ing-sistemas">Ingeniería de Sistemas</SelectItem>
                              <SelectItem value="ing-civil">Ingeniería Civil</SelectItem>
                              <SelectItem value="medicina">Medicina</SelectItem>
                              <SelectItem value="derecho">Derecho</SelectItem>
                              <SelectItem value="administracion">Administración de Empresas</SelectItem>
                              <SelectItem value="psicologia">Psicología</SelectItem>
                              <SelectItem value="otros">Otros</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeTerms', checked)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        Acepto los{' '}
                        <Button variant="link" className="p-0 text-purple-600 text-sm">
                          términos y condiciones
                        </Button>
                        {' '}y{' '}
                        <Button variant="link" className="p-0 text-purple-600 text-sm">
                          política de privacidad
                        </Button>
                      </Label>
                    </div>

                    <Button 
                      className="w-full" 
                      onClick={handleRegister}
                      disabled={!formData.agreeTerms || !formData.email || !formData.password}
                    >
                      Verificar Correo Institucional
                    </Button>
                  </div>
                )}

                {verificationStep === 2 && (
                  <div className="space-y-4 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Verifica tu correo institucional
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Hemos enviado un código de verificación a<br />
                        <span className="font-medium">{formData.email}</span>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="verificationCode">Código de Verificación</Label>
                      <Input
                        id="verificationCode"
                        placeholder="Ingresa el código de 6 dígitos"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className="text-center text-lg tracking-widest"
                        maxLength={6}
                      />
                    </div>

                    <Button 
                      className="w-full" 
                      onClick={verifyEmail}
                      disabled={verificationCode.length !== 6}
                    >
                      Verificar Código
                    </Button>

                    <Button variant="link" onClick={sendVerificationCode}>
                      ¿No recibiste el código? Reenviar
                    </Button>
                  </div>
                )}

                {verificationStep === 3 && (
                  <div className="space-y-4 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        ¡Verificación Exitosa!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Tu cuenta ha sido verificada correctamente. Ahora puedes acceder a todas las funciones de CampusHome.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-blue-900">Cuenta Verificada</span>
                      </div>
                      <p className="text-sm text-blue-700">
                        Tu correo institucional ha sido confirmado. Esto te da acceso a:
                      </p>
                      <ul className="text-sm text-blue-700 mt-2 space-y-1">
                        <li>• Chat directo con propietarios</li>
                        <li>• Sistema de reseñas y calificaciones</li>
                        <li>• Participación en la comunidad estudiantil</li>
                        <li>• Certificación verde y sostenibilidad</li>
                      </ul>
                    </div>

                    <Button className="w-full" onClick={handleRegister}>
                      Comenzar a Explorar
                    </Button>
                  </div>
                )}

                {verificationStep === 1 && (
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                      ¿Ya tienes cuenta?{' '}
                      <Button 
                        variant="link" 
                        className="p-0 text-purple-600"
                        onClick={() => setCurrentTab('login')}
                      >
                        Inicia sesión aquí
                      </Button>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">Nota de Seguridad</h4>
                  <p className="text-sm text-amber-800">
                    CampusHome está diseñada para conectar estudiantes universitarios con alojamientos verificados. 
                    No está destinada para recopilar información personal sensible (PII) ni manejar datos confidenciales.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}