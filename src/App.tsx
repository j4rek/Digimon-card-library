import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import HomePage from "@pages/Home";
import LoginPage from "@pages/Login";
import RouteGuard from "@utils/RouteGuard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          index
          element={
            <RouteGuard>
              <HomePage />
            </RouteGuard>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
