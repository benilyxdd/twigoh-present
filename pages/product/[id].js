import { useRouter } from 'next/router';

import MOCK_DATA from '../../constants/MOCK_DATA';
import Layout from '../../src/components/Layout';

const ProductDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const item = MOCK_DATA.find((ele) => ele.id == id);

  return (
    <Layout>
      <h1>Product details of {id}</h1>
      <h2>Price: ${item.price}</h2>
      <h2>Rating: {item.rating} / 100</h2>
      <h2>{item.description}</h2>
    </Layout>
  );
};

export default ProductDetails;
