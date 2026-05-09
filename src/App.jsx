import { Route, Routes, Link } from "react-router";
import "./App.scss";
import LandingPage from "./components/pages/LandingPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import ContactPage from "./components/pages/ContactPage";
import LoginPage from "./components/pages/LoginPage";
import Error404Page from "./components/pages/Error404Page";
import ProfesPage from "./components/pages/ProfesPage";

function App() {
  return (
    <div>
      <header className="header">
        <h1>React Router</h1>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/quienes-somos">Quiénes somos</Link>
          <Link to="/contacto">Contáctame</Link>
          <Link to="/login">Entrar</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/quienes-somos" element={<AboutUsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profes/:nombre" element={<ProfesPage />} />
          <Route path="/*" element={<Error404Page />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
