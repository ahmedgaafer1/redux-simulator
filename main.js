console.log(Redux);

const withdraw = (amout) => {
  return {
    type: "withdrwa-money",
    payload: amout,
  };
};
const addprod = (prod) => {
  return {
    type: "addprod",
    payload: prod,
  };
};
const getprod = (products) => {
  return {
    type: "getprod",
    payload: products,
  };
};
const fetchproducts = () => {
  return async (dispatch) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    dispatch(getprod(data));
  };
};

const prodreducer = (state = [], action) => {
  switch (action.type) {
    case "getprod":
      return [...action.payload];
    case "addprod":
      return [...state, action.payload];
    default:
      return state;
  }
};

const reducer = (state = 1000, action) => {
  switch (action.type) {
    case "withdrwa-money":
      return state - action.payload;
    default:
      return state;
  }
};
// const prodreducer = (prod = [], action) => {
//   switch (action.type) {
//     case "addprod":
//       return [...prod, action.payload];
//     default:
//       return prod;
//   }
// };
// const store = Redux.createStore(reducer);
// console.log(store);
const rootstore = Redux.combineReducers({
  balance: reducer,
  data: prodreducer,
});

const store = Redux.createStore(rootstore, Redux.applyMiddleware(ReduxThunk));

store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch(withdraw(100));
// store.dispatch(fetchproducts());
// store.dispatch(addprod({ id: 1, tittle: "prod-1" }));

const run = async () => {
  store.dispatch(withdraw(100));
  await store.dispatch(fetchproducts()); // استنى لحد ما الداتا تيجي
  store.dispatch(addprod({ id: 1, tittle: "prod-1" })); // دلوقتي هتضاف فعلاً فوق داتا الـ API
};

run();
