import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';
import { Quest } from './QuestsSection';

interface BookingSectionProps {
  quests: Quest[];
}

export default function BookingSection({ quests }: BookingSectionProps) {
  const [selectedQuest, setSelectedQuest] = useState(quests[0]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [playerCount, setPlayerCount] = useState('');

  const timeSlots = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];

  return (
    <section id="booking" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">Бронирование</h2>
          <p className="text-muted-foreground text-lg">
            Выберите квест, дату и время. Мы свяжемся с вами для подтверждения
          </p>
        </div>
        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <Tabs defaultValue="select-quest" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="select-quest">Выбор квеста</TabsTrigger>
                <TabsTrigger value="date-time">Дата и время</TabsTrigger>
                <TabsTrigger value="contact">Контакты</TabsTrigger>
              </TabsList>
              
              <TabsContent value="select-quest" className="space-y-6">
                <div className="grid gap-6">
                  <div>
                    <Label className="text-base font-semibold">Выберите квест</Label>
                    <div className="grid gap-4 mt-4">
                      {quests.map((quest) => (
                        <Card 
                          key={quest.id} 
                          className={`cursor-pointer transition-all ${
                            selectedQuest.id === quest.id ? 'ring-2 ring-primary bg-primary/10' : 'hover:bg-muted/50'
                          }`}
                          onClick={() => setSelectedQuest(quest)}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-semibold">{quest.title}</h4>
                                <p className="text-sm text-muted-foreground">{quest.players} • {quest.duration}</p>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-lg">{quest.price} ₽</div>
                                <Badge variant="outline">{quest.difficulty}</Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="date-time" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Выберите дату</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold">Время</Label>
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className={selectedTime === time ? "bg-primary text-primary-foreground" : ""}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="players" className="text-base font-semibold">Количество игроков</Label>
                      <Select value={playerCount} onValueChange={setPlayerCount}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Выберите количество" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 человека</SelectItem>
                          <SelectItem value="3">3 человека</SelectItem>
                          <SelectItem value="4">4 человека</SelectItem>
                          <SelectItem value="5">5 человек</SelectItem>
                          <SelectItem value="6">6 человек</SelectItem>
                          <SelectItem value="7">7 человек</SelectItem>
                          <SelectItem value="8">8 человек</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="contact" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Имя*</Label>
                    <Input id="name" placeholder="Ваше имя" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон*</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="promo">Промокод</Label>
                    <Input id="promo" placeholder="Есть промокод?" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea 
                    id="comment" 
                    placeholder="Особые пожелания или вопросы..." 
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <div className="pt-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Итого к оплате:</span>
                    <span className="text-2xl font-bold text-primary">{selectedQuest.price} ₽</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12">
                    <Icon name="CreditCard" className="h-5 w-5 mr-2" />
                    Забронировать квест
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}