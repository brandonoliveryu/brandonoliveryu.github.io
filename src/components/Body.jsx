import React from "react";

const Body = () => {
  return (
    <div className="flex-col text-base items-center justify-center font-rubik">
      <p className="mt-5">
        I’m 22yo. Born and raised in Toronto 🇨🇦 and now based in Palo Alto 🇺🇸
      </p>
      <p className="mt-4">
        Currently, I’m the Chief of Staff of{" "}
        <a
          href="https://mybiogenesis.com"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Biogenesis
        </a>
        , an end-to-end platform to accelerate clinical trials and bring
        cheaper, more effective medicines to patients. I’m obsessed with systems
        design, building effective teams, and pursuing the Third Door.
      </p>
      <p className="mt-4">
        Previously, I’ve advised on innovation initiatives for F500 CIOs, played
        poker with some high-stakes sharks, and hiked Bali's beautiful Mt. Batur
        volcano at 2:00AM. I’ve built two orgs (like{" "}
        <a
          href="https://twitter.com/NucleateDojo"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nucleate Dojo
        </a>
        ), invested in some great founders, and built pieces of a cancer drug. I
        grew up with autoimmune conditions, and am now on a mission to solve
        them.
      </p>
      <p className="mt-4">
        Please feel free to{" "}
        <a
          href="https://twitter.com/brandonoliveryu"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          reach out
        </a>
        , or stay in touch via{" "}
        <a
          href="https://linkedin.com/in/brandonoliveryu"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>{" "}
        or{" "}
        <a
          href="https://brandonyu.substack.com/"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          my monthly updates
        </a>
        .
      </p>
    </div>
  );
};

export default Body;
