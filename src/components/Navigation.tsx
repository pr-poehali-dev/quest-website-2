import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Skull" className="h-8 w-8 text-primary" />
          <span className="font-oswald text-2xl font-bold text-primary">HORROR QUEST</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-primary transition-colors">Главная</a>
          <a href="#quests" className="hover:text-primary transition-colors">Квесты</a>
          <a href="#booking" className="hover:text-primary transition-colors">Бронирование</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
          <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Icon name="Phone" className="h-4 w-4 mr-2" />
          Позвонить
        </Button>
      </div>
    </nav>
  );
}