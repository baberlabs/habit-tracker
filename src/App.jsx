import "./custom-checkbox.css";

import { useState, useEffect } from "react";

export default function App() {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("habits")) || [],
  );
  const [inputValue, setInputValue] = useState("");

  const [view, setView] = useState(localStorage.getItem("currentView") || "");

  useEffect(() => {
    localStorage.setItem("currentView", view);
  }, [view]);

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
  };

  const handleViewClick = (e) => {
    e.preventDefault();
    setView(e.target.innerText);
  };

  const handleCheck = (title, day, isDone) => {
    const updatedHabits = [...habits];
    updatedHabits.map((habit) => {
      if (habit.title === title) {
        habit.track[day] = !isDone;
      }
    });
    setHabits(updatedHabits);
  };

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
                  {/* <a
                    href="/habit-view"
                    className="text-center text-3xl"
                    onClick={handleViewClick}
                    >
                    {habit.title}
                </a> */}
                  <p
                    className="cursor-pointer text-center text-3xl"
                    onClick={handleViewClick}
                  >
                    {habit.title}
                  </p>
                  <hr className="w-10 border-zinc-400" />
                </div>
              );
            } else {
              return (
                <div key={index} className="flex flex-col items-center gap-4">
                  {/* <a
                    href="/habit-view"
                    className="text-center text-3xl"
                    onClick={handleViewClick}
                    >
                    {habit.title}
                </a> */}
                  <p
                    className="cursor-pointer text-center text-3xl"
                    onClick={handleViewClick}
                  >
                    {habit.title}
                  </p>
                </div>
              );
            }
          })}
        <hr className="w-20 rotate-90 border-zinc-400" />
      </div>

      {/* Habit View */}
      <div className="flex w-[350px] flex-col items-center justify-center gap-4 rounded-xl border border-zinc-700 p-8 text-xl">
        <h2 className="text-xl">{view}</h2>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {habits.map((habit) => {
            if (habit.title === view) {
              // console.log(habit);
              return Object.entries(habit.track).map(([day, isDone], index) => {
                const date = new Date();
                const todayNumber = Math.ceil(
                  (date - new Date(date.getFullYear(), 0, 1)) / 86400000,
                );
                if (index + 1 < todayNumber) {
                  return (
                    <input
                      key={day}
                      type="checkbox"
                      name={day}
                      id={day}
                      checked={isDone}
                      onChange={() => handleCheck(habit.title, day, isDone)}
                      className="pastday-checkbox"
                    />
                  );
                } else if (index + 1 === todayNumber) {
                  return (
                    <input
                      key={day}
                      type="checkbox"
                      name={day}
                      id={day}
                      checked={isDone}
                      onChange={() => handleCheck(habit.title, day, isDone)}
                      className="today-checkbox"
                    />
                  );
                } else {
                  return (
                    <input
                      key={day}
                      type="checkbox"
                      name={day}
                      id={day}
                      checked={isDone}
                      onChange={() => handleCheck(habit.title, day, isDone)}
                      className="day-checkbox"
                    />
                  );
                }
              });
            }
          })}
        </div>
      </div>
      {/*
      <input
        key={index}
        type="checkbox"
        name={index}
        id={index}
        checked={day}
        onChange={() => handleCheck(day, index)}
        className="today-checkbox"
      />
      */}
    </div>
  );
}
