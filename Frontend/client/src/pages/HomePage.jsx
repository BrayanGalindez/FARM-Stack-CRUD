import { useEffect, useState } from "react";
// import axios from "axios"
import { fetchTasks } from "../api/tasks";
import TaskList from "../components/TaskList";

function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <TaskList tasks={tasks} />;
}

export default HomePage;
