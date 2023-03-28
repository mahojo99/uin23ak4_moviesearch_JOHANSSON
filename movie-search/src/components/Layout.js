import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div id="container">
          <header>
            <h1 id="logo">Scuffed IMDb</h1>
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
    
          </footer>
        </div>
    )
}