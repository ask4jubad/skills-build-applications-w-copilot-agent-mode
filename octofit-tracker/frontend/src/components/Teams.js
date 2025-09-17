import React, { useEffect, useState } from 'react';

const getApiBaseUrl = () => {
  const codespace = process.env.CODESPACE_NAME;
  if (codespace) {
    return `https://${codespace}-8000.app.github.dev/api/teams/`;
  }
  return 'http://localhost:8000/api/teams/';
};

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(getApiBaseUrl())
      .then(res => res.json())
      .then(data => setTeams(data.results || data))
      .catch(() => setTeams([]));
  }, []);
  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((t, i) => (
          <li key={t.id || i}>{JSON.stringify(t)}</li>
        ))}
      </ul>
    </div>
  );
}
