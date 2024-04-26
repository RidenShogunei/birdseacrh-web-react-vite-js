import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../page/login';
import Register from '../page/register';

function Routermap() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default Routermap;