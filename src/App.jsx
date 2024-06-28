import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
import Login from "./components/Login";
import GetData from "./components/GetData";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputQuery, setInputQuery] = useState("apollo");
  const [query, setQuery] = useState("apollo");

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleInputQueryChange = (e) => {
    setInputQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputQuery);
    // GetData 컴포넌트는 query 상태를 사용하여 자동으로 새로운 데이터를 가져옵니다.
  }

  return (
    <>
      <Login />
      <h1>count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      
      <form onSubmit={handleSubmit}>
        <label>
          Search Query:
          <input type="text" value={inputQuery} onChange={handleInputQueryChange} />
        </label>
        <button type="submit">Search</button>
      </form>

      <GetData query={query} />
    </>
  )
}

export default App;
