import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Quest } from './QuestsSection';

interface Review {
  name: string;
  rating: number;
  text: string;
}

interface OtherSectionsProps {
  quests: Quest[];
  reviews: Review[];
}

export default function OtherSections({ quests, reviews }: OtherSectionsProps) {
  return (
    <>
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
    </>
  );
}