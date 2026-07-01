import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext.jsx';
import {useContext} from 'react';

export default function Auth() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [mode,setMode] = useState("signUp");
    const navigate = useNavigate();
    const [error,setError] = useState(null);
    const{signUp , login} = useContext(AuthContext);
    function onSubmit(data){
        setError(null);
        let result;

        if(mode ==="signUp"){
            
          result=  signUp(data.email,data.password)
        }else{
           result=  login(data.email,data.password)
        }

        if(result.success){
         navigate("/");
        }    else{
            setError(result.error);
        }
    
    }
  return  (
  <div className="page">
    <div className="container">
        <div className="auth-container">
           
        <h1 className="page-title"></h1>
        {mode ==="signUp"?"signUp":"Login"}
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
                <label className="form-label" htmlFor="email">Email </label>
                <input className="form-input" type='email' id="email" {...register("email",{required:"email is required"})}/>
                 {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-input" type='password' id="password" {...register("password",{required:"password is required",minLength:{
                    value:6,message:"password  must be 6 letters long",},maxLength:{value:12,message:"password must be below 12 characters",},
                })}/>
                {errors.password && <span className ="form-error">{errors.password.message}</span>}
               
            </div>
            <button type="submit" className="btn btn-primary" >
                {mode ==='signUp'?"signUp":"Login"}</button>
        </form>
        <div className ="auth-switch">
            {mode==="signUp" ?(
            <p>Already have an account? {" "}<span className="auth-link" onClick={() => setMode('Login')}>Login</span></p>
           ) : 
           (<p>Don't have an account? {" "}<span className="auth-link" onClick={() => setMode('signUp')}>Signup</span></p>)
           
        }
        </div>
        
        </div>
    </div>
  </div>
  ); 
  
}