import { useSelector, useDispatch } from 'react-redux';

import MOCK_DATA from '../constants/MOCK_DATA';
import Layout from '../src/components/Layout';
import { removeItem } from '../src/store/actions/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  let total = 0;

  return (
    <Layout>
      <div className="flex align-middle justify-center flex-col p-8">
        <table className="table-auto ">
          <thead>
            <tr className="text-left">
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const itemDetails = MOCK_DATA.find((ele) => ele.id === item.id);
              total +=
                parseFloat(item.quantity) * parseFloat(itemDetails.price);
              return (
                <tr className="text-left">
                  <td>{itemDetails.name}</td>
                  <td>{itemDetails.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => dispatch(removeItem(item.id))}>
                      <p className="text-red-600">Remove</p>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />
        <span>Total: ${Math.round(total)}</span>
      </div>
    </Layout>
  );
};

export default Cart;
