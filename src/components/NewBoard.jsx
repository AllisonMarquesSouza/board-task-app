import { useState } from "react";
import FormButton from "./FormButton";
import InputText from "./InputText";

export default function NewBoard({ cancelNewBoard, onAddNewBoard }) {
  const [newBoardName, setNewBoardName] = useState(null);

  function handleNewBoard(name) {
    const ok = onAddNewBoard(name);
    if (ok) {
      cancelNewBoard();
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#2C2C2C]/50 p-4">
      <div className="flex w-full max-w-sm flex-col gap-6 rounded-lg bg-[#2C2C2C] p-4 sm:gap-8 sm:p-5">
        <h1 className="text-center text-xl font-bold text-[#F3F4F4]">
          New Board
        </h1>

        <div className="flex flex-col gap-4">
          <InputText
            placeholder="Name of the board"
            onChange={(event) => setNewBoardName(event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <FormButton onClick={() => handleNewBoard(newBoardName)}>
            Save
            {/* saved, closes */}
          </FormButton>
          <FormButton onClick={cancelNewBoard}>Cancel</FormButton>
        </div>
      </div>
    </div>
  );
}
