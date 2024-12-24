import { Power, Monitor, WifiOff, Wrench, ThumbsUp, XCircle } from 'lucide-react';
import { Steps } from '../types/Step';

export const steps: Steps = {
  start: {
    id: 'start',
    question: "L'ordinateur est-il allumé ?",
    icon: <Power className="w-12 h-12 text-blue-500" />,
    yesNext: 'screen',
    noNext: 'power'
  },
  power: {
    id: 'power',
    question: "Vérifiez que l'ordinateur est branché et appuyez sur le bouton d'alimentation. S'allume-t-il maintenant ?",
    icon: <Power className="w-12 h-12 text-red-500" />,
    yesNext: 'screen',
    noNext: 'service'
  },
  screen: {
    id: 'screen',
    question: "L'écran affiche-t-il quelque chose ?",
    icon: <Monitor className="w-12 h-12 text-blue-500" />,
    yesNext: 'internet',
    noNext: 'monitor'
  },
  monitor: {
    id: 'monitor',
    question: "Vérifiez que l'écran est allumé et correctement branché. L'affichage fonctionne-t-il maintenant ?",
    icon: <Monitor className="w-12 h-12 text-yellow-500" />,
    yesNext: 'internet',
    noNext: 'service'
  },
  internet: {
    id: 'internet',
    question: "Avez-vous accès à Internet ?",
    icon: <WifiOff className="w-12 h-12 text-blue-500" />,
    yesNext: 'success',
    noNext: 'end'
  },
  service: {
    id: 'service',
    question: "Veuillez contacter le service technique pour une intervention.",
    icon: <Wrench className="w-12 h-12 text-red-500" />,
    yesNext: 'service',
    noNext: 'service'
  },
  success: {
    id: 'success',
    question: "Tout fonctionne correctement !",
    icon: <ThumbsUp className="w-12 h-12 text-green-500" />,
    yesNext: 'success',
    noNext: 'success'
  },
  end: {
    id: 'end',
    question: "Vérifiez votre connexion réseau ou contactez votre fournisseur d'accès.",
    icon: <XCircle className="w-12 h-12 text-orange-500" />,
    yesNext: 'end',
    noNext: 'end'
  }
};