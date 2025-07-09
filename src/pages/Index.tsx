import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ConsultationCard from "@/components/consultation/ConsultationCard";
const consultations = [{
  id: 1,
  title: "Problema di testicolo non sceso in cucciolo",
  question: "Buongiorno, ho un cucciolo con un solo testicolo sceso. Vorrei sapere se è necessario rimuovere chirurgicamente quello che non è sceso e, in caso affermativo, se si tratta di un intervento complesso o rischioso. Quanto dura il recupero? Grazie mille per il chiarimento.",
  doctor: "il Dott. Marco Ferri",
  specialty: "Specialista in chirurgia"
}, {
  id: 2,
  title: "Gatto che lecca l'intonaco del muro",
  question: "Salve, ho notato che il mio gatto ogni tanto lecca l'intonaco del muro. È un comportamento normale? Devo preoccuparmi?",
  doctor: "la Dott.ssa Carla Maria Gentili",
  specialty: "Esperta in medicina interna e nutrizione felina"
}, {
  id: 3,
  title: "Terza palpebra visibile in un gatto",
  question: "Il mio gatto mangia, dorme e gioca come sempre, sembra stare bene, ma ho notato che si vede la terza palpebra in entrambi gli occhi. È normale? Grazie.",
  doctor: "il Dott. Francesco Saverio Neri",
  specialty: "Specialista in oftalmologia veterinaria"
}, {
  id: 4,
  title: "Diarrea persistente in cane",
  question: "Da febbraio il mio cagnolino ha episodi di diarrea (a volte con sangue) che durano anche una settimana, soprattutto dopo le passeggiate. È vispa, mangia bene e sta bene nel complesso. Abbiamo fatto ecografie, analisi feci negative, cure con antibiotico e cortisone. Con il cibo casalingo è migliorato per un mese, poi la diarrea è tornata. Il mio veterinario sta provando diverse terapie, ma non troviamo la causa. Avete suggerimenti o ipotesi da valutare?",
  doctor: "la Dott.ssa Silvia Romano",
  specialty: "Specialista in gastroenterologia"
}];
const Index = () => {
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-2/3">
            <div className="bg-white p-4 mb-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-italiavet-green mb-2">Consulti di oggi</h2>
              <p className="text-gray-600 mb-0">Leggi le ultime domande e risposte dei nostri specialisti</p>
            </div>
            
            <div className="space-y-6">
              {consultations.map((consultation, index) => <ConsultationCard key={consultation.id} title={consultation.title} question={consultation.question} doctor={consultation.doctor} specialty={consultation.specialty} index={index} />)}
            </div>
            
            <div className="mt-8 text-center">
              <a href="https://form.jotform.com/251203819420347" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-italiavet-green hover:bg-italiavet-green/90 text-white font-medium">
                  Richiedi consulto
                </Button>
              </a>
            </div>

            {/* WhatsApp Consultation Box */}
            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Hai una domanda urgente? Scrivici su WhatsApp per ricevere una risposta rapida dal nostro team veterinario.</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 flex items-center gap-2"><span className="text-green-500">✓</span> Puoi inviare foto e video del tuo animale.</p>
                    <p className="text-gray-600 flex items-center gap-2"><span className="text-green-500">✓</span> Risposta entro poche ore.</p>
                  </div>
                  <p className="text-gray-700 mb-4 font-medium">Niente più attese, niente stress. Scrivici ora!</p>
                  <a href="https://preview--pocketvet-benvenuto-chat.lovable.app" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2">
                      <img src="/lovable-uploads/c936bb02-81f9-4d9b-ba49-3f3113013125.png" alt="WhatsApp" className="w-5 h-5" />
                      Parla ora con un veterinario – costo 7€
                    </Button>
                  </a>
                  <p className="text-xs text-gray-500 mt-2 text-center">Pagamento sicuro con PayPal, carta di credito o Apple/Google Pay</p>
                </div>
                <div className="flex-shrink-0">
                  <img src="/lovable-uploads/000f984b-b503-4282-a557-4723e3faf63c.png" alt="Veterinaria rassicurante" className="w-32 h-32 object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-1/3">
            <Sidebar />
          </div>
        </div>
      </main>
      
      <footer className="bg-italiavet-green text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <img src="/lovable-uploads/f7ff5aff-9055-4044-b74c-76dfbeed3add.png" alt="ITALIAVET Logo" className="h-10 brightness-0 invert" />
              <p className="ml-4 text-sm opacity-80">© 2025 - Consulenza veterinaria online</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-italiavet-light transition-colors">Privacy</a>
              <a href="#" className="text-white hover:text-italiavet-light transition-colors">Termini</a>
              <a href="#" className="text-white hover:text-italiavet-light transition-colors">Contatti</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;