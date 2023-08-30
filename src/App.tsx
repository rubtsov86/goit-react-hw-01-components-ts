import React from 'react';
import user from './Profile/user.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
    </>
  );
}

export default App;
