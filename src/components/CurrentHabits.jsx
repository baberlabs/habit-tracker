import iconBack from "../assets/back.svg";

export default function CurrentHabits({
  habits,
  setHabits,
  setView,
  visibility,
  setVisibility,
}) {
  const handleView = (e) => {
    e.preventDefault();
    setView(e.target.innerText);
  };

  const handleVisibility = () => {
    setVisibility({
      AddHabit: "hidden",
      CurrentHabits: "hidden",
      ViewHabit: "",
    });
  };

  const handleClick = (e) => {
    handleView(e);
    handleVisibility();
  };

  const goBack = () => {
    setVisibility({
      AddHabit: "",
      CurrentHabits: "hidden",
      ViewHabit: "hidden",
    });
  };

  return (
    <div className={`${visibility.CurrentHabits} relative w-[360px]`}>
      <div className="absolute left-4 top-4">
        <img
          src={iconBack}
          alt="Go back icon"
          className="cursor-pointer rounded-full border border-zinc-400 px-1 py-2"
          onClick={goBack}
        />
      </div>
      <div
        className={`flex min-h-screen flex-col items-center justify-center gap-16 rounded-xl px-10 py-20 text-xl`}
      >
        <hr className="w-20 rotate-90 border-zinc-400" />
        {habits.length > 0 &&
          habits.map((habit, index) => {
            if (index !== habits.length - 1) {
              return (
                <div key={index} className="flex flex-col items-center gap-10">
                  <p
                    className="cursor-pointer text-center text-3xl"
                    onClick={handleClick}
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
                    onClick={handleClick}
                  >
                    {habit.title}
                  </p>
                </div>
              );
            }
          })}
        <hr className="w-20 rotate-90 border-zinc-400" />
        <button
          className="bg-zinc-200 p-4 text-zinc-800"
          onClick={() => {
            const confirmed = window.confirm(
              "Are you sure you want to delete all habits?",
            );
            if (confirmed) {
              setHabits([]);
            } else {
              console.log("Delete process cancelled.");
            }
          }}
        >
          Delete All Habits
        </button>
      </div>
    </div>
  );
}
