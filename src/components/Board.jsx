import ButtonAddTask from "./ButtonAddTask";
import Task from "./Task";

export default function Board({
  boardName,
  tasks,
  onTaskClick,
  onSaveEditedTask,
  onAddNewTask,
  onDeleteTask,
}) {
  return (
    <div className="flex flex-col justify-start gap-2 w-80  h-[85vh] shrink-0 bg-slate-50 rounded-lg p-2">
      <h1 className="text-xl font-bold text-slate-900">{boardName}</h1>
      <Task
        tasks={tasks}
        onTaskClick={onTaskClick}
        onSaveEditedTask={onSaveEditedTask}
        onDeleteTask={onDeleteTask}
      />
      <ButtonAddTask onAddNewTask={onAddNewTask} />
    </div>
  );
}
