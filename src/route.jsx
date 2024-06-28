import { Routes, Route } from 'react-router-dom';
import PrivateRoute from "./privateRoute";
import Home from './pages/HomePage';
import Nasa from './pages/NasaPage';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nasa" element={
        <PrivateRoute>
          <Nasa />
        </PrivateRoute>
      } />
    </Routes>
  );
};

export default AppRoutes;
