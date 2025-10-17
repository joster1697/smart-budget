import "./App.css";
import Register from "./features/auth/components/register";
import Login from "./features/auth/components/login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
//Notas: Revisar path de Routes login y register
export default App;
