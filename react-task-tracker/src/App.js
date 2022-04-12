import { useState } from "react";
import Headers from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const name = null
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: 'Doctor appointment',
            day: 'Aplil 15 at 1:30 pm',
            reminder: true,
        },
        {
            id:2,
            text:"pick up kids",
            day: 'everyday at 2:30pm',
            reminder: true,
        },
        {
            id:3,
            text:"food shopping",
            day: 'Sunday at 2:30pm',
            reminder: true,
        }
    ])
  return (
    <div className="container">
      <h1>
      <Headers />
        {/* Hello {name ? name : "No one!"} */}
      <Tasks tasks={tasks}/>
      </h1>
      
    </div>
  );
}

export default App;
