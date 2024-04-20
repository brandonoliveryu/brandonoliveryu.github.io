import React from "react";
import linkedInImage from "../assets/images/Linkedin.png";
import twitterImage from "../assets/images/Twitter.png";
import emailImage from "../assets/images/Email.png";

const Navbar = () => {
  return (
    <div className="flex font-rubik text-white">
      <h1 className="w-full text-xl font-semibold text-black">
        Hi there, I'm Brandon 👋
      </h1>
{/* 
      <p className="flex text-black items-center justify-center">
        {" "}
        <a
          href="https://linkedin.com/in/brandonoliveryu"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedInImage}
            alt="LinkedIn Profile"
            className="hover:opacity-50"
            style={{ width: "30px", height: "26px" }}
          />
        </a>{" "}
      </p>

      <p className="flex text-black items-center justify-center">
        {" "}
        <a
          href="https://twitter.com/brandonoliveryu"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={twitterImage}
            alt="Twitter Profile"
            className="hover:opacity-50"
            style={{ width: "30px", height: "26px" }}
          />
        </a>{" "}
      </p>

      <p className="flex text-black items-center justify-center">
        {" "}
        <a
          href="mailto:brandonoliveryu@gmail.com"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={emailImage}
            alt="LinkedIn Profile"
            className="hover:opacity-50"
            style={{ width: "30px", height: "26px" }}
          />
        </a>{" "}
      </p> */}

      <hr />
    </div>
  );
};

export default Navbar;
