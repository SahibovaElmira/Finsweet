import React from 'react';
import Image from 'next/image';

const SingleBlog = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-4xl'>
        Biznesdə informasiya texnologiyaları haqqında
      </h1>
      <div >
        <Image
          src='/SingleBlog/SingleBlog1.png'
          alt="Biznesdə informasiya texnologiyaları haqqında"
          width={1320}
          height={528}
      
        />
      </div>
      <div>
        <h1 className='text-center font-bold text-2xl'>Elektron Biznes</h1>
        <p className='text-justify ml-10 mr-10 '>
           Ölkəmizdə elektron hökumət sisteminin mövcud olduğu, dövlət orqanları tərəfindən yüzlərlə elektron xidmətlərin göstərildiyi, rəqəmsal biznesin geniş vüsət aldığı, digital reklama tələbin artdığı, izləyici və müştəri kütləsinin biznes obyektini artıq müxtəlif sayt və səhifələrin üzərindən axtardığı, elektron alış-verişin geniş yayıldığı və elektron ödəmə portallarının sayının çoxaldığı bir dövrdə hər kəsin informasiya texnologiyaları sahəsində fəaliyyət göstərən şirkətlərə olan tələbatını daha da artırır.İnformasiya texnologiyaları məhsullarının əsas ehtiyaca çevrilməsi IT sektorunun sürətli inkişafına gətirib çıxarıb. Bununla da IT sektorunda dövlətlərin və şirkətlərin investisiyaları artmağa başlayıb. Dünyanın tanınmış texnologiya şirkətləri araşdırma və inkişaf etdirmə üçün milyardlarla vəsait xərcləyir. Misal üçün, "Microsoft", "Apple" və "Samsung" kimi nəhəng şirkətlərin adlarını çəkmək olar. Bu şirkətlər hər il inkişafları üçün 10 milyard dollardan çox vəsait xərcləyirlər. IT sektoru hər il genişlənməyə davam edir. Sürətlə yenilənən bu sektorda yer almaq üçün biz daim özümüzü inkişaf etdirməli və sektorun özü kimi yeniliklərə açıq olmalıyıq.
        </p>
        <h1 className='text-center font-bold text-2xl'>Pərakəndə Satış və Elektron Ticarət Arasındakı Fərq Nədir?</h1>
        <p className='text-justify ml-10 mr-10 '>
        Pərakəndə satış müəyyən bir qiymətə mal satan mağaza növüdür, elektron ticarət isə mal və xidmətlərin onlayn satışıdır. Pərakəndə mağazalar ictimaiyyətə məhsul satan fiziki yerlərdir, e-ticarət saytları isə insanlar tərəfindən bir şirkətdən və ya fərddən məhsul almaq üçün istifadə olunan onlayn platformalardır.

Hər iki ticarət modelinin üstünlüyü vardır. Pərakəndə mağazalar müştərilərə məhsulu almadan əvvəl ona toxunmaq, hiss etmək və sınaqdan keçirmək kimi təcrübə təqdim edir. Digər tərəfdən, e-ticarət saytları insanlara fiziki olaraq mağazaya getmədən məhsul almaq təcrübəsi təklif edir.
        </p>
        <h1 className='text-center font-bold text-2xl'>Elektron Ticarətdə Hansı Sektorlar Daha Çox İnkişaf Edib?</h1>
        <p className='text-justify ml-10 mr-10 '>
        Son bir neçə ildə e-ticarət eksponensial sürətlə böyüyür. Texnologiyanın inkişafı ilə insanlar istənilən yerdən və istənilən vaxt məhsul ala bilirlər.

Ən sürətlə inkişaf edən sektorlardan bəziləri məişət əşyası, elektronika və geyim sektorudur.
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;


