import React, { useState } from "react";

export const Section2 = () => {
  const [next, setNext] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  // handleVote
  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[next] += 1;
    setVotes(newVotes);
  };

  // handle next
  const handleNext = () => {
    const hasNext = next < anecdotes.length - 1;
    if (hasNext) {
      setNext(next + 1);
    } else {
      setNext(0);
    }
  };
  // function to get index of anecdote with highest vote count
  const getHighestVoteIndex = () => {
    const maxVote = Math.max(...votes);
    return votes.indexOf(maxVote);
  };
  const highestVoteIndex = getHighestVoteIndex();

  let anecdote = anecdotes[next];
  return (
    <div className="pt-[50px]">
      <p className="text-[30px] font-bold pb-[20px]">section 2</p>
      <p className="text-[22px] font-bold">anecdote of the day</p>
      <p className="text-[18px] font-semibold pb-[10px]">
        {anecdote} has {votes[next]}
      </p>
      <div className="flex gap-[20px] pb-[20px]">
        <button
          className="p-[10px] rounded-[5px] feed-btn bg-[whitesmoke]"
          onClick={() => {
            handleVote();
          }}
        >
          Vote
        </button>
        <button
          className="p-[10px] rounded-[5px] feed-btn bg-[whitesmoke]"
          onClick={() => {
            handleNext();

            // console.log(next);
          }}
        >
          Next anecdotes
        </button>
      </div>
      <p className="text-[22px] font-bold">anecdote with the most vote</p>
      <p>
        {anecdotes[highestVoteIndex]} {highestVoteIndex}
      </p>
    </div>
  );
};
