# Redux Simulator 🔁

A lightweight simulation of Redux using pure JavaScript — for learning, experimentation, and understanding how Redux works under the hood.

## 📦 Features

- Custom `createStore()` function.
- Internal `state` and `listeners` managed through closures.
- Core methods: `dispatch()`, `getstate()`, `subscribe()`.
- Implemented using Module Pattern + Closures.
- Zero dependencies — just Vanilla JS!

## 🚀 How to Use

```js
// Define your reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
}

// Create store
const store = $redux.createstore(counterReducer);

// Subscribe to state changes
store.subscribe(() => {
  console.log("State updated:", store.getstate());
});

// Dispatch actions
store.dispatch({ type: "inc" });
store.dispatch({ type: "inc" });
store.dispatch({ type: "dec" });
```

## 📁 Structure

```
/redux-simulator
  ├── index.html
  └── redux.js       # Contains the custom redux implementation
```

## 📚 Concepts Used

- JavaScript Closures 🔒
- Module Pattern 📦
- Functional Programming 🧠

## 🤝 Contributing

This project is for educational purposes — feel free to fork, improve, and explore.

---

**Made with ❤️ by [Ahmed Gaafer](https://github.com/ahmedgaafer1)**
