import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <div className="mycontainer h-14 flex justify-between items-center px-4 py-5">
        <div className="font-semibold text-2xl">
            <span className="text-green-500">&lt; </span>Pas<span className="text-green-500">sHH /&gt;</span>
        </div>

        <ul>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
