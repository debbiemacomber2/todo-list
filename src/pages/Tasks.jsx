export default function Items({ toDo, setDone, done, setToDo }) {
  const handleDoneTask = (item) => {
    item.completed = true;
    setDone([...done, item]);
    setToDo(toDo.filter((task) => task.completed === false));
  };

  const formatDate = (date, month) => {
    // const now = new Date();
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
    const spscrpt =
      date === 1 || date === 21 || date === 31
        ? "st"
        : date === 2 || date === 22
        ? "nd"
        : date === 3 || date === 23
        ? "rd"
        : "th";

    return `${days[(date % 7) - 1]}, ${date}${spscrpt} ${months[month - 1]}`;
  };

  const doneDate = formatDate(new Date().getDate(), new Date().getMonth() + 1);

  return (
    <>
      <section className="pending">
        <h1>Pending Tasks:</h1>

        {toDo.map((item, index) => (
          <article className="taskBox" key={index}>
            <div className="taskDetails">
              <h3 className="task toDo">{item.task}</h3>
              <button onClick={() => handleDoneTask(item)}>Mark as Done</button>
            </div>
            <p>Due on: {formatDate(item.due.date, item.due.month)}</p>
          </article>
        ))}
      </section>

      <section className="completed">
        <h1>Completed Tasks:</h1>

        {done.map((item, index) => (
          <article className="taskBox" key={index}>
            <h3 className="task done">{item.task}</h3>

            <p>Done on: {doneDate}</p>
          </article>
        ))}
      </section>
    </>
  );
}
