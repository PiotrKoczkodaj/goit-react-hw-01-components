import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Profile } from 'components/Profil/Profil';
import { Statistics } from 'components/Statistics/Statistics';
import './index.css';
import user from 'components/Profil/user.json';
import data from 'components/Statistics/data.json';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <App />
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics
      title="Upload stats"
      stats = {data}
    />
     
  </React.StrictMode>
);

