import { LogoIcon } from "../Icons/LogoIcon";
import { MenuIcon } from "../Icons/MenuIcon";
import { ProfileIcon } from "../Icons/ProfileIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import "./NavbarStyles.css";

export const Navbar = () => {
  return (
    <>
      {/* responsive navbar */}
      <div className="navBarContainer">
        {/* left hand side of the navbar */}
        <div className="mainNavbarSide">
          <div className="leftHandSide">
            <MenuIcon />
            <p
              className="menuText font-bold leading-6 cursor-pointer"
              data-testid="menuText"
            >
              Menu
            </p>
          </div>

          {/* right hand side of the navbar */}
          <div className="rightHandSide">
            <SearchIcon />
            <ProfileIcon />
          </div>
        </div>
        <div className="linesLogoContainer">
          <hr className="left-line" />
          <LogoIcon className="logoIcon w-20" />
          <hr className="right-line" />
        </div>
      </div>
    </>
  );
};
