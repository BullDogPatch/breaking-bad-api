import React from "react";

const logo =
  "https://raw.githubusercontent.com/bradtraversy/breaking-bad-cast/master/src/img/logo.png";

const Header = () => {
  return (
    <header className="center">
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;
