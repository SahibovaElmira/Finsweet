import React from 'react';
import Brands from '../brands/page';

const SinglePodcastMid = () => {
  return (
    <div className="flex">
      {/* First Column */}
      <div className="w-1/2 relative p-4">
        <div className="w-1020 h-752 top-800 bottom-400 left-208 mb-11 mt-8">
          <h2 className="text-2xl font-bold leading-8 text-black mb-4 text-center">Müştərinin cəlb edilməsi sistemi</h2>
          <p className="w-636 h-192 top-760 left-208 text-black py-3 text-justify">
            &emsp; Müştərinin cəlb edilməsi heç də asan olmayan və sürətli proses deyil, xüsusən də şirkət bazarda yenidirsə müştərinin cəlb edilməsi də bir o qədər çətindir. Dünyadakı müasir vəziyyətə görə demək olar ki, bütün sahələrdə müştəri çatışmazlığı müşahidə edilir. Müştərinin cəlb edilməsi sistemi müxtəlif konfiqurasiyalara sahib ola bilər. Təcrübənin sübut etdiyinə görə, bunun üçün ən effektiv sistem müştərinin psixoloji portretidir. Hüquqi şirkətdə müştərinin psixoloji portretini əldə etmək üçün heç deyilsə minimal marketinq həyata keçirmək lazımdır. Bu zaman hüquqi xidmətlərdən istifadə edən şəxsləri təyin etmək, onları nəyin maraqlandırdığını, hansı tələbatlarının olduğunu, hansı xidmətləri daha yüksək qiymətləndirdiyini və s. ni təyin etmək lazımdır.

            Təbii olaraq burada formalaşmış və gizli tələbat mövcuddur. Formalaşmış tələbat əsas olaraq bütün hüquqi xidmət bazarı iştirakçılarının təklif edə biləcəyi standart hüquqi prosedurlardır. Bu səbəbdən də bu bazarda rəqabət yüksəkdir. Gizli tələbat dedikdə isə baş heç bir şirkətin həll edə bilməyəcəyi qeyri-standart problemlərin həlli nəzərdə tutulur. Məhz buna görə də bazarda bu problemlər illərdir mövcuddur və müştəri bu problemin həlli üçün “yaxşı” məbləğ ödəməyə hazırdır. Bununla əlaqədar olaraq da bu istiqamətdən çox pul qazanmaq mümkündür. Geriyə qalan hansı istiqaməti seçməyinizdir.
          </p>
          <h2 className="text-2xl font-bold leading-8 text-black mb-11 mt-8 text-center ">Məşhur amerikan biznesmen Karl Sevell müştəri ilə münasibətlərin 10 Qızıl Qaydasını aşağıdakı kimi görmüşdür:</h2>
          <p className="w-636 h-192 top-760 left-208 text-black py-3 text-justify">
            1. Müştərinin nə istədiyini öyrən, istəklərini artıqlaması ilə təmin et.<br />
            2. Elə sistem yarat ki, hər dəfə işlərin eyni səviyyədə mükəmməl yerinə yetirilməsinə şərait olsun.<br />
            3. İmkanlarından az söz ver, artıqlaması ilə yerinə yetir.<br />
            4. Müştəriyə cavab həmişə “bəli” olmalıdır.<br />
            5. Müştərilərlə işləyən bütün işçilərə müştərilərin şikayətlərini qarşılamağa səlahiyyət verilməlidir.<br />
            6. Heç bir şikayət yoxdursa, deməli nə isə düz deyil.<br />
            7. Hər şeyi ölç-biç.<br />
            8. İnsanlara tərəfdaş kimi yanaş.<br />
            9. İnsanlara hörmət bəslə.<br />
            10. Ən qabaqcıl təcrübəni öyrən, tətbiq et, təkmilləşdir.<br />
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="w-1/2 relative p-4">
        <div className="w-1020 h-752 top-800 bottom-400 left-208 mb-11 mt-8">
        
        </div>
        
       
        <div className="flex-col relative p-4">
          <Brands />
        </div>
      </div>
    </div>
  );
};

export default SinglePodcastMid;
