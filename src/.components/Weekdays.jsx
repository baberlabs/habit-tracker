export default function Weekdays() {
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
}
