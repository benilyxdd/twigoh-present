import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import { addItem } from '../store/actions/cart';

const AddToCart = ({ onClick }) => {
  return (
    <div className="flex justify-center align-middle">
      <button className="rounded-lg bg-yellow-300 p-1" onClick={onClick}>
        Add to Cart
      </button>
    </div>
  );
};

const ItemBlock = ({ imageUrl, name, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col border-2  border-black rounded-lg w-52 h-64">
      <div className="h-2/3">
        <Link href={`/product/${id}`}>
          <a>
            <Image src={imageUrl} height={150} width={200} />
          </a>
        </Link>
      </div>
      <span className="text-center p-1">{name}</span>
      <AddToCart onClick={() => dispatch(addItem(id))} />
    </div>
  );
};

export default ItemBlock;
