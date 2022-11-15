import React, {useState} from 'react'
import Avatar from './assets/avatar.png'

function Login(props) {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`${mail} logged in`)
      console.log(mail, pass)
    }
  return (
    <div>
      <div className="login">
        <div className="avatar">
          <img scr={Avatar} alt="User" />
        </div>
        <h2>Login</h2>
        <h3>Welcome back</h3>
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="textbox">
                <input type="email" placeholder="Email Address..." required 
                onChange={(e)=> setMail(e.target.value)}/>
                <span className="material-symbols-outlined">account_circle</span>
            </div>
                <div className="textbox">
                <input type="password" placeholder="Password..." required
                onChange={(e)=> setPass(e.target.value)}/>
                <span className="material-symbols-outlined">lock</span>
            </div>
            <button type="submit">Login</button>
        </form>
              <div className="link-btn">
              <button  className="link-btn" onClick={() => props.onFormSwitch('Login')}>New User? Register</button>
              </div>
      </div>
    </div>
  )
}

export default Login;