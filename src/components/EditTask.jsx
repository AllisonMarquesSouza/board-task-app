import { useState } from "react";
import TaskFormButtons from "./TaskFormButtons";

export default function EditTask({
  task,
  onSaveEditedTask,
  offEditTaskClick,
  onDeleteTask,
}) {
  const [editedTitle, setEditedTitle] = useState(task.title); //storing data of the current title and the one being edited

  function handleSave(taskId, editedTitle) {
    const ok = onSaveEditedTask(taskId, editedTitle);
    if (ok) {
      offEditTaskClick(); //function to get out the edit window...
    }
  }

  return (
    <div className="flex flex-col flex-1 gap-2 text-slate-900">
      <input
        className=" W-full p-2 rounded-lg"
        value={editedTitle} //updating the value in real time to keep showing what the user typed.
        onChange={(event) => setEditedTitle(event.target.value)} //the edited title whenever the user type something.
      />

      <div className="flex gap-2">
        <TaskFormButtons onClick={() => handleSave(task.id, editedTitle)}>
          Save
        </TaskFormButtons>
        <TaskFormButtons onClick={offEditTaskClick}>Cancel</TaskFormButtons>
        {/* I don't need to close here like above, because when I delete the state of tasks is changed and reloaded,
        in the end they find out that this task I'm deleting/showing no longer exists(based on id), so doesn't show anymore. 
        The delete results in editingTaskId=null stays like this */}
        <TaskFormButtons onClick={() => onDeleteTask(task.id)}>
          Delete
        </TaskFormButtons>
      </div>
    </div>
  );
}
