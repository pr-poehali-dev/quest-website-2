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

const quests = [
  {
    id: 1,
    title: 'Проклятый Особняк',
    description: 'Старинный особняк хранит темные тайны. Сможете ли вы раскрыть правду и выбраться живыми?',
    difficulty: 'Эксперт',
    duration: '60 мин',
    players: '2-6 чел',
    price: 3500,
    image: 'img/64b686da-6d0c-456b-ab54-49a74076beac.jpg'
  },
  {
    id: 2,
    title: 'Камера Пыток',
    description: 'Средневековая камера пыток полна ловушек. Найдите выход, пока не стало слишком поздно.',
    difficulty: 'Сложный',
    duration: '45 мин',
    players: '3-5 чел',
    price: 3000,
    image: 'img/be4cebfc-ce11-418c-a408-391fb02646bc.jpg'
  },
  {
    id: 3,
    title: 'Больница Ужасов',
    description: 'Заброшенная психиатрическая больница. Духи пациентов не дают покоя...',
    difficulty: 'Эксперт',
    duration: '70 мин',
    players: '4-8 чел',
    price: 4000,
    image: 'img/64b686da-6d0c-456b-ab54-49a74076beac.jpg'
  }
];

const reviews = [
  { name: 'Анна К.', rating: 5, text: 'Невероятные ощущения! Адреналин зашкаливал до самого конца.' },
  { name: 'Дмитрий П.', rating: 5, text: 'Лучший квест в городе. Атмосфера на высоте, загадки интересные.' },
  { name: 'Мария В.', rating: 4, text: 'Очень страшно и увлекательно. Рекомендую любителям острых ощущений.' }
];

export default function Index() {
  const [selectedQuest, setSelectedQuest] = useState(quests[0]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [playerCount, setPlayerCount] = useState('');

  const timeSlots = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];

  return (
    <div className="min-h-screen bg-background font-roboto">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${quests[0].image})` }}
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

      {/* Quests Section */}
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

      {/* Booking Section */}
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

      {/* Prices Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">Цены</h2>
            <p className="text-muted-foreground text-lg">Доступные цены для незабываемых впечатлений</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 border-border bg-card">
              <CardHeader>
                <CardTitle className="font-oswald text-2xl">Будни</CardTitle>
                <CardDescription>Понедельник - четверг</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-4">от 2500₽</div>
                <p className="text-sm text-muted-foreground">за команду</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-primary ring-2 ring-primary bg-primary/5">
              <CardHeader>
                <Badge className="bg-primary text-primary-foreground mx-auto mb-2">Популярно</Badge>
                <CardTitle className="font-oswald text-2xl">Выходные</CardTitle>
                <CardDescription>Пятница - воскресенье</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-4">от 3500₽</div>
                <p className="text-sm text-muted-foreground">за команду</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-border bg-card">
              <CardHeader>
                <CardTitle className="font-oswald text-2xl">VIP</CardTitle>
                <CardDescription>Премиум квесты</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-4">от 5000₽</div>
                <p className="text-sm text-muted-foreground">за команду</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">Галерея</h2>
            <p className="text-muted-foreground text-lg">Взгляните на атмосферу наших квестов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quests.map((quest, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src={quest.image} 
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Icon name="Eye" className="h-4 w-4 mr-2" />
                    Смотреть
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">Отзывы</h2>
            <p className="text-muted-foreground text-lg">Что говорят наши гости</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <p className="font-semibold">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">Правила</h2>
            <p className="text-muted-foreground text-lg">Важная информация для участников</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="AlertTriangle" className="h-5 w-5 mr-2 text-yellow-500" />
                  Безопасность
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>• Запрещено участие лицам младше 16 лет без сопровождения взрослых</p>
                <p>• При проблемах со здоровьем предупредите администратора</p>
                <p>• В экстренной ситуации сообщите слово "ФИНИШ"</p>
                <p>• Запрещено употребление алкоголя</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="h-5 w-5 mr-2 text-blue-500" />
                  Бронирование
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>• Бронирование действует 15 минут после указанного времени</p>
                <p>• Отмена за 24 часа - возврат 100% стоимости</p>
                <p>• Отмена менее чем за 24 часа - возврат 50%</p>
                <p>• Перенос даты возможен за 12 часов до игры</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-full">
                  <Icon name="MapPin" className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Адрес</h4>
                  <p className="text-muted-foreground">ул. Страшная, д. 13, подвал 666</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-full">
                  <Icon name="Phone" className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Телефон</h4>
                  <p className="text-muted-foreground">+7 (666) 13-13-13</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-full">
                  <Icon name="Mail" className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">horror@quest.ru</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-full">
                  <Icon name="Clock" className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Режим работы</h4>
                  <p className="text-muted-foreground">Ежедневно с 10:00 до 23:00</p>
                </div>
              </div>
            </div>
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" placeholder="Ваш телефон" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea 
                    id="contact-message" 
                    placeholder="Ваше сообщение..." 
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Send" className="h-4 w-4 mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}