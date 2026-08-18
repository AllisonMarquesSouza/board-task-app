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
  onMoveTask,
}) {
  return (
    <div
      className="flex h-full w-[calc(100vw-1.5rem)] min-w-[17rem] shrink-0 flex-col gap-3 rounded-lg bg-[#F3F4F4] p-3 sm:w-80 sm:gap-4"
      /*
      This runs continuously while you drag something over the board.
      By default, the browser does not allow most elements to receivedropped items.
      preventDefault() tells it: “This board is allowed to receive a drop.”
      Without it, onDrop will not run.
       */
      onDragOver={(event) => event.preventDefault()}
      /*This runs once when the user releases the mouse over the board. Drop the element in the end.
      Get the taskId that was stored in the dradding
      */
      onDrop={(event) => {
        //the taskId comes from the matching setData call when the drag starts: in the Task.jsx
        const taskId = event.dataTransfer.getData("taskId");

        //just save the end result
        onMoveTask(taskId, board.name);
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <h1 className="break-words text-lg font-bold text-[#2C2C2C] sm:text-xl">{board.name}</h1>
        <button
          onClick={() => {
            onDeleteBoard(board.id);
          }}
          className="shrink-0 rounded p-1 transition hover:bg-[#2C2C2C]/10"
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
