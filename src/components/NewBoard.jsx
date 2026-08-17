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
    <div className="fixed inset-0 flex items-center justify-center bg-[#2C2C2C]/50">
      <div className="flex flex-col gap-8 bg-[#2C2C2C] p-5 size-72 rounded-lg">
        <h1 className="text-center text-xl font-bold text-[#F3F4F4]">
          New Board
        </h1>

        <div className="flex flex-col gap-4">
          <InputText
            placeholder="Name of the board"
            onChange={(event) => setNewBoardName(event.target.value)}
          />
        </div>

        <div className="flex gap-2">
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
