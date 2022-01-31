import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  return <h1>Product details of {id}</h1>;
};

export default ProductDetails;
