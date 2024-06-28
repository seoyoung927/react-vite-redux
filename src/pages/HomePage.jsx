import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

function HomePage() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  
    const handleIncrement = () => {
      dispatch(increment());
    }
  
    const handleDecrement = () => {
      dispatch(decrement());
    }

    return <>
        <h1>count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </>
}

export default HomePage;
