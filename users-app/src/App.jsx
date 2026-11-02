import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;