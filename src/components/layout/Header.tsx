
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 flex items-center">
            <img 
              src="/lovable-uploads/bf5e0fad-44db-4a76-ae4f-f091ae6bde66.png" 
              alt="ITALIAVET Logo" 
              className="h-12" 
            />
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-italiavet-green hover:bg-italiavet-green/90 text-white font-medium">
              Richiedi consulto
            </Button>
          </div>
        </div>
        
        <div className="mt-4 text-center md:text-left">
          <h2 className="text-lg md:text-xl text-italiavet-text font-medium">
            Chiedi ai nostri veterinari specializzati. Consulti medici online per cani e gatti.
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Le risposte degli specialisti alle tue domande sulla salute: sintomi e malattie, diagnosi ed esami, farmaci e cure.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
