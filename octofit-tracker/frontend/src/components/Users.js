import React, { useEffect, useState } from 'react';

const getApiBaseUrl = () => {
  const codespace = process.env.CODESPACE_NAME;
  if (codespace) {
    return `https://${codespace}-8000.app.github.dev/api/users/`;
  }
  return 'http://localhost:8000/api/users/';
};

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(getApiBaseUrl())
      .then(res => res.json())
      .then(data => setUsers(data.results || data))
      .catch(() => setUsers([]));
  }, []);
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u, i) => (
          <li key={u.id || i}>{JSON.stringify(u)}</li>
        ))}
      </ul>
    </div>
  );
}
