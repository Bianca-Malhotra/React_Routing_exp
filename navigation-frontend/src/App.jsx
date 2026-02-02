import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";

/* Scroll to hash */
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function Home() {
  return (
    <div className="container page">
      <div className="text-center">
        <h1 className="fw-bold text-primary">
          Welcome to Navigation App
        </h1>

        <p className="lead fs-4 text-muted mt-3">
          A modern React Single Page Application using Bootstrap and React Router
        </p>

        <Link to="/about#team" className="btn btn-primary btn-lg mt-4">
          Meet Our Team
        </Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container page">
      <h1 className="fw-bold text-success mb-4">
        About Our Application
      </h1>

      <div className="alert alert-info fs-5">
        Scroll down to see the team section
      </div>

      <div style={{ height: "100vh" }}></div>

      <section id="team" className="card shadow-lg p-5 mt-5">
        <h2 className="text-danger mb-3">Our Team</h2>

        <p className="fs-5 text-muted">
          We are a group of passionate developers focused on building scalable
          and user-friendly web applications using React and Bootstrap.
        </p>
      </section>
    </div>
  );
}

/* Main App */
function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand fw-bold" to="/">
          NavigationApp
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about#team">
            Our Team
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
