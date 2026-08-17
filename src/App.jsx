import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import ButtonMenu from "./components/ButtonMenu";
import TitlePage from "./components/TitlePage";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  /*
   * Basically the user effect has 2 params, function and a list, the function will run every time you change the * list
   * In this case we aremaking the tasks be saved, and every time we change it, it reflects in the local storage
   * Also, the conversions, to JSON, and vice versa.
   */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  return (
    //main div nested layoult
    <div className="w-screen h-screen flex flex-col gap-10 bg-slate-900">
      <div className="flex flex-col text-center ">
        <ButtonMenu></ButtonMenu>
        <TitlePage></TitlePage>
      </div>

      <div className="flex justify-around pl-10 w-72 max-h-screen shrink-0 gap-6 ">
        <Board
          boardName="TO-DO"
          tasks={tasks.filter((task) => task.collumn === "todo")}
          onTaskClick={onTaskClick}
          onSaveEditedTask={onSaveEditedTask}
          onAddNewTask={onAddNewTask}
          onDeleteTask={onDeleteTask}
        ></Board>

        <Board
          boardName="DOING"
          tasks={tasks.filter((task) => task.collumn === "doing")}
          onTaskClick={onTaskClick}
          onSaveEditedTask={onSaveEditedTask}
          onAddNewTask={onAddNewTask}
          onDeleteTask={onDeleteTask}
        ></Board>
        <Board
          boardName="DONE"
          tasks={tasks.filter((task) => task.collumn === "done")}
          onTaskClick={onTaskClick}
          onSaveEditedTask={onSaveEditedTask}
          onAddNewTask={onAddNewTask}
          onDeleteTask={onDeleteTask}
        ></Board>
        <Board
          boardName="TESTING"
          tasks={tasks.filter((task) => task.collumn === "testing")}
          onTaskClick={onTaskClick}
          onSaveEditedTask={onSaveEditedTask}
          onAddNewTask={onAddNewTask}
          onDeleteTask={onDeleteTask}
        ></Board>
      </div>
    </div>
  );
}

//ADD BUTTON TO GIVE OPTION TO CREATE MORE BOARDS

export default App;
