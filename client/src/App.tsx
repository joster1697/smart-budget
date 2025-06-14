import "./App.css";
import Register from "./features/auth/components/register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}/>
    </Routes>
  );
}

export default App;
