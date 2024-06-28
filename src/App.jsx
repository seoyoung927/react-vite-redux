import Login from "./components/Login";
import AppRoutes from "./route";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nasa">Nasa</Link>
          </li>
        </ul>
      </nav>
      <Login />
      <AppRoutes />
    </>
  )
}

export default App;
