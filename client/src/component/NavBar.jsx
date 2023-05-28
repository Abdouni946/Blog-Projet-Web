import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser) {
      setUser(true);
      setUserInfo(storedUser)
    }
  }, []);

  const handleLogout = () => {
    // Perform logout logic here
    setUser(false);
    localStorage.removeItem("user");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
      <a className="flex cursor-default items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <span className="text-green-500">BloggyBee</span>
          </span>
        </a>
        <div className="flex md:order-6">
          {user ? (
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          ) : (
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <Link to="/login" style={{ color: "white" }}>
                Get Started
              </Link>
            </button>
          )}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-1 md:p-0  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-12  md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                className="mt-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                <Link to="/" style={{ color: "black" }}>
                  HOME
                </Link>
              </a>
            </li>
            <li>
              {user ? (
                <button
                  type="button"
                  className="mt-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Link to={`/Profil/${userInfo.id}`} style={{ color: "black" }}>
                    PROFIL
                  </Link>
                </button>
              ) : (
                <button
                  type="button"
                  className="mt-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Link to="/MostReviews" style={{ color: "black" }}>
                    MOST REVIEWS
                  </Link>
                </button>
              )}
            </li>
            <li>
              <a
                className="mt-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <Link to="/Categories" style={{ color: "black" }}>
                  CATEGORIES
                </Link>
              </a>
            </li>
            {user ? (
              <button
                type="button"
                className="mt-2 block py-2 pl-3 pr-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <Link to={`/Myarticle/${userInfo.id}`} style={{ color: "black" }}>
                  MY ARTICLES
                </Link>
              </button>
            ) : (
              <button
                type="button"
                className="mt-2 block py-2 pl-1 pr-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
