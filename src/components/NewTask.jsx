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
   * will also be selected to add a new task. Which makes total sense
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
    <div className="fixed inset-0 flex items-center justify-center bg-[#2C2C2C]/50">
      <div className="flex flex-col gap-8 bg-[#2C2C2C] p-5 size-96 rounded-lg">
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
            {boards.map((boardGet) => {
              return (
                //I need to return the value, this is a function, so the function of component will only get the value
                // if it is returned
                <option key={boardGet.id} value={boardGet.name}>
                  {boardGet.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex gap-2">
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
