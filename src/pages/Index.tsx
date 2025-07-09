import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ConsultationCard from "@/components/consultation/ConsultationCard";
import { useState, useEffect } from "react";

const allQuestions = [
  // Domande esistenti
  {
    id: 1,
    title: "Parvovirosi nel cucciolo",
    question: "Il mio cucciolo ha sintomi sospetti di parvovirosi. Quali sono i primi segni da osservare?",
    doctor: "il Dott. Marco Ferri",
    specialty: "Specialista in malattie infettive"
  },
  {
    id: 2,
    title: "Leishmaniosi",
    question: "Vorrei sapere di più sulla leishmaniosi e come proteggere il mio cane.",
    doctor: "la Dott.ssa Carla Maria Gentili",
    specialty: "Esperta in medicina interna"
  },
  {
    id: 3,
    title: "Diarrea persistente",
    question: "Il mio cane ha diarrea da diversi giorni. Quando devo preoccuparmi?",
    doctor: "il Dott. Francesco Saverio Neri",
    specialty: "Specialista in gastroenterologia"
  },
  {
    id: 4,
    title: "Test FIV/FeLV nel gatto",
    question: "È necessario fare il test FIV/FeLV al mio gatto? Quando è consigliato?",
    doctor: "la Dott.ssa Silvia Romano",
    specialty: "Specialista in medicina felina"
  },
  {
    id: 5,
    title: "Integratori",
    question: "Quali integratori sono davvero utili per la salute del mio animale?",
    doctor: "il Dott. Andrea Palumbo",
    specialty: "Veterinario nutrizionista"
  },
  // Nuove domande
  {
    id: 6,
    title: "Occhio rosso che lacrima",
    question: "Buonasera, in attesa della visita, vorrei sapere se devo preoccuparmi: la mia gattina ha un occhio molto arrossato e lacrima da alcuni giorni. Lo sto pulendo delicatamente con acqua tiepida ma non noto miglioramenti. Qual è il trattamento più indicato in questi casi?",
    doctor: "la Dott.ssa Elisa Bianchi",
    specialty: "Veterinaria esperta in oftalmologia felina"
  },
  {
    id: 7,
    title: "Lipoma ulcerato cane anziano",
    question: "Il mio cane di 14 anni ha un lipoma ulcerato che non è possibile asportare chirurgicamente. Lo sto disinfettando e applico regolarmente le creme prescritte. Esistono terapie aggiuntive o accorgimenti utili per contenere l'ulcerazione e prevenire infezioni?",
    doctor: "il Dr. Marco Giordano",
    specialty: "Veterinario chirurgo con esperienza in geriatria canina"
  },
  {
    id: 8,
    title: "Incontinenza post sterilizzazione",
    question: "La mia cagnolona sterilizzata da anni è in terapia con Propalin per incontinenza urinaria, ma negli ultimi tempi il farmaco sembra meno efficace. Vorrei chiedere un parere sull'uso di Incurin: quando è indicato e quali sono gli effetti collaterali da monitorare?",
    doctor: "la Dott.ssa Chiara Rinaldi",
    specialty: "Veterinaria esperta in urologia e medicina interna"
  },
  {
    id: 9,
    title: "Virus intestinale",
    question: "Una delle mie due cagnoline ha una forte diarrea da alcuni giorni, nonostante il trattamento prescritto dalla clinica. Rifiuta il cibo e non mostra miglioramenti. Vorrei sapere quali sono i passi successivi da seguire e quando è necessario un ricovero.",
    doctor: "il Dr. Lorenzo Moretti",
    specialty: "Medico veterinario con focus in gastroenterologia canina"
  },
  {
    id: 10,
    title: "Dimagrimento cane piccolo",
    question: "Salve, la mia cagnolina di piccola taglia ha perso peso visibilmente nelle ultime settimane, pur mangiando come al solito. Può essere dovuto al caldo oppure è consigliabile fare accertamenti specifici?",
    doctor: "la Dott.ssa Francesca De Luca",
    specialty: "Veterinaria specializzata in patologie metaboliche"
  },
  {
    id: 11,
    title: "Pallina su palpebra",
    question: "Buongiorno, ho notato una piccola massa sulla palpebra del mio cucciolo di 10 mesi. L'ho pulita con fisiologica ma non è cambiato nulla. È opportuno aspettare qualche giorno o è meglio farlo visitare subito?",
    doctor: "il Dr. Matteo Ferrari",
    specialty: "Veterinario con competenze in dermatologia e chirurgia oculare"
  },
  {
    id: 12,
    title: "Goccioline strane su brandina",
    question: "La mia cagnolina sterilizzata di 12 anni lascia occasionalmente delle goccioline sul tessuto dove riposa. Pulendole, noto un alone rosato/giallognolo. Gli esami recenti dell'addome erano nella norma. Potrebbe trattarsi di perdite urinarie o altro? Serve un controllo specifico?",
    doctor: "la Dott.ssa Valentina Serra",
    specialty: "Veterinaria esperta in apparato urinario e riproduttivo"
  },
  {
    id: 13,
    title: "Difficoltà somministrazione compresse",
    question: "Mi è stato prescritto un integratore intestinale in compresse (tipo Florentero) per il mio cane, ma ho grosse difficoltà a somministrarle: sono ruvide e difficili da mascherare nel cibo. Esistono formulazioni equivalenti più semplici da somministrare o alternative liquide?",
    doctor: "il Dr. Fabio Ruggeri",
    specialty: "Veterinario nutrizionista e consulente in gestione farmacologica"
  },
  {
    id: 14,
    title: "Gatto rauco",
    question: "Da ieri il mio gatto adulto ha perso quasi completamente la voce. Il veterinario non ha riscontrato febbre o problemi respiratori e ha suggerito di attendere. In casi del genere, è utile iniziare una terapia preventiva o è corretto monitorare senza intervenire?",
    doctor: "la Dott.ssa Marta Greco",
    specialty: "Veterinaria esperta in medicina felina e malattie respiratorie"
  },
  {
    id: 15,
    title: "Neoformazione sulla coda",
    question: "In pochi giorni si è sviluppata una massa sulla coda della mia cagnolina, che inizialmente sembrava un punto nero. Ha rilasciato materiale denso spontaneamente. È stata programmata l'analisi del contenuto. In questi casi è consigliabile procedere con urgenza anche a una rimozione?",
    doctor: "il Dr. Riccardo Neri",
    specialty: "Medico veterinario specializzato in oncologia e chirurgia dei tessuti molli"
  },
  {
    id: 16,
    title: "Sterilizzazione consigliata da eco",
    question: "Il mio labrador femmina di 11 anni ha effettuato un'ecografia addominale da cui è emersa l'indicazione alla sterilizzazione. Considerando l'età, quali sono i rischi e i benefici dell'intervento? È effettivamente consigliato intervenire in questa fase della vita?",
    doctor: "la Dott.ssa Giulia Marchetti",
    specialty: "Veterinaria con esperienza in chirurgia e gestione del paziente geriatrico"
  },
  {
    id: 17,
    title: "Passaggio crocchette",
    question: "Sto effettuando il passaggio da un tipo di crocchette gastrointestinal low fat a una nuova marca simile. L'indicazione è di farlo in 15 giorni: è un tempo corretto oppure si può ridurre se il cane tollera bene il nuovo alimento?",
    doctor: "il Dr. Andrea Palumbo",
    specialty: "Veterinario nutrizionista"
  },
  {
    id: 18,
    title: "Diarrea con il caldo",
    question: "Negli ultimi giorni il mio cane ha sviluppato episodi di diarrea, pur mangiando crocchette come sempre. È opportuno effettuare controlli specifici in questi casi o può essere un effetto passeggero del caldo?",
    doctor: "la Dott.ssa Laura Conti",
    specialty: "Veterinaria specializzata in medicina interna e disturbi gastrointestinali"
  },
  {
    id: 19,
    title: "Tartufo screpolato",
    question: "Il tartufo del mio cane appare screpolato e leggermente arrossato da un lato. Considerando che tende a tenere spesso il naso a contatto con il terreno, devo farlo visitare subito o posso aspettare il controllo già previsto tra 10 giorni?",
    doctor: "il Dr. Davide Mancini",
    specialty: "Veterinario dermatologo"
  }
];

