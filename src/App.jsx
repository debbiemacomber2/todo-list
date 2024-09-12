import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";

function App() {
  const [toDo, setToDo] = useState(
    /* [
      {
        task: "Walk the dog",
        due: { date: 11, month: 9 },
        completed: false,
      },
      { task: "Cook", due: { date: 31, month: 9 }, completed: false },
      { task: "Shopping", due: { date: 22, month: 10 }, completed: false },
    ]  */

    () => {
      const pndngTasks = JSON.parse(localStorage.getItem("pendingTasks"));
      return pndngTasks ? pndngTasks : [];
    }
  );

  const [done, setDone] = useState(() => {
    const pndngTasks = JSON.parse(localStorage.getItem("completedTasks"));
    return pndngTasks ? pndngTasks : [];
  });

  useEffect(() => {
    localStorage.setItem("pendingTasks", JSON.stringify(toDo));
    localStorage.setItem("completedTasks", JSON.stringify(done));
  }, [done, toDo]);

  return (
    <>
      <Header />
      <main>
        <NewTask setToDo={setToDo} toDo={toDo} />
        <Tasks toDo={toDo} setToDo={setToDo} done={done} setDone={setDone} />
      </main>
      <Footer />
    </>
  );
}

export default App;
