import React from "react";
import Navlinks from "../../Utils/NavLinks";
import LogoImage from "../../Assets/logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className="container mt-2 flex flex-row justify-between items-center">
        <img src={LogoImage} alt="" className="h-24" />
        <>
          <ul className="flex space-x-6">
            {Navlinks.map(({ name, url }) => (
              <li>
                <a
                  href={url}
                  className="text-lg font-semibold text-primary hover:underline hover:underline-offset-8 hover:text-blue-700 cursor-pointer"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </>
      </div>
    </>
  );
};

export default Navbar;
