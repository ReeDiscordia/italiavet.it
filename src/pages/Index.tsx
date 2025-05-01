
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ConsultationCard from "@/components/consultation/ConsultationCard";

const consultations = [
  {
    id: 1,
    title: "Problema di testicolo non sceso in cucciolo",
    question: "Buongiorno, ho un cucciolo con un solo testicolo sceso. Vorrei sapere se è necessario rimuovere chirurgicamente quello che non è sceso e, in caso affermativo, se si tratta di un intervento complesso o rischioso. Quanto dura il recupero? Grazie mille per il chiarimento.",
    doctor: "il Dott. Marco Ferri",
    specialty: "Specialista in chirurgia"
  },
  {
    id: 2,
    title: "Gatto che lecca l'intonaco del muro",
    question: "Salve, ho notato che il mio gatto ogni tanto lecca l'intonaco del muro. È un comportamento normale? Devo preoccuparmi?",
    doctor: "la Dott.ssa Carla Maria Gentili",
    specialty: "Esperta in medicina interna e nutrizione felina"
  },
  {
    id: 3,
    title: "Terza palpebra visibile in un gatto",
    question: "Il mio gatto mangia, dorme e gioca come sempre, sembra stare bene, ma ho notato che si vede la terza palpebra in entrambi gli occhi. È normale? Grazie.",
    doctor: "il Dott. Francesco Saverio Neri",
    specialty: "Specialista in oftalmologia veterinaria"
  },
  {
    id: 4,
    title: "Diarrea persistente in cane",
    question: "Da febbraio il mio cagnolino ha episodi di diarrea (a volte con sangue) che durano anche una settimana, soprattutto dopo le passeggiate. È vispa, mangia bene e sta bene nel complesso. Abbiamo fatto ecografie, analisi feci negative, cure con antibiotico e cortisone. Con il cibo casalingo è migliorato per un mese, poi la diarrea è tornata. Il mio veterinario sta provando diverse terapie, ma non troviamo la causa. Avete suggerimenti o ipotesi da valutare?",
    doctor: "la Dott.ssa Silvia Romano",
    specialty: "Specialista in gastroenterologia"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
              {consultations.map((consultation, index) => (
                <ConsultationCard
                  key={consultation.id}
                  title={consultation.title}
                  question={consultation.question}
                  doctor={consultation.doctor}
                  specialty={consultation.specialty}
                  index={index}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-italiavet-green hover:bg-italiavet-green/90 text-white font-medium">
                Richiedi consulto
              </Button>
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
              <img 
                src="/lovable-uploads/f7ff5aff-9055-4044-b74c-76dfbeed3add.png" 
                alt="ITALIAVET Logo" 
                className="h-10 brightness-0 invert" 
              />
              <span className="ml-2 text-lg font-bold">Italia<span className="text-[#FEC6A1]">Vet</span></span>
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
    </div>
  );
};

export default Index;
