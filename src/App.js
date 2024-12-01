import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.phone.value + "";
    const dob = new Date(e.target.dob.value);
    const today = new Date();

    if (phoneNumber.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (dob > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future");
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <label>Username:</label>
              <input id="username" type="text" required></input>

              <label>Email Address:</label>
              <input id="email" type="email" required></input>

              <label>Phone Number:</label>
              <input id="phone" type="tel" required></input>

              <label>Date of Birth:</label>
              <input id="dob" type="date" required></input>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
