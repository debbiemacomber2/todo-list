import { useState } from "react";

export default function NewTask({ setToDo, toDo }) {
  const [newTask, setNewTask] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    if (
      newTask.trim() !== "" &&
      dueDate.trim() !== "" &&
      dueDate.split(".")[0] <= 31 &&
      dueDate.split(".")[1] <= 12
    ) {
      const [date, month] = dueDate.split(".");
      setToDo([
        ...toDo,
        {
          task: newTask,
          due: { date, month },
          completed: false,
        },
      ]);
    }
    setNewTask("");
    setdueDate("");
  };

  const handleDate = (e) => {
    setdueDate(e.target.value);
  };

  return (
    <form onSubmit={addTask} className="newItem">
      <input
        type="text"
        placeholder="Add New Task Here"
        onChange={handleTaskChange}
        value={newTask}
        autoFocus={true}
      />
      <input
        type="text"
        placeholder="dd.mm"
        onChange={handleDate}
        value={dueDate}
      />
      <button type="submit">+</button>
    </form>
  );
}
