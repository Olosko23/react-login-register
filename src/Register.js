import React,{useState} from 'react'

function Register(props) {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${name} registered, check email to confirm registration`);
    console.log(mail, pass);
  }

  return (
    <div>
      <div className="login">
        <h2>New User</h2>
        <h3>Fill in credentials to sign up</h3>
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="textbox">
                <input type="text" placeholder="Username..." required 
                onChange={(e) => setName(e.target.value)}/>
                <span className="material-symbols-outlined">account_circle</span>
            </div>
            <div className="textbox">
                <input type="email" placeholder="Email Address..." required
                onChange={(e) => setMail(e.target.value)} />
                <span className="material-symbols-outlined">alternate_email</span>
            </div>
                <div className="textbox">
                <input type="password" placeholder="Password..." required 
                onChange={(e) => setPass(e.target.value)}/>
                <span className="material-symbols-outlined">lock</span>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <div className="link-btn">
        <button  className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login</button>
      </div>
      </div>
    </div>
  )
}

export default Register;