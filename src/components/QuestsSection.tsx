import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export interface Quest {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  players: string;
  price: number;
  image: string;
}

interface QuestsSectionProps {
  quests: Quest[];
}

export default function QuestsSection({ quests }: QuestsSectionProps) {
  return (
    <section id="quests" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">Наши Квесты</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Каждый квест - это уникальная история ужаса, которая заставит ваше сердце биться быстрее
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quests.map((quest) => (
            <Card key={quest.id} className="group hover:shadow-2xl transition-all duration-300 border-border bg-card hover:bg-card/80">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={quest.image} 
                  alt={quest.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive" className="bg-primary text-primary-foreground">
                    {quest.difficulty}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-oswald text-xl">{quest.title}</CardTitle>
                <CardDescription className="text-sm">{quest.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Icon name="Clock" className="h-4 w-4 mr-1" />
                    {quest.duration}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" className="h-4 w-4 mr-1" />
                    {quest.players}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-2xl text-primary">{quest.price} ₽</span>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Выбрать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}