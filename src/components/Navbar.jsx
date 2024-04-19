import React from "react";

const Navbar = () => {
  return (
    <div className="flex font-opensans text-white" style={{ fontWeight: 300 }}>
      <h1 className="w-full text-2xl font-medium text-black">
        Hi, I'm Brandon 👋
      </h1>

      <p className="text-black p-2 items-center justify-center">
        {" "}
        <a
          href="https://linkedin.com/in/brandonoliveryu"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
      </p>

      <p className="text-black p-2 items-center justify-center">
        {" "}
        <a
          href="https://twitter.com/brandonoliveryu"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
      </p>

      <p className="text-black p-2 items-center justify-center">
        {" "}
        <a
          href="mailto:brandonoliveryu@gmail.com"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>{" "}
      </p>

      <hr />
    </div>
  );
};

export default Navbar;
