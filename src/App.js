import React, {useState} from 'react';
import Login from './login';
import Register from './Register';

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = () => {
        setCurrentForm();
    }
  return (
    <div className="App">
      {
        (currentForm === "login") ? <Login onFormSwicth={toggleForm} /> 
          :
        <Register onFormSwicth={toggleForm} />
    }
    </div>
  )
}

export default App;