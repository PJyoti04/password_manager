import React from "react";
import { useRef } from "react";

const Manager = () => {
  const pass = useRef()
  const passinput = useRef()

  const togglePassword = () => {

    if(pass.current.src.includes("eye.svg")){
      pass.current.src = "eye-slash.svg"
      passinput.current.type = "password"
    }
    else{
      pass.current.src = "eye.svg"
      passinput.current.type = "text"
    }
  }


  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="mycontainer  bg-[#e8f4ef00]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt; </span>Pas
          <span className="text-green-500">sHH /&gt;</span>
        </h1>
        <p className="text-green-500 text-center text-lg">
          Your own Password Manager
        </p>

        <div className="flex flex-col p-4 gap-6 items-center">
          <input
            placeholder="Enter website URL"
            className="rounded-full border-2 border-green-500 w-full p-4 py-1 text-black"
            type="text"
            name=""
            id=""
          />
          <div className="flex justify-between w-full gap-4">
            <input
              placeholder="Enter Username"
              className="rounded-full border-2 border-green-500 w-full p-4 py-1 text-black"
              type="text"
              name=""
              id=""
            />
            <div className="relative">

            <input ref={passinput}
              placeholder="Enter Password"
              className="rounded-full border-2 border-green-500 w-full p-4 py-1 text-black"
              type="text"
              name=""
              id=""
            />
            <span className="absolute right-[2px] top-[5px] cursor-pointer " onClick={togglePassword}>
              <img ref={pass} className="h-[23px] p-1" src="eye.svg" alt="eye" />
            </span>
            </div>
          </div>

          <button className="flex justify-center items-center gap-2 bg-green-500 rounded-full w-fit px-3 py-1 hover:bg-green-600 border-b-2 border-green-800 font-semibold">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              //   colors="primary:#ffffff"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
