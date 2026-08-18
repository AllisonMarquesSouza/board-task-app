import { useState } from "react";
import FormButton from "./FormButton";
import InputText from "./InputText";

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
      <InputText
        value={editedTitle}
        onChange={(event) => setEditedTitle(event.target.value)}
      />
      <div className="flex flex-col gap-2 sm:flex-row">
        <FormButton onClick={() => handleSave(task.id, editedTitle)}>
          Save
        </FormButton>
        <FormButton onClick={offEditTaskClick}>Cancel</FormButton>
        {/* I don't need to close here like above, because when I delete the state of tasks is changed and reloaded,
        in the end they find out that this task I'm deleting/showing no longer exists(based on id), so doesn't show anymore. 
        The delete results in editingTaskId=null stays like this */}
        <FormButton onClick={() => onDeleteTask(task.id)}>Delete</FormButton>
      </div>
    </div>
  );
}
