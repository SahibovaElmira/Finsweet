import { FaPlayCircle } from 'react-icons/fa';

const ListenNowButton = () => {
  return (
    <button className="flex items-center hover:bg-blue-700 py-2 px-4 rounded">
      <FaPlayCircle size={20} color="#503AE7" />
      <span className="ml-2 text-blue-500">Listen Now</span>
    </button>
  );
};

export default ListenNowButton;
