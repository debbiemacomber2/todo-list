import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./pages/Tasks";

function App() {
  const dueDate = () => {
    const now = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;
  };
  console.log(dueDate(), new Date().getDay());

  const [toDo, setToDo] = useState(
    [
      { task: "Walk the dog", due: dueDate(), completed: false },
      { task: "Cook", due: dueDate(), completed: false },
      { task: "Shopping", due: dueDate(), completed: false },
    ] || []
  );

  const [done, setDone] = useState([]);

  return (
    <>
      <Header />
      <main>
        <Tasks toDo={toDo} setToDo={setToDo} done={done} setDone={setDone} />
      </main>
      <Footer />
    </>
  );
}

export default App;
