import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Item = () => {
  return (

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto p-4 '>
      <div className=' w-308 h-64 py-4  px-6 relative flex flex-col items-center justify-center'>
        <Image src='/host/host3.png' alt='host3' width={128} height={128} />
        <Link className='mt-8 font-inter text-3xl font-bold leading-9 tracking-normal text-center text-blue-700'href="https://www.youtube.com">500+ <br/> Podkastlar 
      </Link>
      <p className="font-inter text-base font-normal leading-6 tracking-normal text-left" >Dəqiq məlumatları, maraqlı faktları  bizim səhifələrdən izlə!</p>
      </div>
      <div className=' w-308 h-464 py-4  px-6 relative flex flex-col items-center justify-center mt-8'>
        <Image src='/host/host4.png' alt='host4' width={128} height={128} />
        <Link className='mt-8 font-inter text-3xl font-bold leading-9 tracking-normal text-center text-blue-700'href="https://www.youtube.com">24M<br/> Baxış
      </Link>
      <p className="font-inter text-base font-normal leading-6 tracking-normal text-left">Asudə vaxrını səmərəli keçirmək istəyirsənsə, bizi izlə!</p>
      </div>
      <div className=' w-308 h-464 py-4  px-6 relative flex flex-col items-center justify-center'>
        <Image src='/host/host5.png' alt='host5' width={128} height={128} />
        <Link className='mt-8 font-inter text-3xl font-bold leading-9 tracking-normal text-center text-blue-700'href="https://www.youtube.com">600K <br/> Abunəçi
      </Link>
      <p className="font-inter text-base font-normal leading-6 tracking-normal text-left">Hər zaman ilk olaraq xəbərdar olmaq istəyirsənsə, bizə abunə ol!</p>
      </div>
     
    </div>
  )
}

export default Item;
