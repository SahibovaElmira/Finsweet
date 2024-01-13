
import React from 'react';
import CardBlog from '../components/CardBlog/page';

const data = [
  {
    id: 1,
    imageUrl: '/Blog/Blog2.png',
    title: 'Dünya səviyyəli biznes brendini necə qurmaq olar?',
    content: 'Hələ hər şeydən əvvəl bazar araşdırması aparmalı və biznes planı hazırlamalısınız. Bu tamamlandıqdan sonra biznesiniz üçün ad və struktur seçin, sonra təşkilatınızı qeydiyyatdan keçirmək üçün hər hansı sənədləşmə işləri aparın.',
  },
  {
    id: 1,
    imageUrl: '/Blog/Blog3.png',
    title: 'Kiçik bizneslər haqqında',
    content: 'Kiçik sahibkarlar tərəfindən idarə olunan şirkətlər kiçik bizneslər adlanır. Ümumiyyətlə bir şəxs və ya 100-dən az işçisi olan kiçik bir qrup şəxs tərəfindən idarə olunan bu şirkətlərə ailə restoranları, evdə işləyən şirkətlər, geyim, kitab və nəşriyyat şirkətləri və kiçik istehsalçılar daxildir.',
  },
  {
    id: 1,
    imageUrl: '/Blog/Blog4.png',
    title: 'Orta  bizneslər haqqında',
    content: 'Müəssisələrin mənzərəsini qiymətləndirdikdə, orta şirkət 100-dən 499-a qədər işçisi və ya illik ümumi satışlarında 10 milyon dollardan 50 milyon dollara qədər olan şirkət kimi müəyyən edilir.',
  },
  {
    id: 1,
    imageUrl: '/Blog/Blog5.png',
    title: 'Böyük bizneslər haqqında',
    content: 'Böyük bizneslərin adətən 1000-dən çox işçisi var və ümumi gəlirlərdə 50 milyon dollar və ya daha çox gəlir əldə edirlər. Onlar açıq şəkildə satılan şirkət kimi əməliyyatları maliyyələşdirmək üçün korporativ səhmlər buraxa bilərlər.',
  },
  {
    id: 1,
    imageUrl: '/Blog/Blog6.png',
    title: 'Biznes adını necə seçirsiniz?',
    content: 'Biznes adınız idarə etməyi planlaşdırdığınız təşkilatın növünə uyğun olmalı və cəlbedici olmalıdır - insanların diqqətini çəkəcəkləri və xatırlayacaqları bir şey, sizinlə əlaqə saxlamağı, eləcə də satmağı planlaşdırdığınız məhsul və xidmətləri xatırlatsın. Orijinallıq əsasdır.',
  },
  {
    id: 1,
    imageUrl: '/Blog/Blog7.png',
    title: 'Biznes planı haqqında',
    content: 'Biznes planları biznesinizi idarə etmək üçün vacibdir və fəaliyyətinizə başlamaq üçün lazım olan maliyyəni təmin etməyə kömək edə bilər. Siz ənənəvi və ya yeni biznes planı arasında seçim edə bilərsiniz.',
  },

];

const BlogCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-justify">
      {data.map((card) => (
        <CardBlog key={card.id} {...card} />
      ))}
    </div>
  );
};

export default BlogCards;
