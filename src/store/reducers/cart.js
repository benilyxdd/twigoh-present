import * as Cart from '../actions/cart';

const initState = {
  items: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case Cart.ADD_ITEM:
      const newItems = [];
      let done = false;
      for (let item of state.items) {
        if (item.id == action.payload.id) {
          done = true;
          newItems.push({ id: item.id, quantity: item.quantity + 1 });
        } else {
          newItems.push(item);
        }
      }
      if (!done) {
        newItems.push({ id: action.payload.id, quantity: 1 });
      }

      return { ...state, items: newItems };

    default:
      return state;
  }
};

export default cartReducer;
