import React from 'react';

const Journey = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
      <div className="text-center">
        <h1 className="font-inter text-2xl font-bold leading-9 tracking-normal text-gray-800 dark:text-white mb-4">
          2023-cü ildə Youtube kanalımda olan mövzular
        </h1>
        <p className="font-inter text-base font-bold leading-7 tracking-normal text-justify text-left text-gray-600 dark:text-gray-300">
          Hər zaman izləyiciləriminin dünyagörüşünün formalaşmasına təsir edə biləcək mövzular seçmişəm. Ona görə kanalım hər zaman aktuallığı ilə seçilir. Mövzu seçərkən 90% izləyicinin maraq dairəsini nəzərə alıram.
        </p>
      </div>
      <div className="text-center">
        <h1 className="font-inter text-2xl font-bold leading-9 tracking-normal text-gray-800 dark:text-white mb-4">
          Texniki jurnalistdən tutmuş Vlogger və YouTuber-ə qədər
        </h1>
        <p className="font-inter text-base font-normal leading-7 tracking-normal text-justify text-left text-gray-600 dark:text-gray-300">
          <span className='italic font-bold text-green-900'>Jurnalist kimi texnikaya aid mövzuları hər zaman sevmişəm. Ümumiyyətlə, mənim üçün bəşəriyyətin təkamül tarixində texniki inkişafın rolu əvəzolunmazdır. </span> Biz insanlar digər canlılardan düşüncə üstünlüyü ilə seçilirik və ona görə də canlılar içərisində ali varlıq hesab olunuruq.
        </p>
      </div>
    </div>
  );
};

export default Journey;


