import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="sign" onClick={() => dispatch(incNumber())}>
        <h1>+</h1>
      </div>
      <h1>{myState}</h1>
      <div className="sign" onClick={() => dispatch(decNumber())}>
        <h1>-</h1>
      </div>
    </div>
  );
}

export default App;
