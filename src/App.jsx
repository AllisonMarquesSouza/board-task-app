import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import "./App.css";
import Board from "./components/Board";
import ButtonMenu from "./components/ButtonMenu";
import NewBoard from "./components/NewBoard";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("boards")) || [
      {
        id: v4(),
        name: "TO-DO",
      },
      {
        id: v4(),
        name: "DOING",
      },
      {
        id: v4(),
        name: "DONE",
      },
    ],
  );

  const [isAddingBoard, setIsAddingBoard] = useState(false);

  function activeNewBoard() {
    setIsAddingBoard(true); //if is true, then it'll show the NewTask component...
  }
  function cancelNewBoard() {
    setIsAddingBoard(false); //if is true, then it'll show the NewTask component...
  }

  /*
   * Basically the user effect has 2 params, function and a list, the function will run every time you change the * list
   * In this case we aremaking the tasks be saved, and every time we change it, it reflects in the local storage
   * Also, the conversions, to JSON, and vice versa.
   */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //ask if I can have several useEffect of different arrays or things
  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onSaveEditedTask(taskId, newTitle) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
        };
      }

      return task;
    });

    setTasks(newTasks);
    return true;
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    return true;
  }

  function onAddNewTask(title, collumn) {
    const newTask = {
      id: v4(), //random id, external library
      title: title,
      collumn: collumn,
      isCompleted: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    return true;
  }

  function onAddNewBoard(name) {
    console.log(name);

    const newBoard = {
      id: v4(),
      name: name,
    };
    const newBoards = [...boards, newBoard];
    setBoards(newBoards);
    return true;
  }

  function onDeleteBoard(boardId) {
    const newBoards = boards.filter((board) => board.id !== boardId);
    setBoards(newBoards);
    return true;
  }

  return (
    //main div nested layoult
    <div className="w-screen h-screen flex flex-col gap-10 bg-[#2C2C2C]">
      <div className="flex text-center">
        <ButtonMenu></ButtonMenu>
        <h1 className="text-4xl text-[#F3F4F4]  font-bold">Kanban</h1>;
      </div>

      <ul className="flex gap-4 pl-6 pr-6 w-full overflow-x-auto max-h-screen  shrink-0 ">
        {/* tells a web browser how to handle content that is too wide for its box on the left and right sides. It adds a horizontal scrollbar only if the content is wider than the box. If the content fits inside, no scrollbar appears */}
        {boards.map((board) => {
          return (
            <li key={board.id}>
              <Board
                board={board}
                boards={boards}
                tasks={tasks.filter((task) => task.collumn === board.name)}
                onTaskClick={onTaskClick}
                onSaveEditedTask={onSaveEditedTask}
                onAddNewTask={onAddNewTask}
                onDeleteTask={onDeleteTask}
                onDeleteBoard={onDeleteBoard}
              />
            </li>
          );
        })}
        <button
          onClick={activeNewBoard}
          className="flex items-center gap-2 w-25 h-14 p-4 bg-[#F3F4F4] text-[#2C2C2C] hover:bg-[#F3F4F4]/50 transition rounded-lg"
        >
          <Plus />
          <span>Add board</span>
        </button>
        {isAddingBoard && (
          <NewBoard
            cancelNewBoard={cancelNewBoard}
            onAddNewBoard={onAddNewBoard}
          />
        )}
      </ul>
    </div>
  );
}

export default App;
