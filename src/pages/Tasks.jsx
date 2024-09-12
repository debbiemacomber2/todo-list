export default function Items({ toDo, setDone, done, setToDo }) {
  const handleDoneTask = (item) => {
    item.completed = true;
    setDone([...done, item]);
    setToDo(toDo.filter((task) => task.completed === false));
  };

  const formatDate = (date, month) => {
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
      Number(date) === 1 || Number(date) === 21 || Number(date) === 31
        ? "st"
        : Number(date) === 2 || Number(date) === 22
        ? "nd"
        : Number(date) === 3 || Number(date) === 23
        ? "rd"
        : "th";

    return `${days[(date % 7) - 1]}, ${date}${spscrpt} ${months[month - 1]}`;
  };
  const handleDelete = (item) => {
    item.completed === true
      ? setDone(done.filter((obj) => obj.task !== item.task))
      : setToDo(toDo.filter((obj) => obj.task !== item.task));
  };

  const doneDate = formatDate(new Date().getDate(), new Date().getMonth() + 1);

  return (
    <>
      <section className="pending">
        <h1>Pending Tasks:</h1>

        {toDo.length === 0 ? (
          <p className="notFoundMsg">No pending tasks available</p>
        ) : (
          toDo.map((item, index) => (
            <article className="taskBox" key={index}>
              <div>
                <h3 className="task toDo">{item.task}</h3>
                <p>Due on: {formatDate(item.due.date, item.due.month)}</p>
              </div>
              <div className="btns">
                <button onClick={() => handleDoneTask(item)}>
                  Mark as Done
                </button>
                <button
                  style={{ color: "rgba(255, 0, 0, 0.5)" }}
                  onClick={() => handleDelete(item)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))
        )}
      </section>

      <section className="completed">
        <h1>Completed Tasks:</h1>

        {done.length === 0 ? (
          <p className="notFoundMsg">No completed tasks available</p>
        ) : (
          done.map((item, index) => (
            <article className="taskBox" key={index}>
              <h3 className="task done">{item.task}</h3>

              <p>Done on: {doneDate}</p>
              <button
                style={{ color: "rgba(255, 0, 0, 0.5)" }}
                onClick={() => handleDelete(item)}
              >
                Remove
              </button>
            </article>
          ))
        )}
      </section>
    </>
  );
}
