import { useEffect, useState } from "react";
import axios from "axios";


const API_URL = "https://task-api-seba-123-f6dng4b6fzhafga0.polandcentral-01.azurewebsites.net/api/tasks";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error("Błąd pobierania:", err);
    }
  };

  
  const addTask = async () => {
    if (!title.trim()) return;

    try {
      await axios.post(API_URL, { title });
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error("Błąd dodawania:", err);
    }
  };

  
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Błąd usuwania:", err);
    }
  };

  
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Tasks Dashboard</h1>

      {/*  DODAWANIE */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nowe zadanie..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />

        <button onClick={addTask}>Add</button>
      </div>

      {/*  LISTA */}
      <ul>
        {tasks.length === 0 ? (
          <p>Brak zadań</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: "10px" }}>
              {task.title}

              <button
                onClick={() => deleteTask(task.id)}
                style={{ marginLeft: "10px" }}
              >
                Usuń
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}