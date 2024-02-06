import React from "react";

function Navbar({ filterItem, navlist }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {navlist?.map((ele) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(ele)}
              >
                {ele}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
