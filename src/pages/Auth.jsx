import {useState} from 'react';
import {useForm} from 'react-hook-form';

export default function Auth() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [mode,setMode] = useState('Signup');
  return  (
  <div className="page">
    <div className="container">
        <div className="auth-container">
        <h1 className="page-title"></h1>
        {mode ==="Signup"?"Signup":"Login"}
        <form className="auth-form">
            <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" type='email' id="email"/>
            </div>
            <div className="form-group">
                <label className="form-label" >Password</label>
                <input className="form-input" type='password' id="password"/>
            </div>
            <button type="submit" className="btn btn-primary" >
                {mode ==='signup'?"Signup":"Login"}</button>
        </form>
        <div className ="auth-switch">
            {mode==="signup" ?(
            <p>Already have an account? {" "}<span className="auth-link" onClick={() => setMode('login')}>Login</span></p>
           ) : 
           (<p>Don't have an account? {" "}<span className="auth-link" onClick={() => setMode('signup')}>Signup</span></p>)
           
        }
        </div>
        
        </div>
    </div>
  </div>
  ); 
  
}