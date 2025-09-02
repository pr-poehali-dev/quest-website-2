import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  backgroundImage: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center space-y-6 px-4 animate-fade-in">
        <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white mb-4">
          HORROR QUEST
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Погрузитесь в мир ужаса и адреналина. Испытайте свои нервы на прочность.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-oswald text-lg animate-hover-glow">
            <Icon name="Calendar" className="h-5 w-5 mr-2" />
            Забронировать
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            <Icon name="Play" className="h-5 w-5 mr-2" />
            Смотреть видео
          </Button>
        </div>
      </div>
    </section>
  );
}