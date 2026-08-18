import { Plus } from "lucide-react";
import { useEffect, useState, useReducer } from "react";
import { v4 } from "uuid";
import "./App.css";
import Board from "./components/Board";
import ButtonMenu from "./components/ButtonMenu";
import NewBoard from "./components/NewBoard";

function App() {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTasks);
  //tasks - current value, dispatch(function to call in the handler), userReducer(functionToManageAllCases, initalValueIfThereIsAny)
  function tasksReducer(tasks, action) {
    /*
     * the function inside the reducer receveis (currentValue(Always a array? check this.), action(brought by  dispatch))
     * React receives the returned array and automatically uses it as the new tasks value, or current value of the reducer.
     * You do not write something like tasks = newTasks yourself.
     */

    switch (action.type) {
      case "TASK_COMPLETED":
        return tasks.map((task) => {
          if (task.id === action.taskId) {
            return {
              ...task,
              isCompleted: !task.isCompleted,
            };
          }
          return task;
        });

      case "TASK_UPDATE":
        return tasks.map((task) => {
          if (task.id === action.taskId) {
            return {
              ...task,
              title: action.newTitle,
            };
          }
          return task;
        });
      case "TASK_DELETE":
        return tasks.filter((task) => task.id !== action.taskId);
      case "TASK_ADD":
        console.log("got here - " + action.title);
        return [
          ...tasks,
          {
            id: action.id,
            title: action.title,
            collumn: action.collumn,
            isCompleted: action.isCompleted,
          },
        ];
      default:
        return tasks;
    }
  }

  function onTaskClick(taskId) {
    /**
     *dispatch is responsible to send the action to the function that manage the logic
     * So, the “attributes” inside dispatch are just properties of the action object you designed. type
      identifies what should happen, and taskId provides the data needed to do it.
     */
    dispatchTasks({
      type: "TASK_COMPLETED",
      taskId: taskId,
    });
  }
  function onSaveEditedTask(taskId, newTitle) {
    dispatchTasks({
      type: "TASK_UPDATE",
      taskId: taskId,
      newTitle: newTitle,
    });
    return true;
  }

  function onDeleteTask(taskId) {
    dispatchTasks({
      type: "TASK_DELETE",
      taskId: taskId,
    });
  }

  function onAddNewTask(title, collumn) {
    dispatchTasks({
      type: "TASK_ADD",
      id: v4(),
      title: title,
      collumn: collumn,
      isCompleted: false,
    });
    return true;
  }

  /*
   * Basically the user effect has 2 params, function and a list, the function will run every time you change the * list
   * In this case we aremaking the tasks be saved, and every time we change it, it reflects in the local storage
   * Also, the conversions, to JSON, and vice versa.
   */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const inicialBoards = JSON.parse(localStorage.getItem("boards")) || [
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
  ];

  const [boards, dispatchBoards] = useReducer(boardsReducer, inicialBoards);

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  function boardsReducer(boards, action) {
    switch (action.type) {
      case "BOARD_ADD": {
        return [
          ...boards,
          {
            id: action.id,
            name: action.name,
          },
        ];
      }
      case "BOARD_DELETE": {
        return boards.filter((board) => board.id !== action.id);
      }
      default:
        return boards;
    }
  }

  function onAddNewBoard(name) {
    dispatchBoards({
      type: "BOARD_ADD",
      id: v4(),
      name: name,
    });
    return true;
  }

  function onDeleteBoard(boardId) {
    dispatchBoards({
      type: "BOARD_DELETE",
      id: boardId,
    });
    return true;
  }

  const [isAddingBoard, setIsAddingBoard] = useState(false);

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
          onClick={() => setIsAddingBoard(true)}
          className="flex items-center gap-2 w-25 h-14 p-4 bg-[#F3F4F4] text-[#2C2C2C] hover:bg-[#F3F4F4]/50 transition rounded-lg"
        >
          <Plus />
          <span>Add board</span>
        </button>
        {isAddingBoard && (
          <NewBoard
            cancelNewBoard={() => setIsAddingBoard(false)}
            onAddNewBoard={onAddNewBoard}
          />
        )}
      </ul>
    </div>
  );
}

export default App;
