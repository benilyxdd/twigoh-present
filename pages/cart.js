import { useSelector } from 'react-redux';

import MOCK_DATA from '../constants/MOCK_DATA';
import Layout from '../src/components/Layout';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  let total = 0;

  return (
    <Layout>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const itemDetails = MOCK_DATA.find((ele) => ele.id === item.id);
              total +=
                parseFloat(item.quantity) * parseFloat(itemDetails.price);
              return (
                <tr>
                  <td>{itemDetails.name}</td>
                  <td>{itemDetails.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <span>Total: ${Math.round(total)}</span>
      </div>
    </Layout>
  );
};

export default Cart;
