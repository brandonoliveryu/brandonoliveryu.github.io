import React from "react";

const Body = () => {
  return (
    <div
      className="flex-col items-center justify-center font-opensans"
      style={{ fontWeight: 300 }}
    >
      <p className="mt-5">
        I’m 22yo; born and raised in Toronto, and am now based in Palo Alto.
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
        , where we're building an end-to-end platform to accelerate clinical
        trials. I’m obsessed with systems design, building effective teams, and
        doing good things with good people.
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
        ), invested in some great founders, and built some pieces of a cancer
        drug.
      </p>
      <p className="mt-4">
        Please feel free to{" "}
        <a
          href="mailto:brandonoliveryu@gmail.com"
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          reach out
        </a>
        , or stay in touch via{" "}
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
