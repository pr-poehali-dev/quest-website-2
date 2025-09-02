import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Skull" className="h-8 w-8 text-primary" />
            <span className="font-oswald text-2xl font-bold text-primary">HORROR QUEST</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Погрузитесь в мир ужаса и адреналина. Испытайте свои нервы на прочность в наших захватывающих квестах.
          </p>
          <div className="flex justify-center space-x-6 pt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" className="h-6 w-6" />
            </a>
          </div>
          <div className="border-t border-border pt-6 text-sm text-muted-foreground">
            <p>© 2024 Horror Quest. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}