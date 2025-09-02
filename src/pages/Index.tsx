import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import QuestsSection from '@/components/QuestsSection';
import BookingSection from '@/components/BookingSection';
import OtherSections from '@/components/OtherSections';
import Footer from '@/components/Footer';

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
  return (
    <div className="min-h-screen bg-background font-roboto">
      <Navigation />
      <HeroSection backgroundImage={quests[0].image} />
      <QuestsSection quests={quests} />
      <BookingSection quests={quests} />
      <OtherSections quests={quests} reviews={reviews} />
      <Footer />
    </div>
  );
}