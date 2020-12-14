  
import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  // Initialize state
  const [password, setPassword] = useState([]);
  const getPasswords = () => {
    // Get the passwords and store them in state
   fetch("/api/passwords")
      .then((res) => res.json())
      .then((data) => setPassword(data));
};  
  useEffect(() => {
    fetch("/api/passwords")
      .then((res) => res.json())
      .then((data) => setPassword(data));
  }, []);
  return (
    <div className="App">
      {/* Render the passwords if we have them */}
      {password.length ? (
        <div>
          <h1>5 Passwords.</h1>
          <ul className="passwords">
            {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
            {password.map((password, index) => (
              <li key={index}>{password}</li>
            ))}
          </ul>
          <button className="more" onClick={getPasswords}>
            Get More
          </button>
        </div>
      ) : (
        // Render a helpful message otherwise
        <div>
          <h1>No passwords :(</h1>
          <button className="more" onClick={getPasswords}>
            Try Again?
          </button>
        </div>
      )}
    </div>
  );
}
export default App;