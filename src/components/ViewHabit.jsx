export default function ViewHabit({ habits, setHabits, view }) {
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

  const todayNumber = Math.ceil(
    (new Date() - new Date(new Date().getFullYear(), 0, 1)) / 86400000,
  );

  return (
    <div className="flex w-[350px] flex-col items-center justify-center gap-4 rounded-xl border border-zinc-700 p-8 text-xl">
      <h2 className="text-xl">{view}</h2>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {habits.map((habit) => {
          if (habit.title === view) {
            return Object.entries(habit.track).map(([day, isDone], index) => {
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
  );
}
