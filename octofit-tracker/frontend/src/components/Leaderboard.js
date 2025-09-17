import React, { useEffect, useState } from 'react';

const getApiBaseUrl = () => {
  const codespace = process.env.CODESPACE_NAME;
  if (codespace) {
    return `https://${codespace}-8000.app.github.dev/api/leaderboard/`;
  }
  return 'http://localhost:8000/api/leaderboard/';
};

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    fetch(getApiBaseUrl())
      .then(res => res.json())
      .then(data => setEntries(data.results || data))
      .catch(() => setEntries([]));
  }, []);
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {entries.map((e, i) => (
          <li key={e.id || i}>{JSON.stringify(e)}</li>
        ))}
      </ul>
    </div>
  );
}
