import React from "react";

const Body = () => {
  return (
    <div className="flex-col text-base items-center justify-center font-rubik pb-20">
      <p className="mt-5">
        I’m 22y/o - born and raised in Toronto and now based in Palo Alto.
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
        ), did healthcare consulting in both public and private sectors, and
        engineered immune cells and multamerized antibodies. I grew up with
        autoimmune conditions, and am now on a mission to solve them.
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
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          href="https://brandonyu.substack.com"
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
