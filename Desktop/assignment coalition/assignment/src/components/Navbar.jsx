import logo from "../assets/logo.svg";

const Navbar = ({ color, location, terrain }) => {
  return (
    <nav className="w-8/12 flex justify-between items-center mx-auto py-4 font-semibold text-gray-700">
      <div className="flex gap-2 items-center ">
        <img
          src={logo}
          className="w-10 border border-black rounded-full"
          alt="logo svg"
        />
        <div className="flex-col">
          <p className="text-gray-900">{location}</p>
          <p className="text-blue-900">{terrain}</p>
        </div>
      </div>
     
            <ul className={`flex gap-3 ${color}`}>
            <li>
              <a className="hover:font-bold " href="#history">
                01.HISTORY
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="#climb">
                02.TEAM
              </a>
            </li>
          </ul>

    </nav>
  );
};

export default Navbar;
