import { useState } from "react";

export default function AddHabit({ habits, setHabits, setView }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const updatedHabits = [...habits];

      /*
    
    [
        {
            title: Journalling
            year: 2024
            track: [
                2024_1: false,
                2024_2: false,
                2024_3: false,
                ...
                ...
                ...
                2024_366: false
            ]
        }
    ]
    
    */

      const title = inputValue;
      const year = new Date().getFullYear();
      const yearDays = 366;
      const track = {};

      for (let i = 1; i <= yearDays; i++) {
        track[`${year}_${i}`] = false;
      }

      const newHabit = {
        title,
        year,
        track,
      };

      updatedHabits.push(newHabit);
      setHabits(updatedHabits);
      setView(title);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col gap-14 rounded-xl border border-zinc-700 p-4 text-xl">
      <h1 className="text-center text-4xl">
        <div>Minimalist</div>
        <div>Habit Tracker</div>
      </h1>
      <form className="flex flex-col gap-14">
        <input
          type="text"
          placeholder="Habit Name"
          className="rounded border border-zinc-700 bg-inherit p-2 text-xl"
          value={inputValue}
          onChange={handleInput}
        />

        <button
          className="rounded bg-zinc-300 p-3 font-bold text-zinc-950"
          onClick={handleClick}
        >
          Start Tracking
        </button>
      </form>
      <a href="current-habits" className="text-center text-zinc-300 underline">
        View current habits
      </a>
    </div>
  );
}
