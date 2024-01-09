import React, { useState } from "react";

export const Section1 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //   const [all, setAll] = useState([{ good: "", neutral: "", bad: "" }]);
  // handle good
  const handleGood = () => {
    setGood(good + 1);
  };
  // handle bad
  const handelBad = () => {
    setBad(bad + 1);
  };
  // handle neural
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const all = good + neutral + bad;
  return (
    <div>
      <p className="pb-[20px] font-bold text-[20px]">give feedback</p>
      <section className="flex gap-[20px] items-center">
        <button
          className="p-[10px] rounded-[5px] feed-btn bg-[green]"
          onClick={() => {
            handleGood();
            console.log(good);
          }}
        >
          good
        </button>
        <button
          className="p-[10px] rounded-[5px] feed-btn bg-[whitesmoke]"
          onClick={() => {
            handleNeutral();
            console.log(neutral);
          }}
        >
          neutral
        </button>
        <button
          className="p-[10px] rounded-[5px] feed-btn bg-[red]"
          onClick={() => {
            handelBad();
            console.log(bad);
          }}
        >
          poor
        </button>
      </section>
      <p className="pt-[20px] font-bold text-[20px]">statistics</p>
      {all === 0 ? (
        <div>No feedback given</div>
      ) : (
        <div>
          <p className="font-medium text-[17px] pb-[5px]">
            good {""} {good}
          </p>
          <p className="font-medium text-[17px] pb-[5px]">
            neutral {""} {neutral}
          </p>
          <p className="font-medium text-[17px] pb-[5px]">
            bad {""} {bad}
          </p>
          <p className="font-medium text-[17px] pb-[5px]">
            all {""} {all}
          </p>
        </div>
      )}
    </div>
  );
};
