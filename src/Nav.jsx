import { Outlet, Link } from 'react-router-dom';

export default function Nav() {

  return (
    <>
      <div className="nav-bar">
        logo
        <div className="links">
        <Link to="/">All</Link>
        <Outlet />
        <Link to="/movies">Movies</Link>
        <Outlet />
        <Link to="/series">Series</Link>
        <Outlet />
        <Link to="/bookmarks">Bookmarks</Link>
        <Outlet />
        </div>
        pfp
      </div>
    </>
  )
}