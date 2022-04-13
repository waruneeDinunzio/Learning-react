import { useState } from "react";
import Headers from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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

    // Delete Task function
    const deleteTask = (id)=>{
      //console.log('delete', id)
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id)=> {
      console.log("toggle", id)
      setTasks(
        tasks.map((task)=>
          task.id === id ? {...task, reminder: !task.reminder } : task
        )
      )
    }

  return (
    <div className="container">
      <h1>
      <Headers />
      <AddTask />
        {/* Hello {name ? name : "No one!"} */}
      {tasks.length > 0 ?(
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : (
        "No Tasks To show"
      )}

      </h1>
      
    </div>
  );
}

export default App;
