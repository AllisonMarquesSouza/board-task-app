import { useState } from "react";
import FormButton from "./FormButton";
import InputText from "./InputText";

export default function NewTask({
  cancelNewTask,
  onAddNewTask,
  board,
  boards,
}) {
  /*
fixed means: Position this element relative to the browser viewport. Basically won't be inside the board anymore, but inside the whole page itself.

Position this element relative to the browser viewport.

inset-0 -> top: 0; right: 0; bottom: 0; left: 0;
So the outer <div> covers the entire scree


*/

  const [optionBoardName, setOptionBoardName] = useState(board.name);
  /*
   * Defined the optionBoardName by default the board.name, it means that the board you click in,
   * will also be selected to add a new task. Which makes total sense, although it's not recommended to pass props in states
   * in this case, I found this option. I'll check this later.
   * REMEMBER -> OptionBoardName === board.name (I kept the same pattern, to make things easier.)
   */
  const [title, setTitle] = useState(null);

  function handleNewTask(title, column) {
    const ok = onAddNewTask(title, column);
    if (ok) {
      cancelNewTask();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#2C2C2C]/50 p-4">
      <div className="flex max-h-[calc(100dvh-2rem)] w-full max-w-md flex-col gap-6 overflow-y-auto rounded-lg bg-[#2C2C2C] p-4 sm:gap-8 sm:p-5">
        <h1 className="text-center text-xl font-bold text-[#F3F4F4]">
          New Task
        </h1>

        <div className="flex flex-col gap-4 ">
          <InputText
            placeholder={"Enter title of the task"}
            onChange={(event) => setTitle(event.target.value)}
          />
          <select
            className="p-2 rounded-md text-[#2C2C2C]"
            value={optionBoardName}
            onChange={(event) => setOptionBoardName(event.target.value)}
          >
            {boards.map((boardGet) => (
              /* The parentheses () already return automatically.
               * So, as a preference:
               *  Only JSX to return → (...)
               * Variables, if statements, or multiple steps → { ... return (...) } curly brackets
               */
              <option key={boardGet.id} value={boardGet.name}>
                {boardGet.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <FormButton
            onClick={() => handleNewTask(title, optionBoardName)} //why is optionBoard null?
          >
            Save
          </FormButton>
          <FormButton onClick={cancelNewTask}>Cancel</FormButton>
        </div>
      </div>
    </div>
  );
}
