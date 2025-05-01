
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ConsultationCardProps {
  title: string;
  question: string;
  doctor: string;
  specialty: string;
}

const ConsultationCard = ({ title, question, doctor, specialty }: ConsultationCardProps) => {
  return (
    <Card className="mb-6 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-italiavet-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{question}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-italiavet-green text-white flex items-center justify-center mr-2">
            <span className="text-sm">👨‍⚕️</span>
          </div>
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
