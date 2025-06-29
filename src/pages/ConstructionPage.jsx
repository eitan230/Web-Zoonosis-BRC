import { Wrench } from 'lucide-react';

export default function ConstructionPage() {
  const handleGoHome = () => {
    // Aquí puedes cambiar la URL por la de tu página principal
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="text-center">
        <Wrench className="w-16 h-16 text-gray-600 mx-auto mb-6" />
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          En Construcción
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Esta página está siendo desarrollada
        </p>
        
        <button 
          onClick={handleGoHome}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}