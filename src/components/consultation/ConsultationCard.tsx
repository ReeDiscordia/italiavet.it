
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ConsultationCardProps {
  title: string;
  question: string;
  doctor: string;
  specialty: string;
  index: number;
}

const getBackgroundColor = (index: number): string => {
  const colors = [
    "bg-[#F2FCE2]", // Soft Green
    "bg-[#FEF7CD]", // Soft Yellow
    "bg-[#E5DEFF]", // Soft Purple
    "bg-[#D3E4FD]"  // Soft Blue
  ];
  return colors[index % colors.length];
};

const getAvatarImageByName = (doctorName: string): { src: string; fallback: string } => {
  // Extract first name from "il Dott. Marco Ferri" or "la Dott.ssa Carla Maria Gentili"
  const isFemale = doctorName.includes("Dott.ssa");
  const nameParts = doctorName.split(' ');
  const firstName = nameParts.length > 2 ? nameParts[2] : "";
  const initials = firstName.substring(0, 1);
  
  // Different avatars based on gender
  if (isFemale) {
    return {
      src: `https://api.dicebear.com/7.x/personas/svg?seed=${firstName}&hair=variant01,variant02,variant03&hairColor=9e622c,5e452a,761600,2c222b&backgroundColor=fff7e1`,
      fallback: initials
    };
  } else {
    return {
      src: `https://api.dicebear.com/7.x/personas/svg?seed=${firstName}&hair=variant07,variant08,variant09&glassesProbability=50&hairColor=9e622c,5e452a,761600,2c222b&backgroundColor=fff7e1`,
      fallback: initials
    };
  }
};

const ConsultationCard = ({ title, question, doctor, specialty, index }: ConsultationCardProps) => {
  const backgroundColor = getBackgroundColor(index);
  const avatar = getAvatarImageByName(doctor);
  const isFemale = doctor.includes("Dott.ssa");
  
  return (
    <Card className={`mb-6 hover:shadow-md transition-shadow ${backgroundColor} border-none`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-italiavet-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{question}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-2 border border-gray-200">
            <AvatarImage src={avatar.src} alt={doctor} />
            <AvatarFallback className={isFemale ? "bg-pink-100 text-pink-800" : "bg-blue-100 text-blue-800"}>
              {avatar.fallback}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Risponde {doctor}</p>
            <p className="text-xs text-gray-600">{specialty}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ConsultationCard;
