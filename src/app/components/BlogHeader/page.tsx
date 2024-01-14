import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleBlog from '../SingleBlogHeader/page';

const BlogHeader = () => {
  return (
    <div className="flex ml-3 mt-3">
  <div className="w-1/2 pr-8">
    <h2 className="text-blue-700 font-inter text-16 font-semibold ">
      Seçilən
    </h2>
    <p className="font-inter text-32 font-bold ">
      Layihəyə başlamaq üçün nə etməliyəm?
    </p>
    <p className="font-inter text-16 font-normal ">
      Hər hansı layihənin uğur əldə etməsi ona doğru başlamaqdan asılıdır. Layihəni tərib edərkən ilk olaraq strukturuna diqqət yetirmək lazımdır.
    </p>
    <Link href="/singleblog">
    <p className="my-2 text-blue-700">Indi oxu <span>&#8594;</span></p>
    </Link>
  </div>
     
         <div className="w-1/2">
        <Image src="/Blog/Blog1.png" alt="Blog1" width={616} height={448} />
      </div>
    </div>
  );
}

export default BlogHeader;


