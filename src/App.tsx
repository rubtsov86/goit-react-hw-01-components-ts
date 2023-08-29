import React from 'react';
import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default App;
