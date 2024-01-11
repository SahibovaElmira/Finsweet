import { FaPlayCircle } from 'react-icons/fa';
import Link from 'next/link';
const ListenNowButton = () => {
  return (
    <Link href="SinglePodcast/">
    <button className="flex items-center hover:bg-blue-700 py-2 px-4 rounded">
      <FaPlayCircle size={20} color="#503AE7" />
           <span className="ml-2 text-blue-500">Dinlə</span>
    </button>
    </Link>
  );
};

export default ListenNowButton;