const getRandomQuestions = () => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
};
const Index = () => {
  const [consultations, setConsultations] = useState<typeof allQuestions>([]);

  useEffect(() => {
    const randomQuestions = getRandomQuestions();
    console.log("Domande estratte per la pagina principale:", randomQuestions);
    setConsultations(randomQuestions);
  }, []);

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
            
            <div className="mt-8 max-w-lg mx-auto">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Richiedi un consulto sul forum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Hai una domanda per i nostri veterinari? Invia la tua richiesta e riceverai una risposta da uno specialista sul forum.</p>
                  <a href="https://form.jotform.com/251203819420347" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-italiavet-green hover:bg-italiavet-green/90 text-white font-medium">
                      Richiedi consulto
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp Consultation Box */}
            <div className="mt-8 bg-gradient-to-br from-green-50 to-green-100 border-green-300 border-2 shadow-lg p-6 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">⚡ Hai una domanda urgente? Scrivici su WhatsApp per ricevere una risposta rapida dal nostro team veterinario.</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 flex items-center gap-2"><span className="text-green-500">✓</span> Puoi inviare foto e video del tuo animale.</p>
                    <p className="text-gray-600 flex items-center gap-2"><span className="text-green-500">✓</span> Risposta entro poche ore.</p>
                  </div>
                  <p className="text-gray-700 mb-4 font-medium">Niente più attese, niente stress. Scrivici ora!</p>
                  <a href="https://form.jotform.com/251895814889378" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2">
                      <img src="/lovable-uploads/c936bb02-81f9-4d9b-ba49-3f3113013125.png" alt="WhatsApp" className="w-5 h-5" />
                      Parla ora con un veterinario – costo 7€
                    </Button>
                  </a>
                  <p className="text-xs text-gray-500 mt-2 text-center">Pagamento sicuro con PayPal, carta di credito o Apple/Google Pay</p>
                </div>
                <div className="flex-shrink-0">
                  <img src="/src/assets/veterinaria-unsplash.jpg" alt="Veterinaria rassicurante" className="w-32 h-32 object-cover object-top rounded-lg" />
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