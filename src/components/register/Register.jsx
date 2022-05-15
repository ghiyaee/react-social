import './register.css'

export default function Register() {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerLeft">
          <span className="logoregister">Logo Social</span>
          <span className="register">Connect with friends and the world</span>
        </div>
        <div className="registerRight">
          <input placeholder="Username" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Password Again" />
          <button className="registerbtn">Sign Up</button>
          <button className="registerNew">Log into Account</button>
        </div>
      </div>
    </div>
  );
}
