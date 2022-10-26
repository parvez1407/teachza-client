import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="d-flex align-items-center bg-gray text-gray vh-100">
      <div className="container d-flex flex-col align-items-center justify-content-center px-5 mx-auto my-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-25 h-25 text-danger"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <div className="text-center">
          <h2 className="mb-5 fw-bolder fs-1 text-danger">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="fs-3 text-white">
            Sorry, we didn't find this page!!! Please visit Correct Path.
          </p>
          <Link
            to="/"
            className="py-3 fw-bold text-success fs-2"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
