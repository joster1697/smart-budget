import "./App.css";
import Register from "./features/auth/components/register";
import Login from "./features/auth/components/login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
