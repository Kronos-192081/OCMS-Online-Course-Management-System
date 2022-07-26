import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

const Login = () => {
    const notyf = new Notyf();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, password };
        setIsPending(true);
        fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
        })
        .then((res) => {
            setIsPending(false);
            setErrEmail('');
            setErrPassword('');
            if(res.ok)
            {
                res.json().then((msg) => {
                    localStorage.setItem('ocms_token', msg.token);
                    notyf.success("Logged in successfully!!!");
                    history.push('/dashboard');
                })
            }
            else
            {
                res.json().then((err) => {
                    if(err.email !== undefined) setErrEmail(err.email);
                    if(err.password !== undefined) setErrPassword(err.password);
                })
            }
        })
    }
    
    return (
        <div className="login">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your Account</p>
              <form onSubmit={handleSubmit}>
                <label>Email ID</label>
                <input 
                    type="text"
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                { (errEmail !== '') && <label style={{color: 'red', fontSize: 14}}>***{errEmail}***</label> }
                <br />
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                { (errPassword !== '') && <label style={{color: 'red', fontSize: 14}}>***{errPassword}***</label> }
                <br />
                { !isPending && <button>Login</button> }
                { isPending && <button disabled>Logging in ...</button> }
            </form>
            </div>
          </div>
        </div>
  );
}
 
export default Login;