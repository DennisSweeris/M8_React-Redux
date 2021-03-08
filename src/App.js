import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  // Styles
  const appStyle = {
    display: "flex",
    alignItems: "center",
  };

  const buttonStyles = {
    padding: "1rem",
    margin: "1rem",
  };

  return (
    <div style={appStyle} className="App">
      <button style={buttonStyles} onClick={() => dispatch(increment(1))}>
        +
      </button>
      <h1>Counter {counter}</h1>
      <button style={buttonStyles} onClick={() => dispatch(decrement(1))}>
        -
      </button>
      {isLogged ? <h3>Valuable information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
