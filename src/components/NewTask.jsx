import { useState } from "react";
import TaskFormButtons from "./TaskFormButtons";

export default function NewTask({ cancelNewTask, onAddNewTask }) {
  /*
fixed means: Position this element relative to the browser viewport. Basically won't be inside the board anymore, but inside the whole page itself.

Position this element relative to the browser viewport.

inset-0 -> top: 0; right: 0; bottom: 0; left: 0;
So the outer <div> covers the entire scree


*/

  const [column, setColumn] = useState("todo");
  const [title, setTitle] = useState(null);

  function handleNewTask(title, column) {
    const ok = onAddNewTask(title, column);
    if (ok) {
      cancelNewTask();
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="flex flex-col gap-8 bg-slate-900 p-5 size-96 rounded-lg">
        <h1 className="text-center text-xl font-bold text-slate-50">
          New Task
        </h1>

        {/* another component.. */}
        <div className="flex flex-col gap-4">
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter title of the task"
            className="p-2 rounded-lg"
          />
          <select
            className="p-2 rounded-md text-slate-900"
            onChange={(event) => setColumn(event.target.value)}
          >
            <option value="todo">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
            <option value="testing">Testing</option>
          </select>
        </div>

        {/* another component... */}
        <div className="flex gap-2">
          <TaskFormButtons onClick={() => handleNewTask(title, column)}>
            Save
          </TaskFormButtons>
          <TaskFormButtons onClick={cancelNewTask}>Cancel</TaskFormButtons>
        </div>
      </div>
    </div>
  );
}
