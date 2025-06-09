(function () {
  const customredux = (function () {
    const createstore = (reducer) => {
      let state;
      let listeners = [];

      const getstate = () => state;

      const dispatch = (action) => {
        console.log(action);
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
      };
      const subscribe = (listener) => {
        listeners.push(listener);
        console.log(listeners);
      };

      return {
        getstate,
        dispatch,
        subscribe,
      }; // to make closure done succesfully
    };

    return {
      createstore,
    }; // to make design module done successfully
  })(); // IIFE to avoid using const store = $redux().createstore(reducer); to be const store = $redux.createstore(reducer); 

  if (!window.customredux) {
    window.$redux = window.customredux = customredux;
  }
})(); //outer IIFE function to iqnore conflict and put customredux in window if it not available
