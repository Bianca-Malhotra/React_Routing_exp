
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <h1 className="logo">My SPA</h1>

          <div className="links">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">
              About
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="container page">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
