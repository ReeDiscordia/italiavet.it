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
    // Open a new window with collaboration message
    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="it">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Collabora con ItaliaVet</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .container {
              border: 1px solid #e0e0e0;
              border-radius: 8px;
              padding: 30px;
              margin-top: 40px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 {
              color: #04395e;
              margin-bottom: 20px;
            }
            .highlight {
              color: #ff7b29;
              font-weight: bold;
            }
            .email {
              font-weight: bold;
              color: #04395e;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Collabora con Italia<span class="highlight">Vet</span></h1>
            <p>Se sei interessato a collaborare con ItaliaVet e vuoi entrare a far parte del nostro team di specialisti, scrivi a questa email:</p>
            <p class="email">italiavet.info@gmail.com</p>
            <p>Saremo lieti di fornirti tutte le informazioni necessarie per iniziare questa collaborazione professionale.</p>
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <div className="space-y-6">

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Argomenti più discussi</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {popularTopics.map((topic, index) => (
              <li key={index}>
                <span className="text-italiavet-blue block py-2 px-3 rounded-md hover:bg-italiavet-light transition-colors cursor-default">
                  {topic}
                </span>
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
          <Button onClick={handleSpecialistRegistration} className="w-full bg-italiavet-blue hover:bg-italiavet-blue/90 text-white font-medium">
            Registrati come specialista
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;