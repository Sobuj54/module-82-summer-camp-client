import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <navbar className="bg-[#FCF8F1] bg-opacity-30">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <h3 className="text-2xl font-amaranth font-semibold">
              Art & Craft
            </h3>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 font-amita font-semibold">
            <NavLink className="text-base text-black transition-all duration-200 hover:text-opacity-80">
              {" "}
              Home{" "}
            </NavLink>

            <NavLink className="text-base text-black transition-all duration-200 hover:text-opacity-80">
              {" "}
              Instructors{" "}
            </NavLink>

            <NavLink className="text-base text-black transition-all duration-200 hover:text-opacity-80">
              {" "}
              Classes{" "}
            </NavLink>

            <NavLink className="text-base text-black transition-all duration-200 hover:text-opacity-80">
              {" "}
              Dashboard{" "}
            </NavLink>
          </div>

          <NavLink
            className="hidden font-bellefair lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
            role="button">
            {" "}
            Join Now{" "}
          </NavLink>
        </div>
      </div>
    </navbar>
  );
};

export default NavBar;
