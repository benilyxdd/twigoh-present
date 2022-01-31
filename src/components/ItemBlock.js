import Link from 'next/link';
import Image from 'next/image';

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
  return (
    <div className="flex flex-col border-2  border-black rounded-lg w-52 h-64">
      <div className="h-2/3">
        <Link href={`/product/${id}`}>
          <a>
            <Image src={imageUrl} layout="responsive" />
          </a>
        </Link>
      </div>
      <span className="text-center p-1">{name}</span>
      <AddToCart onClick={() => console.log('click')} />
    </div>
  );
};

export default ItemBlock;
