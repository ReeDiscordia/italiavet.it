
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-italiavet-green text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/f7ff5aff-9055-4044-b74c-76dfbeed3add.png" 
                alt="ITALIAVET Logo" 
                className="h-16 drop-shadow-md brightness-0 invert"
              />
              <span className="ml-2 text-xl font-bold text-[#FEC6A1]">Vet</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-white hover:bg-italiavet-light text-italiavet-green hover:text-italiavet-green font-medium transition-colors">
              Richiedi consulto
            </Button>
          </div>
        </div>
        
        <div className="mt-4 text-center md:text-left">
          <h2 className="text-lg md:text-xl text-white font-medium">
            Chiedi ai nostri veterinari specializzati. Consulti medici online per cani e gatti.
          </h2>
          <p className="text-sm md:text-base text-italiavet-light mt-2 opacity-90">
            Le risposte degli specialisti alle tue domande sulla salute: sintomi e malattie, diagnosi ed esami, farmaci e cure.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
