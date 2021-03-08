```js
import { createStore } from "redux";

// STORE -> GLOBALIZED STATE

// ACTION INCREMENT
const increment = () => {
  return {
    type: "INCREMENT", // name
  };
};

const decrement = () => {
  return {
    type: "DECREMENT", // name
  };
};

// REDUCER(Store Manager)
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

// Display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH(Execute)
store.dispatch(increment());
store.dispatch(decrement());
```
