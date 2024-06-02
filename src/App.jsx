import "./checkbox.css";

import { useState, useEffect } from "react";

import AddHabit from "./components/AddHabit";
import CurrentHabits from "./components/CurrentHabits";
import ViewHabit from "./components/ViewHabit";

export default function App() {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("habits")) || [],
  );
  const [view, setView] = useState(localStorage.getItem("currentView") || "");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem("currentView", view);
  }, [view]);

  return (
    <div className="flex min-h-screen flex-row items-center justify-center gap-16 bg-zinc-950 text-gray-200">
      <AddHabit habits={habits} setHabits={setHabits} setView={setView} />
      <CurrentHabits habits={habits} setView={setView} />
      <ViewHabit habits={habits} setHabits={setHabits} view={view} />
    </div>
  );
}
