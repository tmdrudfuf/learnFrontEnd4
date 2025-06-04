import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
  <Router>
    <Routes>
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Navigate replace to="/Login" />} />
    </Routes>
  </Router>
  );
}

export default App;
