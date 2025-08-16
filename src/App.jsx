import GlowtimeTest from "./GlowtimeTest";


//import the useState hook from React to handle component state
import {useState} from "react";
//import styles from css file
import "./index.css";




const encouragements = [
    "You’re not slow — you’re thorough 🕊️",
    "Slow learning is deep learning — you’re building it to last 🧱",
    "The more you understand, the more you’ll enjoy it 📖",
    "Even 10 focused minutes can change your day ⏳",
    "Understanding something deeply is better than rushing through it 📚",
    "Confusion is just a sign you’re about to level up 💡",
    "You don’t have to do it all today — just one step first 🧩",
    "It’s okay if it’s hard — hard means you’re learning 🧠",
    "Learning at your own pace means you’ll remember it longer 📖",
    "Deep focus is quiet power — protect it 🛡️",
    "Every concept you master makes the next one easier 🎓",
    "You don’t hate the subject — you just haven’t seen your angle yet 🔍",
    "Once it clicks, it becomes fun — keep going 🧩",
    "You’re allowed to go slow. Just don’t stop 💫",
    "Frustration is part of the process. You’re close to a breakthrough 🚪",
    "Every study session is a vote for the life you want 🗳️",
    "Don’t aim for a perfect session — aim to begin ⏳",
    "Challenge your mind — it’s stronger than you think 🧠💪",
    "Done is better than perfect. Keep moving ✨",
    "You don’t need to keep up — you need to keep going 💫",
    "Success isn’t loud — it’s often quiet, boring repetition 🎧",
    "Mastery takes time — and you’re choosing mastery 🎯",
"Don’t rush your growth. Strong roots take time to grow 🌳",
];


const vibeData = {
    chill:{
        emoji: "🌿",
        message: "Hey study buddy 🌿 Take it slow and steady today."
    },

    "last-minute":{
        emoji: "⏰", 
        message: "Hey! It’s not too late. One hour can change everything!"
    },
    competitive: {
        emoji: "🔥",
        message: "Let’s go! You vs You. Let’s win today 🔥"
    },
    determined:{
        emoji:  "💪",
        message: "Focused mode on 💪 Let’s crush your list today."
    }
};



const flipCards = [
    {
      front: "Feeling stuck?",
      back: "Try writing what you do know first."
    },
    {
      front: "Can’t stay focused?",
      back: "Try a 25-minute timer with a 5-minute break."
    },
    {
      front: "Overwhelmed by your to-do list?",
      back: "Pick 1 small task — momentum builds confidence."
    },
    {
      front: "Distracted by your phone?",
      back: "Try airplane mode for 30 mins — you won’t miss much."
    }
  ];
  
// Define main react component for your app, AKA stuff shown for the website
function App() {

    // add TASKS for TO DO LIST
    // defining a constant that holds a list of tasks as an array["read notes", "do quiz"  ]
    // 'setTasks' is used to update the tasks as they are added or removed
    const [tasks, setTasks] = useState([]);


    // keeps track of what user types into the text boxes
    // newTask stores the current value of the input
    //setNewTask updates it as is user types
    const[newTask, setNewTask] = useState("");
    
    const [encouragement, setEncouragement] = useState("");
    const [vibe, setVibe] = useState(null);


    const handleEncourageClick = () => {
        const randomIndex = Math.floor(Math.random() * encouragements.length);
        setEncouragement(encouragements[randomIndex]);
      
        // Play the sound when button is clicked
        const audio = document.getElementById("encourage-sound");
        audio.currentTime = 0;
        audio.play();
      };
    
    const handleAddTask = () => {
        // if the input is not an empty space then continue
        if (newTask.trim() !== "") {

        // adds new task to the end of the tasks array
        // "...tasks" means keep all the old tasks, then add the new one 
        // it appends a new task without erasing the old tasks.
        setTasks([...tasks, newTask]);

        // cleasr input after adding a new task 
        setNewTask("");

    }
};

    // delete TASKS for TO DO LIST

    // removes task at a given index
    const handleDeleteTask = (index) => {
    // filter keeps all the tasks except for the one being deleted 
        const updatedTasks = tasks.filter((_,i) => i != index);

        // updates the task list to show new version
        setTasks(updatedTasks);

        //Declare a state variable called vibe   with a setter function "setVibe"
        //Starts as null meaning no vibe selected yet 

    };

    //layout of the webpage
    //Return the JSX that defines the UI structure
    return(

        <div className="container">
            {/* heading at the top of the page */}
            <h1>Choose Your Study Vibe✨</h1>
            
            {/* Section for all the vibe selection buttons */}
            <div className="vibe-selector">
                {/* loop thrugh each vibe key(chill, last-minute, etc) and make a button for it*/}
                {Object.keys(vibeData).map((key) =>(
            // Render button for each vibe

                <button
                 // unique key for react list rendering(helps react keep track of  each button)
                    key={key}

                    // CSS style class for button
                    className={`vibe-btn ${key}`}

                    // set the selected vibe when clicked
                    onClick={() => setVibe(key)}
                    >
                    {/* Show the emoji and label text(replace dash with space) */}
                    {vibeData[key.emoji]} {key.replace("-", " ")}
                </button>
               
               ))}

            </div>

                {/* This section shows the avatar and message based on the vibe selected */}

                <div className="avatar-box">
                    {/* Show vibes emoji/or robt emoji before anything is picked */}
                    <div className="avatar">{vibe ? vibeData[vibe].emoji: "🤖"} </div>
                    {/* Show matching message or starting message if nothing picked*/}
                    <p className={`greeting ${vibe ? "fade-in" : ""}`}>
                     {vibe ? vibeData[vibe].message : "Select your vibe to begin."}
                    </p>
                    <div className="encourage-section">
                <button className="encourage-btn" onClick={handleEncourageClick}>
                Encourage Me 💌
                </button>
                <p className="encourage-msg">{encouragement}</p>

                {/* Sound effect element */}
                <audio id="encourage-sound" src="/sparkle-sound.wav" />
                </div>
    
                {/* Fidget Toy Button */}
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
                <div className="quick-boosts">
                    <h2>Quick Boosts 💡</h2>
                    <div className="flip-card-container">
                        {flipCards.map((tip, index) => (
                            <div key={index} className="flip-card">
                                <div className="flip-inner">
                                <div className="flip-front">
                                  {tip.front}
                                </div>
                                <div className="flip-back">
                                 {tip.back}
                                </div>
                            </div>
                         </div>
                         ))}
                     </div>
                </div>
            
        
<div className="todo-list">
    <h2>Your To-Do List 📝</h2>

    <div className="task-input">
        <input

            type="text"
            // keeps the input synched with react state
            value={newTask}
            // updates newtask every time for new input
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Enter a Task...'
            onKeyDown={(e) =>{
                // user will press enter to add a task
                if (e.key ==="Enter") {
                    handleAddTask();
                }

            }}
            
            />
            {/* this add the "Add" button for clicking */}
            <button onClick={handleAddTask}>Add</button>
    </div>

        {/* this loops thru each item in tasks using .map */}
        <ul className="task-items">
            {tasks.map((task,index) => (
                    // helps react identify each task
                <li key={index}>
                    {/* displays task's text */}
                    {task}
                    {/* x button will delete the task if pressed on*/}
                <button onClick={() => handleDeleteTask(index)}>x</button>
                </li>
        ))}

    </ul>
</div>
        <GlowtimeTest />

        </div>



    );
}



//This lets other files(like main.jsx) to use App component 
export default App;


