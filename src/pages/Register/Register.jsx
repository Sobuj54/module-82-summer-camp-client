import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../assets/register/web-svgrepo-com.svg";
import { useForm } from "react-hook-form";
import useContextApi from "../../Hooks/useContextApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Register = () => {
  const { createUser, updateUserProfile, googleLogIn } = useContextApi();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { name, email, password, photo } = data;

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            axios
              .post("http://localhost:5000/users", {
                name: name,
                email: email,
                photoURL: photo,
                role: "student",
              })
              .then((res) => {
                // console.log(res.data);
                if (res.data.insertedId) {
                  navigate("/");
                  toast.success("Registration Successful !", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                }
              })
              .catch((error) => {
                console.log(error);
                toast.error("Something went wrong !", {
                  position: toast.POSITION.TOP_CENTER,
                });
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleRegister = () => {
    googleLogIn()
      .then((result) => {
        const newUser = result.user;
        // console.log(newUser);
        axios
          .post("http://localhost:5000/users", {
            name: newUser.displayName,
            email: newUser.email,
            photoURL: newUser.photoURL,
            role: "student",
          })
          .then((res) => {
            // console.log(res.data);
            if (res.data.insertedId) {
              navigate("/");
              toast.success("Registration Successful !", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong !", {
              position: toast.POSITION.TOP_CENTER,
            });
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong !", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Art & Craft | Register</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-950">
        <div className="grid grid-cols-1 max-w-7xl mx-auto">
          <div className="flex items-center justify-center px-4 py-8 bg-white dark:bg-gray-950 sm:px-6 lg:px-8 sm:py-14 lg:py-18">
            <div className="xl:w-full xl:max-w-md 2xl:max-w-lg xl:mx-auto  border-4 border-teal-400 p-5 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-lg">
              <h2 className="text-3xl font-bold leading-tight text-black font-amaranth dark:text-white/95 sm:text-4xl">
                Register to Art & Craft
              </h2>
              <p className="mt-2 text-base text-gray-600 dark:text-white/95 font-amaranth">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 dark:text-cyan-300 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                  Login
                </Link>
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900 dark:text-white/95 font-amaranth">
                      {" "}
                      Fast & Last name{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>

                      <input
                        type="text"
                        {...register("name")}
                        required
                        placeholder="Enter your full name"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none font-amaranth focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-amaranth text-base font-medium text-gray-900 dark:text-white/95">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>

                      <input
                        type="email"
                        {...register("email")}
                        required
                        placeholder="Enter email to get started"
                        className="block w-full py-4 font-amaranth pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium font-amaranth text-gray-900 dark:text-white/95">
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                          />
                        </svg>
                      </div>

                      <input
                        type="password"
                        {...register("password")}
                        required
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-10 pr-4 text-black font-amaranth placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  {/* photo url */}
                  <div>
                    <label className="text-base font-medium text-gray-900 dark:text-white/95 font-amaranth">
                      {" "}
                      Photo URL{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img src={icon} alt="icon" className="w-5 h-5" />
                      </div>

                      <input
                        type="url"
                        {...register("photo")}
                        required
                        placeholder="Enter your photo url"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 font-amaranth transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80">
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  onClick={handleGoogleRegister}
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none ">
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </div>
                  Register with Google
                </button>
              </div>

              <p className="mt-5 text-sm text-gray-600">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                  Privacy Policy
                </a>{" "}
                &
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Register;
