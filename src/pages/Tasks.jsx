export default function Items({ toDo, setDone, done, setToDo }) {
  return (
    <>
      <section className="">
        <h1>To-Do List:</h1>

        {toDo.map((item, index) => (
          <article className="taskBox" key={index}>
            <div className="taskDetails">
              <h3 className="task toDo">{item.task}</h3>
              <button onClick={() => (item.completed = true)}>
                Mark as Done
              </button>
            </div>
            <p>Due on: {item.due}</p>
          </article>
        ))}
      </section>

      <section className="">
        <h1>Done:</h1>

        {toDo.map((item, index) => (
          <article className="taskBox" key={index}>
            <h3 className="task done">{item.task}</h3>

            <p>Done on: {item.due}</p>
          </article>
        ))}
      </section>
    </>
  );
}
