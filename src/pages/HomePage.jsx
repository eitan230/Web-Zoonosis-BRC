import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Heart,
  Shield,
  Calendar,
  FileText,
  Users,
  Database,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  PawPrint,
  UserCheck,
  Settings,
} from "lucide-react";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();

  const handleEnDesarrollo = () => {
  navigate('/Desarrollo');
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-blue-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                <img
                  src="/sanidadLogo.jpg"
                  alt="Municipio Bariloche"
                  className="w-16 h-16 rounded-4xl object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Sanidad Animal
                </h1>
                <p className="text-xs text-gray-600">Sistema Digital</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
              >
                Servicios
              </a>
              <a
                href="/Desarrollo"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
              >
                Adopciones
              </a>
              <a
                href="#contacto"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
              >
                Contacto
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <button onClick={handleEnDesarrollo} className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-4 py-2 rounded-lg transition-colors font-medium flex items-center space-x-2">
                <UserCheck className="w-4 h-4" />
                <span>Ciudadano</span>
              </button>
              <button onClick={handleEnDesarrollo} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors font-medium flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Admin</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-24 pb-12 px-12 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                <span>Cuidando a nuestros animales</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sistema Digital de
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-800">
                  {" "}
                  Sanidad Animal
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Modernizamos la gestión del área de Sanidad Animal de Bariloche
                para brindar mejor atención a los ciudadanos y promover el
                bienestar animal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleEnDesarrollo} className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[blue-800] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg">
                <Calendar className="w-5 h-5" />
                <span>Solicitar Turno</span>
              </button>
              <button onClick={handleEnDesarrollo} className="bg-white hover:bg-gray-50 text-gray-600 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all">
                <Heart className="w-5 h-5" />
                <span>Ver Adopciones</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Animales atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Disponibilidad</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Gestión Integral
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Control completo de animales y ciudadanos
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: Calendar,
                      label: "Gestión de Turnos",
                      active: activeFeature === 0,
                    },
                    {
                      icon: FileText,
                      label: "Sistema de Denuncias",
                      active: activeFeature === 1,
                    },
                    {
                      icon: Heart,
                      label: "Módulo de Adopciones",
                      active: activeFeature === 2,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                        item.active
                          ? "bg-blue-50 border-l-4 border-[#FF6B35]"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <item.icon
                        className={`w-5 h-5 ${
                          item.active ? "text-[#E55A2B]" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          item.active ? "text-[#CC4F24]" : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Servicios del Sistema
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una plataforma completa que digitaliza todos los procesos del área
              de Sanidad Animal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Gestión de Turnos",
                description:
                  "Solicita, confirma y gestiona turnos de manera digital. Recibe notificaciones automáticas con instrucciones previas.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: FileText,
                title: "Sistema de Denuncias",
                description:
                  "Carga denuncias online, adjunta documentación y realiza seguimiento hasta su derivación al juez de faltas.",
                color: "from-red-500 to-red-600",
              },
              {
                icon: Heart,
                title: "Adopciones",
                description:
                  "Encuentra tu compañero ideal. Listado completo con fotos, información de salud y filtros por especie.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Database,
                title: "Base de Datos Centralizada",
                description:
                  "Información completa de animales, propietarios, historiales médicos y documentación en un solo lugar.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Users,
                title: "Panel Ciudadano",
                description:
                  "Acceso personal para ver historial de turnos, animales registrados y estado de denuncias realizadas.",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: Shield,
                title: "Panel Administrativo",
                description:
                  "Herramientas completas para gestión, estadísticas y generación de reportes para la Municipalidad.",
                color: "from-gray-600 to-gray-700",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div
                  className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Sabías Que Section */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Información Veterinaria
      </h2>
      <p className="text-xl text-gray-600">
        Guías esenciales para el cuidado de tu mascota
      </p>
    </div>
     
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-80 h-60 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl overflow-hidden flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop&crop=center" 
              alt="Cachorro recibiendo vacuna" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-2xl mb-4">Plan de Vacunación en Cachorros Caninos</h3>
            <div className="text-gray-700 space-y-3">
              <p>• La vacunación preventiva ayuda a proteger a tu cachorro perruno de muchas enfermedades mortales.</p>
              <p>• A partir de los 45 días de vida, debe empezar su plan de vacunación.</p>
              <p>• Consta de 3 dosis de vacuna quíntuple (Distemper (moquillo), Parvovirosis, Leptospirosis, Parainfluenza, Adenovirus). Una dosis cada 3 semanas. Y al finalizar este plan se recomienda aplicar la vacuna antirrábica.</p>
              <p className="font-semibold text-red-600">No lo lleves a la calle, plaza, playa, etc, hasta no tener su plan de vacunación COMPLETO!</p>
            </div>
          </div>
        </div>
         
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-80 h-60 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl overflow-hidden flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop&crop=center" 
              alt="Veterinario aplicando vacuna antirrábica" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-2xl mb-4">La Rabia</h3>
            <div className="text-gray-700 space-y-3">
              <p>• LA RABIA es una enfermedad mortal que se transmite de los animales al humano por mordeduras o arañazos.</p>
              <p>• La forma de contagio es principalmente a través de los murciélagos a felinos y canes.</p>
              <p>• Para evitar el contagio vacuna anualmente a tus animales de compañía de más de 3 meses de edad.</p>
              <p className="font-semibold text-blue-600">• Es obligatorio por Ley Nac. Nº22.953</p>
              <p className="italic text-gray-600">Consultá donde estamos vacunando cada semana en nuestras redes sociales.</p>
            </div>
          </div>
        </div>
         
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-80 h-60 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl overflow-hidden flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop&crop=center" 
              alt="Perro adulto siendo vacunado" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-2xl mb-4">Plan de Vacunación en Adultos Caninos</h3>
            <div className="text-gray-700 space-y-3">
              <p>• La vacunación preventiva ayuda a proteger a tu perro adulto de muchas enfermedades mortales.</p>
              <p>• Se debe vacunar con 1 dosis de vacuna séxtuple (moquillo, coronavirus, leptospirosis, parainfluenza, tos de la perrera y hepatitis) y 1 dosis de vacuna antirrábica.</p>
              <p>• Estas vacunas se renuevan todos los años, durante toda la vida del animal.</p>
              <p className="font-semibold text-green-600">La vacunación ayuda a PREVENIR.</p>
              <p className="italic text-gray-600">Recordá mirar periódicamente el carnet de vacuna de tu perro.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Contacto
            </h2>
            <p className="text-xl text-gray-600">
              Sanidad animal - Municipalidad de Bariloche
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Teléfono
              </h3>
              <p className="text-gray-700">0294 442-6262</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-700">Sanidadmunibariloche@gmail.com</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dirección
              </h3>
              <p className="text-gray-700">
                San José 8400, San Carlos de Bariloche, Río Negro
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/sanidadanimalbariloche/?locale=es_LA"
                target="_blank"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/sanidadanimalbariloche/?e=2388eedb-6cd0-4a1b-9b1b-79915a9e23d4&g=5"
                target="_blank"
                className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f05923] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                  <PawPrint className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sanidad Animal</h3>
                  <p className="text-white text-sm">Sistema Digital</p>
                </div>
              </div>
              <p className="text-white">
                Modernizando la gestión del área de Zoonosis para una mejor
                atención ciudadana y bienestar animal.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <a
                  href="/Desarrollo"
                  className="block text-white hover:text-gray-400 transition-colors"
                >
                  Solicitar Turno
                </a>
                <a
                  href="/Desarrollo"
                  className="block text-white hover:text-gray-400 transition-colors"
                >
                  Adopciones
                </a>
                <a
                  href="/Desarrollo"
                  className="block text-white hover:text-gray-400 transition-colors"
                >
                  Denuncias
                </a>
                <a
                  href="#contacto"
                  className="block text-white hover:text-gray-400 transition-colors"
                >
                  Contacto
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Información</h4>
              <div className="space-y-2 text-white">
                <p>Junio 2025</p>
                <p>Municipalidad de Bariloche</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white">
            <p>
              &copy; 2025 Sistema Zoonosis Bariloche. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
