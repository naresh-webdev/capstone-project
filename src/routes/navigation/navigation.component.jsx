import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to={"/"} className="logo-container">
          <div>Logo</div>
        </Link>

        <div className="links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
