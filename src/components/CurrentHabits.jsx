export default function CurrentHabits({ habits, setView }) {
  const handleViewClick = (e) => {
    e.preventDefault();
    setView(e.target.innerText);
  };

  return (
    <div className="flex flex-col items-center gap-16 rounded-xl border border-zinc-700 px-10 py-20 text-xl">
      <hr className="w-20 rotate-90 border-zinc-400" />
      {habits.length > 0 &&
        habits.map((habit, index) => {
          if (index !== habits.length - 1) {
            return (
              <div key={index} className="flex flex-col items-center gap-10">
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
  );
}
