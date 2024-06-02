import "./custom-checkbox.css";

import { useState, useEffect } from "react";

export default function App() {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("habits")) || [],
  );
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const updatedHabits = [...habits];

    /*
    
    [
        {
            title: <name>,
            year: 2024
            track: [
                false,
                false,
                false
            ]
        }
    ]
    
    */

    const habitTrack = [];
    for (let i = 1; i <= 366; i++) {
      habitTrack.push(false);
    }

    const newHabit = {
      name: inputValue,
      year: 2024,
      track: habitTrack,
    };

    updatedHabits.push(newHabit);
    setHabits(updatedHabits);
    setInputValue("");
  };

  let days = null;

  if (habits.length > 0) {
    days = habits[0].track;
  }

  const handleCheck = (isDone, index) => {
    // console.log(isDone, index);
    const updatedHabits = habits.map((habit, habitIndex) => {
      if (habitIndex === 0) {
        const updatedTrack = habit.track.map((trackDay, trackIndex) => {
          if (trackIndex === index) {
            return !trackDay;
          }
          return trackDay;
        });
        return { ...habit, track: updatedTrack };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  const date = new Date();
  const todayNumber = Math.ceil(
    (date - new Date(date.getFullYear(), 0, 1)) / 86400000,
  );

  return (
    <div className="flex min-h-screen flex-row items-center justify-center gap-16 bg-zinc-950 text-gray-200">
      {/* Habit Add */}
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
        <a
          href="current-habits"
          className="text-center text-zinc-300 underline"
        >
          View current habits
        </a>
      </div>

      {/* Habit List */}
      <div className="flex flex-col items-center gap-16 rounded-xl border border-zinc-700 px-10 py-20 text-xl">
        <hr className="w-20 rotate-90 border-zinc-400" />
        {habits.length > 0 &&
          habits.map((habit, index) => {
            if (index !== habits.length - 1) {
              return (
                <div key={index} className="flex flex-col items-center gap-10">
                  <a href="/habit-view" className="text-center text-3xl">
                    {habit.name}
                  </a>
                  <hr className="w-10 border-zinc-400" />
                </div>
              );
            } else {
              return (
                <div key={index} className="flex flex-col items-center gap-4">
                  <a href="/habit-view" className="text-center text-3xl">
                    {habit.name}
                  </a>
                </div>
              );
            }
          })}
        <hr className="w-20 rotate-90 border-zinc-400" />
      </div>

      {/* Habit View */}
      <div className="flex w-[350px] flex-row flex-wrap items-center justify-center gap-1 rounded-xl border border-zinc-700 p-3 text-xl">
        {days !== null &&
          days.map((day, index) => {
            if (index === todayNumber - 1) {
              console.log(index);
              return (
                <input
                  key={index}
                  type="checkbox"
                  name={index}
                  id={index}
                  checked={day}
                  onChange={() => handleCheck(day, index)}
                  className="today-checkbox"
                />
              );
            } else if (index < todayNumber - 1) {
              return (
                <input
                  key={index}
                  type="checkbox"
                  name={index}
                  id={index}
                  checked={day}
                  onChange={() => handleCheck(day, index)}
                  className="pastday-checkbox"
                />
              );
            } else {
              return (
                <input
                  key={index}
                  type="checkbox"
                  name={index}
                  id={index}
                  checked={day}
                  onChange={() => handleCheck(day, index)}
                  className="day-checkbox"
                />
              );
            }
          })}
      </div>
    </div>
  );
}

// Hidden
const Weekdays = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-row justify-center gap-5">
        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="monday"
            id="monday"
            className="custom-checkbox"
          />
          <label className="text-zinc-400" htmlFor="monday">
            Mon
          </label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="tuesday"
            id="tuesday"
            className="custom-checkbox"
          />
          <label class="text-zinc-400" htmlFor="tuesday">
            Tue
          </label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="wednesday"
            id="wednesday"
            className="custom-checkbox"
          />
          <label class="text-zinc-400" htmlFor="wednesday">
            Wed
          </label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="thursday"
            id="thursday"
            className="custom-checkbox"
          />
          <label class="text-zinc-400" htmlFor="thursday">
            Thu
          </label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="friday"
            id="friday"
            className="custom-checkbox"
          />
          <label class="text-zinc-400" htmlFor="friday">
            Fri
          </label>
        </div>
      </div>
      <hr className="w-28 border-zinc-500" />
      <div className="flex flex-row justify-center gap-5">
        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="saturday"
            id="saturday"
            className="custom-checkbox"
          />
          <label class="text-zinc-400" htmlFor="saturday">
            Sat
          </label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="sunday"
            id="sunday"
            className="custom-checkbox"
          />
          <label class="text-zinc-400" htmlFor="sunday">
            Sun
          </label>
        </div>
      </div>
    </div>
  );
};
