import iconBack from "../assets/back.svg";

export default function ViewHabit({
  habits,
  setHabits,
  view,
  visibility,
  setVisibility,
}) {
  const handleCheck = (title, day, isDone) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.title === title) {
        return {
          ...habit,
          track: {
            ...habit.track,
            [day]: !isDone,
          },
        };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  const resetTrack = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset the track?",
    );
    if (confirmed) {
      const track = {};

      for (let i = 1; i <= 366; i++) {
        track[`2024_${i}`] = false;
      }

      const updatedHabits = habits.map((habit) => {
        if (habit.title === view) {
          return {
            ...habit,
            track: track,
          };
        }
      });

      setHabits(updatedHabits);
    } else {
      console.log("Reset cancelled.");
    }
  };

  const todayNumber = Math.ceil(
    (new Date() - new Date(new Date().getFullYear(), 0, 1)) / 86400000,
  );

  const goBack = () => {
    setVisibility({
      AddHabit: "hidden",
      CurrentHabits: "",
      ViewHabit: "hidden",
    });
  };

  return (
    <div className={`${visibility.ViewHabit} relative w-[360px]`}>
      <div className="absolute left-4 top-4">
        <img
          src={iconBack}
          alt="Go back icon"
          className="cursor-pointer rounded-full border border-zinc-400 px-1 py-2"
          onClick={goBack}
        />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center gap-16 rounded-xl px-10 py-20 text-xl">
        <div
          className={`flex w-[350px] flex-col items-center justify-center gap-4 rounded-xl border border-zinc-700 p-8 text-xl`}
        >
          <h2 className="text-2xl">{view}</h2>
          <div className="flex flex-row flex-wrap items-center justify-center">
            {habits.map((habit) => {
              if (habit.title === view) {
                return Object.entries(habit.track).map(
                  ([day, isDone], index) => {
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
                  },
                );
              }
            })}
          </div>
          <button
            className="rounded border border-zinc-500 p-3 text-zinc-400"
            onClick={resetTrack}
          >
            Reset Track
          </button>
        </div>
      </div>
    </div>
  );
}
