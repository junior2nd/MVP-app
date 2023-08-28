import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  //   const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const handleFormSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post("/login", { username, password });
  //       localStorage.setItem("token", response.data.token);
  //       localStorage.setItem("username", response.data.username);
  //       localStorage.setItem("id", response.data.id);
  //       history("/", { replace: true });
  //     } catch (err) {
  //       console.log(err);
  //       Swal.fire({
  //         title: "กรุณาตรวจสอบ Username/Password อีกครั้ง",
  //         text: err.msg,
  //         icon: "error",
  //       });
  //     }
  //   };
  //   useEffect(() => {
  //     if (localStorage.getItem("username")) {
  //       history("/", { replace: true });
  //     } else {
  //       localStorage.clear();
  //     }
  //   }, []);

  return (
    <div class="grid bg-gradient-to-r from-sky-900 to-sky-500 h-screen ">
      <div className="grid place-content-center">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 ">
          <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl rounded-xl">
              <div className="w-full px-12 py-3">
                <div>
                  <div className="mt-3 text-left sm:mt-5">
                    <div className="inline-flex items-center w-full">
                      <h3 className="text-lg font-bold text-neutral-600 leading-6 lg:text-5xl">
                        MVP App
                      </h3>
                    </div>
                    <div className="mt-4 text-sm text-gray-300">
                      <p>Demo Version 1.0 </p>
                    </div>
                  </div>
                </div>
                {/* <form onSubmit={handleFormSubmit}> */}
                <form>
                  <div className="mt-6 space-y-2">
                    <div>
                      {/* <label htmlFor="email" className="sr-only">Email</label> */}
                      <input
                        type="text"
                        name="email"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your Username"
                      />
                    </div>
                    <div>
                      {/* <label for="password" className="sr-only">Password</label> */}
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex flex-col mt-4 lg:space-y-2">
                      <input
                        type="submit"
                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        value="Sign in"
                      />
                      <a
                        href="#"
                        type="button"
                        className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                      >
                        Forgot your Password?
                      </a>
                    </div>
                  </div>
                </form>
                <Link to={"/"}>
                  <p className="text-center">Go to Dashbbord</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

{
  /* <div className="order-first hidden w-full p-3 lg:block">
                <img
                  className="object-cover h-48 w-96 bg-cover rounded-l-lg"
                  src="https://images.unsplash.com/photo-1633352615955-f0c99e8b7e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                  alt="ddd"
                />
              </div> */
}
