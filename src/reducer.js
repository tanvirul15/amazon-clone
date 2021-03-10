export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const ind = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      newBasket.splice(ind, 1);
      console.log(newBasket);

    default:
      return state;
  }
};

export default reducer;
