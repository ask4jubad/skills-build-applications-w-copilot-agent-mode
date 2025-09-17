import React, { useEffect, useState } from 'react';

const getApiBaseUrl = () => {
  const codespace = process.env.CODESPACE_NAME;
  if (codespace) {
    return `https://${codespace}-8000.app.github.dev/api/workouts/`;
  }
  return 'http://localhost:8000/api/workouts/';
};

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch(getApiBaseUrl())
      .then(res => res.json())
      .then(data => setWorkouts(data.results || data))
      .catch(() => setWorkouts([]));
  }, []);
  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((w, i) => (
          <li key={w.id || i}>{JSON.stringify(w)}</li>
        ))}
      </ul>
    </div>
  );
}
