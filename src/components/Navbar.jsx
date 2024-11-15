import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="mycontainer h-14 flex justify-between items-center px-4 py-5">
        <div className="font-semibold text-2xl text-white">
            <span className="text-green-500">&lt; </span>Pas<span className="text-green-500">sHH /&gt;</span>
        </div>

        {/* <ul>
          <li className="flex gap-4 font-semibold">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul> */}

        <div className="flex items-center bg-green-200 px-2 rounded-md cursor-pointer hover:bg-green-300 gap-2">
          <img className="w-6" src="./github-inverted.svg" alt="github" />
          <span className="font-bold px- py-2">GitHub</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
