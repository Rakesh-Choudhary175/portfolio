import { useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Context } from "../../Context";

function AppLayout() {
  const [navBar, setNavBar] = useState(false);

  return (
    <>
      <Context.Provider value={{ navBar }}>
        <div className="bg-circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>

        <div className="overlay "></div>

        <div className={`main`}>
          <header className={`header ${navBar ? "activeOn" : ""}`}>
            <div className="container">
              <div className="row flex-end">
                <button
                  type="button"
                  className="nav-toggler"
                  onClick={() => setNavBar((nav) => !nav)}
                >
                  <span></span>
                </button>
                <NavBar toggleNavBar={() => setNavBar((nav) => !nav)} />
              </div>
            </div>
          </header>
          <Outlet />
        </div>
      </Context.Provider>
    </>
  );
}

export default AppLayout;
