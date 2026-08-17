import ButtonAddTask from "./AddTaskButton";
import Task from "./Task";
import { Trash2 } from "lucide-react";

export default function Board({
  board,
  boards,
  tasks,
  onTaskClick,
  onSaveEditedTask,
  onAddNewTask,
  onDeleteTask,
  onDeleteBoard,
}) {
  return (
    <div className="flex flex-col justify-start gap-4 w-80  h-[85vh] shrink-0 bg-[#F3F4F4] rounded-lg p-2">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold text-[#2C2C2C]">{board.name}</h1>
        <button
          onClick={() => {
            onDeleteBoard(board.id);
          }}
          className="transition hover:opacity-50"
        >
          <Trash2 />
        </button>
      </div>
      <Task
        tasks={tasks}
        onTaskClick={onTaskClick}
        onSaveEditedTask={onSaveEditedTask}
        onDeleteTask={onDeleteTask}
      />
      <ButtonAddTask
        onAddNewTask={onAddNewTask}
        board={board}
        boards={boards}
      />
    </div>
  );
}
