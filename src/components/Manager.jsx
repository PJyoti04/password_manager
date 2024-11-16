import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const pass = useRef();
  const passinput = useRef();

  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  const [imageSources, setImageSources] = useState({});

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  

  const togglePassword = () => {
    if (pass.current.src.includes("eye.svg")) {
      pass.current.src = "eye-slash.svg";
      passinput.current.type = "text";
    } else {
      pass.current.src = "eye.svg";
      passinput.current.type = "password";
    }
  };

  const submitForm = () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopy = (textToCopy, rowIndex, columnType) => {
    toast('Copied to clipboard', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      // transition: Bounce,
      });
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Update the image source for the specific row and column
      setImageSources((prev) => ({
        ...prev,
        [`${rowIndex}-${columnType}`]: "copy.gif", // Temporary image for the copy action
      }));

      // Reset the image source after a short delay
      setTimeout(() => {
        setImageSources((prev) => ({
          ...prev,
          [`${rowIndex}-${columnType}`]: "copy.svg", // Original image
        }));
      }, 200);
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="mycontainer min-h-[77vh] bg-[#e8f4ef00]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt; </span>Pas
          <span className="text-green-500">sHH /&gt;</span>
        </h1>
        <p className="text-green-500 text-center text-lg">
          Your own Password Manager
        </p>

        <div className="flex flex-col p-4 gap-6 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border-2 border-green-500 w-full p-4 py-1 text-black"
            type="text"
            name="site"
          />
          <div className="flex justify-between w-full gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border-2 border-green-500 w-full p-4 py-1 text-black"
              type="text"
              name="username"
            />
            <div className="relative">
              <input
                ref={passinput}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border-2 border-green-500 w-full p-4 py-1 text-black"
                type="password"
                name="password"
              />
              <span
                className="absolute right-[2px] top-[5px] cursor-pointer "
                onClick={togglePassword}
              >
                <img
                  ref={pass}
                  className="h-[23px] p-1"
                  src="eye.svg"
                  alt="eye"
                />
              </span>
            </div>
          </div>

          <button
            onClick={submitForm}
            className="flex justify-center items-center gap-2 bg-green-500 rounded-full w-fit px-3 py-1 hover:bg-green-600 border-b-2 border-green-800 font-semibold"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="text-2xl font-bold py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-2">Website</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-200">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center border border-white py-2">
                      <div className="flex justify-center gap-4">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.site}
                        </a>
                        <img
                          className="w-4 cursor-pointer"
                          onClick={() => handleCopy(item.site, index, "site")}
                          src={imageSources[`${index}-site`] || "copy.svg"}
                          alt="copy"
                        />
                      </div>
                    </td>
                    <td className="text-center border border-white py-2">
                      <div className="flex items-center justify-center gap-4">
                        {item.username}
                        <img
                          className="w-4 cursor-pointer"
                          onClick={() =>
                            handleCopy(item.username, index, "username")
                          }
                          src={imageSources[`${index}-username`] || "copy.svg"}
                          alt="copy"
                        />
                      </div>
                    </td>
                    <td className="text-center border border-white py-2">
                      <div className="flex items-center justify-center gap-4">
                        {item.password}
                        <img
                          className="w-4 cursor-pointer"
                          onClick={() =>
                            handleCopy(item.password, index, "password")
                          }
                          src={imageSources[`${index}-password`] || "copy.svg"}
                          alt="copy"
                        />
                      </div>
                    </td>
                    <td className="text-center border border-white py-2">
                      <div className="flex items-center justify-center gap-4 cursor-pointer">
                        <lord-icon
                          src="https://cdn.lordicon.com/wkvacbiw.json"
                          trigger="hover"
                          colors="primary:#000000"
                          style={{
                            width: "25px",
                            height: "22px",
                            color: "black",
                          }}
                        ></lord-icon>

                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          colors="primary:#000000"
                          style={{ width: "25px", height: "22px" }}
                        ></lord-icon>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
