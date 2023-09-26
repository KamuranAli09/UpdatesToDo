// App.js
import React from 'react';
import './App.css';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import TaskList from './TaskList';
import LogoutButton from './LogoutButton';
import { useUserContext } from './UserContext';


function App() {
  const { user } = useUserContext();

  return (
    <div className="App">
      <header>
        <h1>Todo List App</h1>
        {user ? (
          <div>
            <p>Welcome, {user.username}!</p>
            <LogoutButton />
          </div>
        ) : (
          <div>
            <SignupForm />
            <LoginForm />
          </div>
        )}
      </header>
      {user && (
        <main>
          <h2>Todo List</h2>
          <TaskList />
        </main>
      )}
    </div>
  );
}

export default App;
