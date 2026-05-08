import { useEffect, useState } from "react";

export default function GlowtimeTest() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);

  // NEW: Inputs for custom session
  const [subject, setSubject] = useState("Math");
  const [durationMinutes, setDurationMinutes] = useState(45);
  const [mood, setMood] = useState("Focused");

  // Fetch sessions
  const fetchSessions = async () => {
    const response = await fetch("http://localhost:8080/sessions");
    const data = await response.json();
    setSessions(data);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  // Add new session
  const addSession = async () => {
    setLoading(true);
    const newSession = { subject, durationMinutes, mood };

    const response = await fetch("http://localhost:8080/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSession),
    });

    const result = await response.json();
    console.log("Session created:", result);
    fetchSessions();
    setLoading(false);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid gray", marginTop: "1rem" }}>
      <h2>📚 Glowtime Backend Test</h2>

      {/* INPUT FIELDS */}
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>

        <label style={{ marginLeft: "1rem" }}>
          Duration:
          <select
            value={durationMinutes}
            onChange={(e) => setDurationMinutes(parseInt(e.target.value))}
            style={{ marginLeft: "0.5rem" }}
          >
            <option value={25}>25 min</option>
            <option value={45}>45 min</option>
            <option value={60}>1 hour</option>
          </select>
        </label>

        <label style={{ marginLeft: "1rem" }}>
          Mood:
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          >
            <option value="Focused">Focused</option>
            <option value="Chill">Chill</option>
            <option value="Sprint">Sprint</option>
          </select>
        </label>
      </div>

      <button onClick={addSession} disabled={loading}>
        {loading ? "Adding..." : "Add Session"}
      </button>

      <ul>
        {sessions.map((s) => (
          <li key={s.id}>
            {s.subject} – {s.durationMinutes} min – {s.mood}
          </li>
        ))}
      </ul>
    </div>
  );
}
