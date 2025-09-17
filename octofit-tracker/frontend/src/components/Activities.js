import React, { useEffect, useState } from 'react';

const getApiBaseUrl = () => {
  const codespace = process.env.CODESPACE_NAME;
  if (codespace) {
    return `https://${codespace}-8000.app.github.dev/api/activities/`;
  }
  return 'http://localhost:8000/api/activities/';
};

export default function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch(getApiBaseUrl())
      .then(res => res.json())
      .then(data => setActivities(data.results || data))
      .catch(() => setActivities([]));
  }, []);
  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((a, i) => (
          <li key={a.id || i}>{JSON.stringify(a)}</li>
        ))}
      </ul>
    </div>
  );
}
