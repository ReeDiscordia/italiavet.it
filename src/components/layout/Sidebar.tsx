
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const popularTopics = [
  "Parvovirosi nel cucciolo",
  "Leishmaniosi",
  "Diarrea persistente",
  "Test FIV/FeLV nel gatto",
  "Integratori"
];

const Sidebar = () => {
  const handleSpecialistRegistration = () => {
    window.location.href = "mailto:italiavet.info@gmail.com?subject=Registrazione%20specialista&body=Vorrei%20registrarmi%20come%20specialista";
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Richiedi un consulto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Hai una domanda per i nostri veterinari? Invia la tua richiesta e riceverai una risposta da uno specialista.
          </p>
          <a href="https://form.jotform.com/251203819420347" target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-italiavet-green hover:bg-italiavet-green/90 text-white font-medium">
              Richiedi consulto
            </Button>
          </a>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Argomenti più discussi</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {popularTopics.map((topic, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="text-italiavet-blue hover:underline block py-2 px-3 rounded-md hover:bg-italiavet-light transition-colors"
                >
                  {topic}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-italiavet-light border-italiavet-blue border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Sei un veterinario?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Unisciti al nostro team di specialisti e aiuta i proprietari di animali con le tue competenze.
          </p>
          <Button 
            onClick={handleSpecialistRegistration} 
            className="w-full bg-italiavet-blue hover:bg-italiavet-blue/90 text-white font-medium"
          >
            Registrati come specialista
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
