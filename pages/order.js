import ItemBlock from '../src/components/ItemBlock';
import Layout from '../src/components/Layout';

import { images } from '../constants/Images';

const Order = () => {
  return (
    <Layout>
      <div className="flex flex-wrap gap-2 justify-center align-middle">
        <ItemBlock imageUrl={images[0]} name="hello" id={1} />
        <ItemBlock imageUrl={images[0]} name="hello" id={2} />
        <ItemBlock imageUrl={images[0]} name="hello" id={3} />
        <ItemBlock imageUrl={images[0]} name="hello" id={4} />
        <ItemBlock imageUrl={images[0]} name="hello" id={5} />
      </div>
    </Layout>
  );
};

export default Order;
