import GlowtimeTest from "./GlowtimeTest";
import { useState, useEffect } from "react";
import "./index.css";

// Array of encouragement messages
const encouragements = [
  "You're not slow — you're thorough 🕊️",
  "Slow learning is deep learning — you're building it to last 🧱",
  "The more you understand, the more you'll enjoy it 📖",
  "Even 10 focused minutes can change your day ⏳",
  "Understanding something deeply is better than rushing through it 📚",
  "Confusion is just a sign you're about to level up 💡",
  "You don't have to do it all today — just one step first 🧩",
  "It's okay if it's hard — hard means you're learning 🧠",
  "Learning at your own pace means you'll remember it longer 📖",
  "Deep focus is quiet power — protect it 🛡️",
  "Every concept you master makes the next one easier 🎓",
  "You don't hate the subject — you just haven't seen your angle yet 🔍",
  "Once it clicks, it becomes fun — keep going 🧩",
  "You're allowed to go slow. Just don't stop 💫",
  "Frustration is part of the process. You're close to a breakthrough 🚪",
  "Every study session is a vote for the life you want 🗳️",
  "Don't aim for a perfect session — aim to begin ⏳",
  "Challenge your mind — it's stronger than you think 🧠💪",
  "Done is better than perfect. Keep moving ✨",
  "You don't need to keep up — you need to keep going 💫",
  "Success isn't loud — it's often quiet, boring repetition 🎧",
  "Mastery takes time — and you're choosing mastery 🎯",
  "Don't rush your growth. Strong roots take time to grow 🌳",
];

// Object containing vibe data (emoji and message)
const vibeData = {
  chill: {
    emoji: "🌿",
    message: "Hey study buddy 🌿 Take it slow and steady today.",
  },
  "last-minute": {
    emoji: "⏰",
    message: "Hey! It's not too late. One hour can change everything!",
  },
  competitive: {
    emoji: "🔥",
    message: "Let's go! You vs You. Let's win today 🔥",
  },
  determined: {
    emoji: "💪",
    message: "Focused mode on 💪 Let's crush your list today.",
  },
};
// Array of flip card data (front and back content)
const flipCards = [
  {
    front: "Feeling stuck?",
    back: "Try writing what you do know first.",
  },
  {
    front: "Can't stay focused?",
    back: "Try a 25-minute timer with a 5-minute break.",
  },
  {
    front: "Overwhelmed by your to-do list?",
    back: "Pick 1 small task — momentum builds confidence.",
  },
  {
    front: "Distracted by your phone?",
    back: "Try airplane mode for 30 mins — you won't miss much.",
  },
];

function App() {
    // State variables
  const [tasks, setTasks] = useState([]); // Array of tasks
  const [newTask, setNewTask] = useState(""); // New task input value
  const [encouragement, setEncouragement] = useState(""); // Selected encouragement message
  const [vibe, setVibe] = useState(null); // Selected vibe
  const [loading, setLoading] = useState(true); // Loading state for fetching todos
  const [error, setError] = useState(null); // Error state for fetching todos

  // Fetch todos from the backend API on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to fetch todos from the backend API
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/todos");
      const data = await response.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching todos:", error);
      setError("Failed to fetch todos. Please try again.");
      setLoading(false);
    }
  };
// Function to handle encouragement button click
  const handleEncourageClick = () => {
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    setEncouragement(encouragements[randomIndex]);

    // Play the sound when button is clicked
    const audio = document.getElementById("encourage-sound");
    audio.currentTime = 0;
    audio.play();
  };
 // Function to handle adding a new task
  const handleAddTask = async () => {
    if (newTask.trim() !== "") {
      try {
        const response = await fetch("/api/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: newTask }),
        });
        const data = await response.json();
        setTasks([...tasks, data]);
        setNewTask("");
      } catch (error) {
        console.error("Error creating todo:", error);
      }
    }
  };
// Function to handle deleting a task
  const handleDeleteTask = async (id) => {
    try {
      await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
// Function to toggle the completed status of a task
  const toggleTodoCompleted = async (id) => {
    try {
      await fetch(`/api/todos/${id}/done`, {
        method: "PUT",
      });
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };
 // Render the component
  return (
    <div className="container">
      <h1>Choose Your Study Vibe✨</h1>

      <div className="vibe-selector">
        {Object.keys(vibeData).map((key) => (
          <button
            key={key}
            className={`vibe-btn ${key}`}
            onClick={() => setVibe(key)}
          >
            {vibeData[key].emoji} {key.replace("-", " ")}
          </button>
        ))}
      </div>
{/* Avatar and message */}
      <div className="avatar-box">
        <div className="avatar">{vibe ? vibeData[vibe].emoji : "🤖"}</div>
        <p className={`greeting ${vibe ? "fade-in" : ""}`}>
          {vibe ? vibeData[vibe].message : "Select your vibe to begin."}
        </p>
         {/* Encouragement button and message */}
        <div className="encourage-section">
          <button className="encourage-btn" onClick={handleEncourageClick}>
            Encourage Me 💌
          </button>
          <p className="encourage-msg">{encouragement}</p>
          <audio id="encourage-sound" src="/sparkle-sound.wav" />
        </div>
        {/* Fidget toy button */}
        <div className="fidget-toy-box">
          <button
            className="fidget-toy"
            onClick={() => {
              const audio = document.getElementById("fidget-sound");
              audio.currentTime = 0;
              audio.play();
            }}
          >
            🌸
          </button>
          <audio id="fidget-sound" src="/click.wav" />
        </div>
      </div>
  {/* Quick boosts */}
      <div className="quick-boosts">
        <h2>Quick Boosts 💡</h2>
        <div className="flip-card-container">
          {flipCards.map((tip, index) => (
            <div key={index} className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">{tip.front}</div>
                <div className="flip-back">{tip.back}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
{/* Todo list */}
      <div className="todo-list">
        <h2>Your To-Do List 📝</h2>
        {loading ? (
          <p>Loading todos...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
          {/* New task input */}
            <div className="task-input">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a Task..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddTask();
                  }
                }}
              />
              <button onClick={handleAddTask}>Add</button>
            </div>
            {/* Task list */}
            <ul className="task-items">
              {tasks.map((task) => (
                <li key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTodoCompleted(task.id)}
                  />
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task.task}
                  </span>
                  <button onClick={() => handleDeleteTask(task.id)}>x</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <GlowtimeTest />
    </div>
  );
}

export default App;