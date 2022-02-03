import ItemBlock from '../src/components/ItemBlock';
import Layout from '../src/components/Layout';

import MOCK_DATA from '../constants/MOCK_DATA';

const Order = () => {
  return (
    <Layout>
      <div className="flex flex-wrap gap-2 justify-center align-middle">
        {MOCK_DATA.map((item, index) => {
          return (
            <ItemBlock
              imageUrl={`https://picsum.photos/200/?random&dummyPara=${index}`}
              name={item.name}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Order;
